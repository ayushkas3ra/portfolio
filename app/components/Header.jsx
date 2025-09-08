import React from 'react';
import Image from "next/image";
import { assets } from '@/assets/assets';
import { motion } from "framer-motion"; // Corrected import

const Header = () => {

    // Define a parent container variant for orchestration
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                when: "beforeChildren", // This ensures the parent animation finishes first
                staggerChildren: 0.1,  // This is the key! It staggers the children's animations
            },
        },
    };

    // Define child variants for reuse
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // The viewport prop is crucial for performance
        >
            {/* You can add the profile image here with its own variant */}
            {/*
            <motion.div variants={itemVariants}>
                <Image src={assets.profile_img} alt="Profile picture" className="rounded-full w-32" />
            </motion.div>
            */}

            <motion.h3
                className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
                variants={itemVariants}
            >
                namastey 🙏! I am
            </motion.h3>

            <motion.h1
                className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
                variants={itemVariants}
            >
                Ayush Kasera
            </motion.h1>

            <motion.p
                className="max-w-2xl mx-auto font-Ovo"
                variants={itemVariants}
            >
                a final year B.Tech. CSE student, passionate about web development and designing.
            </motion.p>

            <motion.div
                className="flex flex-col sm:flex-row items-center gap-4 mt-4"
                variants={itemVariants}
            >
                <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition-colors">
                    contact me
                    <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
                </a>
                <a href="/sample-resume.pdf" target="_blank" className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition-colors">
                    my resume
                    <Image src={assets.download_icon} alt="Download" className="w-4" />
                </a>
            </motion.div>
        </motion.div>
    )
}

export default Header;