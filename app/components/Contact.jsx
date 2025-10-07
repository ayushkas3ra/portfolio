import React from 'react';
import { useState } from 'react';

const Contact = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending....");

        try {
            const formData = new FormData(event.target);
            formData.append("access_key", "dc87fd97-2de5-45e1-a792-d13c7ba3ad49");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                console.error("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            setResult("Something went wrong. Please try again.");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            id="contact"
            className="w-full px-[12%] py-10 scroll-mt-20 bg-[url(../assets/wallpaper.jpg)] bg-cover bg-fixed bg-center text-white"
        >
            {/* Section Header */}
            <h4 className="text-center mb-2 text-lg font-Outfit text-gray-400">
                Connect with me
            </h4>

            <h2 className="text-center text-5xl font-Ovo mb-4 text-white">
                Get in touch ✉️
            </h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Outfit text-gray-300">
                I'd love to hear from you! Please use the form below.
            </p>

            {/* Contact Form */}
            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
                {/* Input Fields Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
                    <input
                        className="flex-1 p-3 outline-none border border-gray-600 rounded-md bg-gray-800/70 text-white placeholder-gray-400 focus:border-gray-400 focus:bg-gray-700 transition-all duration-300"
                        type="text"
                        placeholder="Enter your name"
                        required
                        name="name"
                        disabled={isSubmitting}
                    />
                    <input
                        className="flex-1 p-3 outline-none border border-gray-600 rounded-md bg-gray-800/70 text-white placeholder-gray-400 focus:border-gray-400 focus:bg-gray-700 transition-all duration-300"
                        type="email"
                        placeholder="Enter your email"
                        required
                        name="email"
                        disabled={isSubmitting}
                    />
                </div>

                {/* Textarea */}
                <div className="mb-8">
                    <textarea
                        className="w-full p-3 outline-none border border-gray-600 rounded-md bg-gray-800/70 text-white placeholder-gray-400 focus:border-gray-400 focus:bg-gray-700 transition-all duration-300 resize-none"
                        rows="6"
                        placeholder="Enter your message"
                        required
                        name="message"
                        disabled={isSubmitting}
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center flex items-center justify-center">
                    <button
                        type="submit"
                        className="px-10 py-3 border rounded-full border-white text-white flex items-center gap-2 hover:bg-white hover:text-black transition-colors"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                Sending...
                            </div>
                        ) : (
                            "Submit now"
                        )}
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Contact;