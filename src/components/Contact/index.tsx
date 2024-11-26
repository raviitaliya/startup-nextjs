"use client";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus({
        loading: false,
        error: "",
        success: "Message sent successfully!"
      });
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      setStatus({
        loading: false,
        error: "Failed to send message. Please try again.",
        success: ""
      });
    }
  };

  return (
    <section className="relative z-10 overflow-hidden py-20 lg:py-[120px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4 lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <h2 className="mb-6 text-[32px] font-bold  text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                Get in Touch with 
              </h2>
              <p className="text-base leading-relaxed mb-9 text-body-color dark:text-dark-6">
                Let's discuss how we can help your business grow. Reach out to us for expert solutions in branding, marketing, and development.
              </p>
              {/* Add contact information here if needed */}
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="relative rounded-lg bg-white dark:bg-dark p-8 shadow-lg sm:p-12">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                    required
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 h-40 resize-none"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90 disabled:opacity-50"
                  >
                    {status.loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
                {status.error && (
                  <p className="mt-4 text-red-500">{status.error}</p>
                )}
                {status.success && (
                  <p className="mt-4 text-green-500">{status.success}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
