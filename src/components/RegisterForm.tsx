"use client";

import { useState, useEffect } from "react";
import { submitContactForm } from "@/lib/directus";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    age: "",
    gender: "",
    schoolName: "",
    sports: "",
    category: "",
    transportationNeed: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Calculate age from date of birth
  useEffect(() => {
    if (formData.dob) {
      const today = new Date();
      const birthDate = new Date(formData.dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      setFormData((prev) => ({ ...prev, age: age.toString() }));
    }
  }, [formData.dob]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      !formData.dob ||
      !formData.gender ||
      !formData.schoolName ||
      !formData.sports ||
      !formData.category
    ) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields",
      });
      setIsSubmitting(false);
      return;
    }

    // Submit to Directus (using contact form endpoint for now, can create separate registration endpoint)
    const result = await submitContactForm({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: `Registration Form Submission:
        Date of Birth: ${formData.dob}
        Age: ${formData.age}
        Gender: ${formData.gender}
        School Name: ${formData.schoolName}
        Sports: ${formData.sports}
        Category: ${formData.category}
        Transportation Need: ${formData.transportationNeed || "Not specified"}`,
    });

    if (result.success) {
      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your registration has been submitted successfully. We will contact you soon.",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        dob: "",
        age: "",
        gender: "",
        schoolName: "",
        sports: "",
        category: "",
        transportationNeed: "",
      });
    } else {
      setSubmitStatus({
        type: "error",
        message:
          "Sorry, there was an error submitting your registration. Please try again.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <style>{`
        .register-form-wrapper {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(231, 76, 60, 0.1);
        }
        .register-form-wrapper h4 {
          color: #2c3e50;
          font-weight: 600;
          margin-bottom: 12px;
          font-size: 16px;
        }
        .register-form-wrapper h4 .required-asterisk {
          color: #e74c3c;
          font-weight: 700;
          margin-left: 4px;
        }
        .register-form-wrapper .form-clt input,
        .register-form-wrapper .form-clt select,
        .register-form-wrapper .form-clt textarea {
          background-color: #ffffff;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          padding: 15px 20px;
          font-size: 16px;
          transition: all 0.3s ease;
          width: 100%;
        }
        .register-form-wrapper .form-clt input:focus,
        .register-form-wrapper .form-clt select:focus,
        .register-form-wrapper .form-clt textarea:focus {
          outline: none;
          border-color: #e74c3c;
          box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
          background-color: #fff;
        }
        .register-form-wrapper .form-clt input:hover,
        .register-form-wrapper .form-clt select:hover {
          border-color: #c0392b;
        }
        .register-form-wrapper .form-clt input[readOnly] {
          background-color: #f8f9fa;
          cursor: not-allowed;
          color: #6c757d;
        }
        @media (max-width: 768px) {
          .register-form-wrapper {
            padding: 25px 20px;
          }
        }
      `}</style>
      <form onSubmit={handleSubmit} className="contact-form-box">
        <div className="register-form-wrapper">
          <div className="row g-4 align-items-center">
            <div
              className="col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h4>
                Full Name <span className="required-asterisk">*</span>
              </h4>
              <div className="form-clt">
                <input
                  type="text"
                  name="name"
                  id="reg-name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <h4>
                Email Address <span className="required-asterisk">*</span>
              </h4>
              <div className="form-clt">
                <input
                  type="email"
                  name="email"
                  id="reg-email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h4>
                Phone Number <span className="required-asterisk">*</span>
              </h4>
              <div className="form-clt">
                <input
                  type="tel"
                  name="phone"
                  id="reg-phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <h4>
                Date of Birth <span className="required-asterisk">*</span>
              </h4>
              <div className="form-clt">
                <input
                  type="date"
                  name="dob"
                  id="reg-dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h4>Age</h4>
              <div className="form-clt">
                <input
                  type="number"
                  name="age"
                  id="reg-age"
                  placeholder="Age (auto-calculated)"
                  value={formData.age}
                  readOnly
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <h4>
                Gender <span className="required-asterisk">*</span>
              </h4>
              <div className="form-clt">
                <select
                  name="gender"
                  id="reg-gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
              <h4>
                School Name <span className="required-asterisk">*</span>
              </h4>
              <div className="form-clt">
                <input
                  type="text"
                  name="schoolName"
                  id="reg-school"
                  placeholder="Your School Name"
                  value={formData.schoolName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <h4>
                Sports <span className="required-asterisk">*</span>
              </h4>
              <div className="form-clt">
                <select
                  name="sports"
                  id="reg-sports"
                  value={formData.sports}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Sport</option>
                  <option value="football">Football</option>
                  <option value="basketball">Basketball</option>
                  <option value="volleyball">Volleyball</option>
                  <option value="cricket">Cricket</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h4>
                Category <span className="required-asterisk">*</span>
              </h4>
              <div className="form-clt">
                <select
                  name="category"
                  id="reg-category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="grassroots">Grassroots (6-11 years)</option>
                  <option value="intermediate">
                    Intermediate (12-15 years)
                  </option>
                  <option value="senior">Senior (16+ years)</option>
                </select>
              </div>
            </div>
            <div className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
              <h4>Transportation Need</h4>
              <div className="form-clt">
                <select
                  name="transportationNeed"
                  id="reg-transportation"
                  value={formData.transportationNeed}
                  onChange={handleChange}
                >
                  <option value="">Select Option</option>
                  <option value="yes">Yes, I need transportation</option>
                  <option value="no">No, I have my own transportation</option>
                </select>
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
                    borderRadius: "8px",
                    marginBottom: "20px",
                    backgroundColor:
                      submitStatus.type === "success" ? "#d4edda" : "#f8d7da",
                    color:
                      submitStatus.type === "success" ? "#155724" : "#721c24",
                    border: `1px solid ${
                      submitStatus.type === "success" ? "#c3e6cb" : "#f5c6cb"
                    }`,
                  }}
                >
                  {submitStatus.message}
                </div>
              </div>
            )}

            <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
           
              <button
                className="theme-btn mt-4"
                type="submit"
                disabled={isSubmitting}
              
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT REGISTRATION"}{" "}
                <i className="fa-solid fa-arrow-up-right"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
