import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Corrected import

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

    // Variants for the entire section's content
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.15, // Stagger animation for main content
            },
        },
    };

    // Variants for individual elements within the section
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    // Variants for the input fields
    const inputVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            id="contact"
            className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Background Decorative Elements */}
            <motion.div
                className="absolute top-20 left-10 w-3 h-3 bg-blue-300/40 rounded-full"
                animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-32 right-16 w-2 h-2 bg-purple-300/50 rounded-full"
                animate={{ x: [0, 15, 0], y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }}
            />

            {/* Section Header */}
            <motion.h4
                className="text-center mb-2 text-lg font-Outfit text-gray-600"
                variants={itemVariants}
            >
                Connect with me
            </motion.h4>

            <motion.h2
                className="text-center text-5xl font-Ovo mb-4"
                variants={itemVariants}
            >
                Get in touch ✉️
            </motion.h2>

            <motion.p
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Outfit text-gray-700"
                variants={itemVariants}
            >
                I'd love to hear from you! Please use the form below.
            </motion.p>

            {/* Contact Form */}
            <motion.form
                onSubmit={onSubmit}
                className="max-w-2xl mx-auto"
                variants={itemVariants}
            >
                {/* Input Fields Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
                    <motion.input
                        className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white focus:border-gray-600 transition-all duration-300 focus:shadow-lg"
                        type="text"
                        placeholder="Enter your name"
                        required
                        name="name"
                        disabled={isSubmitting}
                        variants={inputVariants}
                        whileFocus={{ scale: 1.02, borderColor: "#374151" }}
                    />
                    <motion.input
                        className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white focus:border-gray-600 transition-all duration-300 focus:shadow-lg"
                        type="email"
                        placeholder="Enter your email"
                        required
                        name="email"
                        disabled={isSubmitting}
                        variants={inputVariants}
                        whileFocus={{ scale: 1.02, borderColor: "#374151" }}
                    />
                </div>

                {/* Textarea */}
                <div className="mb-8">
                    <motion.textarea
                        className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white focus:border-gray-600 transition-all duration-300 resize-none focus:shadow-lg"
                        rows="6"
                        placeholder="Enter your message"
                        required
                        name="message"
                        disabled={isSubmitting}
                        variants={inputVariants}
                        whileFocus={{ scale: 1.01, borderColor: "#374151" }}
                    ></motion.textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <motion.button
                        type="submit"
                        className="px-8 py-3 bg-black text-white rounded-full font-Outfit relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                        whileHover={!isSubmitting ? { scale: 1.05, backgroundColor: "#374151" } : {}}
                        whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <AnimatePresence mode="wait">
                            {isSubmitting ? (
                                <motion.div
                                    key="submitting"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex items-center gap-2"
                                >
                                    <motion.div
                                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    />
                                    Sending...
                                </motion.div>
                            ) : (
                                <motion.span
                                    key="submit"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    Submit now
                                </motion.span>
                            )}
                        </AnimatePresence>

                        {/* Ripple Effect */}
                        <motion.div
                            className="absolute inset-0 bg-white/20 rounded-full scale-0"
                            whileTap={{
                                scale: [0, 1, 0],
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{ duration: 0.4 }}
                        />
                    </motion.button>
                </div>

                {/* Result Message */}
                <AnimatePresence>
                    {result && (
                        <motion.p
                            className={`mt-6 text-center font-Outfit px-4 py-2 rounded-md ${result === "Form Submitted Successfully" ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"}`}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        >
                            {result}
                        </motion.p>
                    )}
                </AnimatePresence>
            </motion.form>

            {/* Contact Info Cards
            <motion.div
                className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
                variants={itemVariants}
            >
                <motion.div
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg"
                    whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <h3 className="font-Ovo font-semibold mb-2">Email Me</h3>
                    <p className="font-Outfit text-gray-600">ayushkasera@protonmail.com</p>
                </motion.div>
                <motion.div
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg"
                    whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <h3 className="font-Ovo font-semibold mb-2">Location</h3>
                    <p className="font-Outfit text-gray-600">Kanpur, Uttar Pradesh, India</p>
                </motion.div>
            </motion.div> */}
        </motion.div>
    );
};

export default Contact;