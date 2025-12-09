"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/directus";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all fields",
      });
      setIsSubmitting(false);
      return;
    }

    // Submit to Directus
    const result = await submitContactForm(formData);

    if (result.success) {
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setSubmitStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form-box">
      <div className="row g-4 align-items-center">
        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
          <h4>Your Name</h4>
          <div className="form-clt">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
          <h4>Your Email</h4>
          <div className="form-clt">
            <input
              type="email"
              name="email"
              id="email2"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
          <h4>Your Phone Number</h4>
          <div className="form-clt">
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
          <h4>Your Message</h4>
          <div className="form-clt">
            <textarea
              name="message"
              id="message"
              placeholder="Type your message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>

        {/* Status Message */}
        {submitStatus.type && (
          <div className="col-lg-12">
            <div
              className={`alert ${
                submitStatus.type === "success"
                  ? "alert-success"
                  : "alert-danger"
              }`}
              style={{
                padding: "15px",
                borderRadius: "5px",
                marginBottom: "20px",
                backgroundColor:
                  submitStatus.type === "success" ? "#d4edda" : "#f8d7da",
                color: submitStatus.type === "success" ? "#155724" : "#721c24",
                border: `1px solid ${
                  submitStatus.type === "success" ? "#c3e6cb" : "#f5c6cb"
                }`,
              }}
            >
              {submitStatus.message}
            </div>
          </div>
        )}

        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
          <button
            className="theme-btn mt-0"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "SENDING..." : "SEND MESSAGE"}{" "}
            <i className="fa-solid fa-arrow-up-right"></i>
          </button>
        </div>
      </div>
    </form>
  );
}
