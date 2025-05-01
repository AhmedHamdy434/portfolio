"use client";

import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:cmpunkthebest11@gmail.com?subject=${form.name}&body=${form.message}`;
  };

  return (
    <section className="py-25 px-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8 md:mb-4" id="contact">
          Contact Me
        </h2>

        <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mb-8">
          <a
            href={`mailto:cmpunkthebest11@gmail.com`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            <Mail size={18} /> cmpunkthebest11@gmail.com
          </a>
          <a
            href="tel:+201120713673"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
          >
            <Phone size={18} /> +2 01120713673
          </a>
        </div>
        <p className="text-secondary-text mb-8">
          Fell free to reach out if you have a project in mind or just want to
          connect.I&apos;m always happy to chat!
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-xl mx-auto text-left"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 focus:outline-none"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 focus:outline-none"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
