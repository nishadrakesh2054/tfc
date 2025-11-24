// app/api/contact/route.ts
import { createClient } from "next-sanity";
import { NextRequest, NextResponse } from "next/server";

// Define the expected shape of the incoming data
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    let body: ContactFormData;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = body;

    // Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Validate Sanity configuration
    const writeToken = process.env.SANITY_WRITE_TOKEN;
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
    const apiVersion =
      process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-11-24";

    if (!writeToken) {
      console.error(
        "SANITY_WRITE_TOKEN is not configured in environment variables"
      );
      return NextResponse.json(
        { error: "Server configuration error. Please contact support." },
        { status: 500 }
      );
    }

    if (!projectId || !dataset) {
      console.error(
        "NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET is not configured"
      );
      return NextResponse.json(
        { error: "Server configuration error. Please contact support." },
        { status: 500 }
      );
    }

    // Create write client with explicit configuration
    // Important: The token MUST belong to the same project as projectId
    const writeClient = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: writeToken,
    });

    // Debug logging (remove in production)
    console.log("Sanity Config Check:", {
      hasToken: !!writeToken,
      tokenLength: writeToken?.length,
      projectId: projectId,
      dataset: dataset,
      apiVersion: apiVersion,
    });

    // Create document in Sanity
    const result = await writeClient.create({
      _type: "contact",
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || undefined,
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
        id: result._id,
      },
      { status: 200 }
    );
  } catch (error) {
    // Type-safe error handling
    console.error("Contact form submission error:", error);

    let errorMessage = "Failed to send message";
    let statusCode = 500;

    if (error instanceof Error) {
      errorMessage = error.message;

      // Handle specific Sanity errors
      if (
        errorMessage.includes("token") ||
        errorMessage.includes("unauthorized") ||
        errorMessage.includes("Session does not match") ||
        errorMessage.includes("SIO-401")
      ) {
        console.error(
          "Sanity authentication error - check SANITY_WRITE_TOKEN and project configuration"
        );
        errorMessage = "Server configuration error. Please contact support.";
        statusCode = 500;
      } else if (
        errorMessage.includes("network") ||
        errorMessage.includes("fetch")
      ) {
        errorMessage = "Network error. Please try again later.";
        statusCode = 503;
      }
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
