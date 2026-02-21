"use client";
import { useState } from "react";
import { Mail } from "lucide-react";

export default function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "0eb64ad9-ff1b-4596-ace0-2483ce369625");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message sent!");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className=" self-start gap-2 mb-3 h-8 w-35 cursor-pointer rounded-2xl text-white border-2 hover:bg-slate-900 flex items-center justify-center font-bold transition-colors"
      >
        <Mail className="h-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* contact box */}
          <div className="relative bg-gray-900 p-8 rounded-sm shadow-2xl w-full max-w-md mx-4 z-10">
            <h2 className="text-2xl font-bold mb-4">Get in touch</h2>

            <form onSubmit={onSubmit}>
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="w-full p-2 outline-none mb-3 border-b"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full p-2 outline-none mb-3 border-b"
              />
              <textarea
                name="message"
                required
                placeholder="Message"
                className="w-full p-2 outline-none mb-3 border-b resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full p-2 bg-black text-white outline-none rounded-md cursor-pointer"
              >
                Send Message
              </button>
              <span>{result}</span>
            </form>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
