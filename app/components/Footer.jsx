import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';

const Footer = () => {
    const socialLinks = [
        { name: 'Github', url: 'https://github.com/ayushkas3ra' },
        { name: 'Linkedin', url: 'https://www.linkedin.com/in/ayushkas3ra/' },
        { name: 'Twitter', url: 'https://x.com/ayushkas3ra' }
    ];

    // Define a single parent variant to manage all child animations
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                when: "beforeChildren", // Parent animation starts first
                staggerChildren: 0.1,    // Staggers children's animation start time
            },
        },
    };

    // Define a variant for the child elements
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="mt-20 py-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Optimized viewport trigger
        >
            {/* Main Footer Content */}
            <div className="text-center">
                {/* Logo - FIXED: Using tween for multi-keyframe animation */}
                <motion.div
                    variants={itemVariants}
                    whileHover={{
                        scale: 1.05,
                        rotate: [0, -5, 5, 0]
                    }}
                    transition={{
                        scale: { type: "spring", stiffness: 400, damping: 17 },
                        rotate: { type: "tween", duration: 0.6 }
                    }}
                >
                    <Image
                        src={assets.logo}
                        alt="Ayush Kasera Logo"
                        className="w-36 mx-auto mb-6"
                    />
                </motion.div>

                {/* Email Contact */}
                <motion.a
                    href="mailto:ayushkasera@protonmail.com"
                    className="w-max flex items-center gap-3 mx-auto mb-8 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.div
                        animate={{
                            rotate: [0, -10, 10, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3,
                            type: "tween", // FIXED: Using tween for multi-keyframe
                            ease: "easeInOut"
                        }}
                    >
                        <Image
                            src={assets.mail_icon}
                            alt="Email icon"
                            className="w-6"
                        />
                    </motion.div>
                    <span className="font-Outfit text-gray-700">
                        ayushkasera@protonmail.com
                    </span>
                </motion.a>
            </div>

            {/* Social Links */}
            <motion.ul
                className="flex items-center gap-8 justify-center"
                variants={itemVariants}
            >
                {socialLinks.map((social) => (
                    <motion.li key={social.name}>
                        <motion.a
                            target="_blank"
                            href={social.url}
                            className="font-Ovo text-gray-600 hover:text-black transition-colors relative inline-block"
                            whileHover={{ y: -3, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            {social.name}

                            {/* Hover Underline Effect */}
                            <motion.div
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black"
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Hover Background Glow */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-lg -z-10"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ opacity: 1, scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                            />
                        </motion.a>
                    </motion.li>
                ))}
            </motion.ul>

            {/* Copyright Section */}
            <motion.div
                className="text-center sm:flex items-center justify-between border-t border-gray-200 mx-[10%] mt-12 pt-8"
                variants={itemVariants}
            >
                <motion.p className="text-gray-600 font-Outfit text-sm">
                    🕉️ कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
                    मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥
                </motion.p>
                <motion.p className="text-gray-500 font-Outfit text-xs mt-2 sm:mt-0">
                    Made with ❤️ using Next.js & Tailwind CSS
                </motion.p>
            </motion.div>

            {/* Floating Animation Elements - FIXED: Using tween for multi-keyframe */}
            <motion.div
                className="absolute top-10 left-10 w-2 h-2 bg-purple-300 rounded-full opacity-60"
                animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                    type: "tween",
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute top-16 right-20 w-1 h-1 bg-pink-300 rounded-full opacity-70"
                animate={{ y: [0, -15, 0], x: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
                transition={{
                    repeat: Infinity,
                    duration: 4,
                    delay: 1,
                    type: "tween",
                    ease: "easeInOut"
                }}
            />
        </motion.div>
    );
};

export default Footer;