import {
  createDirectus,
  rest,
  readItems,
  readItem,
  createItem,
} from "@directus/sdk";

// Define your Directus collections schema
export interface Player {
  id: number;
  name: string;
  number: string;
  position: string;
  image: string;
  appearances: number;
  goals: number;
  assists: number;
  date_of_birth: string;
  weight: string;
  height: string;
  biography: string;
}
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  image: string; // Changed from 'photo' to 'image' to match Directus schema
  rating: number;
  date?: string | null;
}
export interface News {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string;
  published_date: string;
  author: string;
  comments_count: number;
  category: string;
}

export interface Gallery {
  id: number;
  image: string;
  title: string;
  category: "player" | "championship" | "training";
  alt_text: string;
}

export interface ContactSubmission {
  id?: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  submitted_at?: string;
  status?: "new" | "read" | "replied";
}

interface Schema {
  players: Player[];
  news: News[];
  gallery: Gallery[];
  testimonials: Testimonial[];
  contact: ContactSubmission[];
}

// Create Directus client
const directusUrl =
  process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";

export const directus = createDirectus<Schema>(directusUrl).with(rest());

// Helper functions to fetch data

/**
 * Submit contact form
 */
export async function submitContactForm(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Promise<{ success: boolean; data?: ContactSubmission; error?: unknown }> {
  try {
    // First, save to Directus
    const submission = await directus.request(
      createItem("contact", {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        submitted_at: new Date().toISOString(),
        status: "new",
      })
    );

    // Then, send emails via custom endpoint
    try {
      const emailResponse = await fetch(`${directusUrl}/send-contact-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          submissionId: (submission as ContactSubmission).id,
        }),
      });

      if (!emailResponse.ok) {
        console.error("Failed to send emails:", await emailResponse.text());
        // Don't fail the whole submission if email fails
      }
    } catch (emailError) {
      console.error("Error sending emails:", emailError);
      // Don't fail the whole submission if email fails
    }

    return { success: true, data: submission as ContactSubmission };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error };
  }
}

/**
 * Get testimonials
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const testimonials = await directus.request(
      readItems("testimonials", {
        fields: ["id", "name", "role", "message", "image", "rating", "date"],
        sort: ["-rating", "-date"], // Sort by rating first, then date
      })
    );
    return testimonials as Testimonial[];
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}

/**
 * Get all players
 */
export async function getPlayers(): Promise<Player[]> {
  try {
    const players = await directus.request(
      readItems("players", {
        fields: ["*"],
        sort: ["number"],
      })
    );
    return players as Player[];
  } catch (error) {
    console.error("Error fetching players:", error);
    return [];
  }
}

/**
 * Get single player by ID
 */
export async function getPlayer(id: number): Promise<Player | null> {
  try {
    const player = await directus.request(
      readItem("players", id, {
        fields: ["*"],
      })
    );
    return player as Player;
  } catch (error) {
    console.error("Error fetching player:", error);
    return null;
  }
}

/**
 * Get all news articles
 */
export async function getNews(limit = 10): Promise<News[]> {
  try {
    const news = await directus.request(
      readItems("news", {
        fields: ["*"],
        sort: ["-published_date"],
        limit,
      })
    );
    return news as News[];
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

/**
 * Get single news article
 */
export async function getNewsArticle(slug: string): Promise<News | null> {
  try {
    const news = await directus.request(
      readItems("news", {
        fields: ["*"],
        filter: {
          slug: {
            _eq: slug,
          },
        },
        limit: 1,
      })
    );
    return (news[0] as News) || null;
  } catch (error) {
    console.error("Error fetching news article:", error);
    return null;
  }
}

/**
 * Get all gallery images
 */
export async function getGalleryImages(
  category?: "player" | "championship" | "training"
): Promise<Gallery[]> {
  try {
    const images = await directus.request(
      readItems("gallery", {
        fields: ["*"],
        filter: category ? { category: { _eq: category } } : undefined,
        sort: ["-id"],
      })
    );
    return images as Gallery[];
  } catch (error) {
    console.error("Error fetching gallery:", error);
    return [];
  }
}

/**
 * Get image URL from Directus
 */
export function getImageUrl(fileId: string) {
  return `${directusUrl}/assets/${fileId}`;
}
