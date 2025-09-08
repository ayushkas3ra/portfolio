import React from 'react';
import Image from "next/image";
import { assets } from '@/assets/assets';
import { infoList, toolsData } from '@/assets/assets';
import { motion } from 'framer-motion'; // Corrected import

const About = () => {
    // Define container variants for the entire section's content
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                when: "beforeChildren", // Parent animation starts first
                staggerChildren: 0.1,    // Staggers children's animation start time
            },
        },
    };

    // Define child variants for reuse on text and main elements
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    // Variants for the profile image
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, x: -100 },
        visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, type: "spring", stiffness: 100 } },
    };

    // Variants for the info cards and tools grid items
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 100 } },
        hover: { y: -8, scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)", transition: { type: "spring", stiffness: 400, damping: 17 } }
    };

    const toolVariants = {
        hidden: { opacity: 0, scale: 0.5, rotate: -180 },
        visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.5, type: "spring", stiffness: 200 } },
        hover: { y: -5, scale: 1.2, rotate: [0, -10, 10, 0], transition: { type: "spring", stiffness: 400, damping: 17 } }
    };

    return (
        <motion.div
            id="about"
            className="w-full px-[12%] py-10 scroll-mt-20 relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Background Decorative Elements */}
            <motion.div
                className="absolute top-10 left-10 w-4 h-4 bg-purple-200/40 rounded-full"
                animate={{ y: [0, -25, 0], x: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-16 w-3 h-3 bg-pink-200/50 rounded-full"
                animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 4, delay: 2, ease: "easeInOut" }}
            />

            {/* Section Header */}
            <motion.h4
                className="text-center mb-2 text-lg font-Ovo text-gray-600"
                variants={itemVariants}
            >
                Introduction
            </motion.h4>
            <motion.h3
                className="text-center text-5xl font-Ovo mb-20"
                variants={itemVariants}
            >
                About me 🤔
            </motion.h3>

            {/* Main Content Container */}
            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">

                {/* Content Section */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    {/* Description */}
                    {/* <motion.p
                        className="mb-10 max-w-2xl font-Ovo text-center text-gray-700 text-lg leading-relaxed"
                        variants={itemVariants}
                    >
                        I am a final year B.Tech. student, passionate about web development and UI/UX designing.
                    </motion.p> */}

                    {/* Info Cards Grid */}
                    <motion.ul
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                    >
                        {infoList.map(({ icon, title, description }, index) => (
                            <motion.li
                                key={index}
                                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer bg-white/50 backdrop-blur-sm relative overflow-hidden group"
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                {/* Background Gradient Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-xl opacity-0"
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <Image
                                    src={icon}
                                    alt={title}
                                    className="w-7 mt-3 relative z-10"
                                />
                                <h3 className="my-4 font-semibold text-gray-700 font-Ovo relative z-10">{title}</h3>
                                <p className="text-gray-600 text-sm font-Outfit relative z-10">{description}</p>
                                <motion.div
                                    className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                                    whileHover={{ left: "100%" }}
                                    transition={{ duration: 0.6 }}
                                />
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Tools Section */}
                    {/* <motion.div
                        className="mt-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    >
                        <motion.h4 
                            className="my-6 text-gray-700 font-Ovo text-center text-lg"
                            variants={itemVariants}
                        >
                            Tools I use
                        </motion.h4>
                        <motion.ul 
                            className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap"
                            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        >
                            {toolsData.map((tool, index) => (
                                <motion.li 
                                    key={index}
                                    variants={toolVariants}
                                    whileHover="hover"
                                    className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <Image 
                                        src={tool} 
                                        alt={`Tool ${index + 1}`} 
                                        className="w-6 sm:w-8" 
                                    />
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div> */}
                </div>
            </div>

            {/* Call to Action
            <motion.div
                className="text-center mt-16"
                variants={itemVariants}
            >
                <motion.a
                    href="#work"
                    className="inline-flex items-center gap-3 px-8 py-3 border-2 border-gray-800 rounded-full font-Outfit hover:bg-gray-800 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    View My Work
                    <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                        →
                    </motion.div>
                </motion.a>
            </motion.div> */}
        </motion.div>
    );
};

export default About;