import React, { useState } from "react";
import emailjs from "@emailjs/browser";


function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();

   emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formData,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)

      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Form submitted successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Email sending error:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
    //  alert(`Form submitted!`);
    // setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-cover bg-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

        <label className="block mb-2 font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label className="block mb-2 font-medium">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
