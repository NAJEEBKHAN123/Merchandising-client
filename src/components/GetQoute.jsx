import React, { useState } from "react";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote Request:", formData);
    alert("Your request has been submitted. We will contact you soon!");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold text-center mb-4">Get a Quote</h2>
      <p className="text-center text-gray-600 mb-6">
        Fill out the form or contact us directly through WhatsApp, Email, or Phone.
      </p>

      {/* Quote Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone Number"
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select a Service</option>
          <option value="store-setup">Store Setup</option>
          <option value="remodeling">Remodeling</option>
          <option value="product-arrangement">Product Arrangement</option>
          <option value="pricing">Pricing</option>
        </select>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Project Details..."
          rows="4"
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Submit Request
        </button>
      </form>

      {/* Direct Contact Options */}
      <div className="mt-6 text-center">
        <p className="text-gray-600 mb-3">Or contact us directly:</p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:yourcompany@email.com"
            className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
          >
            Email Us
          </a>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600"
          >
            WhatsApp
          </a>
          <a
            href="tel:+923001234567"
            className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
          >
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
