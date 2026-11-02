
"use client";

import { useState } from "react";

export default function Section() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/contact/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");

    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="row gy-4 justify-content-center">

          <div className="col-lg-3">
            <div className="info-item d-flex">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="info-item d-flex">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="info-item d-flex">
              <i className="bi bi-phone flex-shrink-0"></i>
              <div>
                <h4>Call:</h4>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
          </div>

        </div>

        <div className="row justify-content-center mt-4">

          <div className="col-lg-9">

            <form
              onSubmit={handleSubmit}
              role="form"
              className="php-email-form"
            >

              <div className="row">

                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="my-3">

                {loading && (
                  <div className="loading">Sending...</div>
                )}

                {status === "error" && (
                  <div className="error-message">
                    Unable to send your message. Please try again.
                  </div>
                )}

                {status === "success" && (
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                )}

              </div>

              <div className="text-center">
                <button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
