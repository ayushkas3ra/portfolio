import React from 'react';
import { workData, assets } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'motion/react'; // Corrected import

const Work = () => {
    // Define container variants for the entire section
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    // Define child variants for reuse
    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.5,
            },
        },
    };

    // Variant for the project grid itself
    const gridVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
                duration: 0.6,
            }
        },
    };

    // Variants for the individual project cards
    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
        hover: {
            scale: 1.02,
            y: -5,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 17
            }
        },
    };

    return (
        <motion.div
            id="work"
            className="px-5 lg:px-8 xl:px-[8%] py-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Section Header */}
            <motion.h2
                className="text-center mb-2 text-5xl font-Ovo"
                variants={itemVariants}
            >
                My projects 🧑‍💻
            </motion.h2>

            <motion.p
                className="text-center text-lg mb-12 max-w-2xl mx-auto font-Outfit text-gray-600"
                variants={itemVariants}
            >
                Explore my latest work and projects
            </motion.p>

            {/* Projects Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5 max-w-6xl mx-auto"
                variants={gridVariants}
            >
                {workData.map((project, index) => (
                    <motion.div
                        key={index}
                        className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden"
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <motion.a
                            href={project.link}
                            className="block w-full h-full"
                            target="_blank"
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Info Card */}
                            <motion.div
                                className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between shadow-lg"
                                initial={{ y: 20, opacity: 0.8 }}
                                animate={{ y: 0, opacity: 1 }}
                                whileHover={{
                                    y: -8,
                                    opacity: 1,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                                }}
                                transition={{
                                    duration: 0.3,
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 17
                                }}
                            >
                                <div className="flex-1">
                                    <h2 className="font-semibold text-lg font-Ovo text-gray-800">
                                        {project.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm font-Outfit">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Send Icon Button */}
                                <motion.div
                                    className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] bg-white"
                                    whileHover={{
                                        backgroundColor: "#bef264",
                                        scale: 1.1,
                                        rotate: 15,
                                        boxShadow: "3px_3px_0_#000"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 17
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ x: 2, y: -2 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Image
                                            src={assets.send_icon}
                                            alt="View project"
                                            className="w-5"
                                        />
                                    </motion.div>
                                </motion.div>
                            </motion.div>

                            {/* Floating Elements */}
                            <motion.div
                                className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100"
                                animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            />

                            <motion.div
                                className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100"
                                animate={{ y: [0, -8, 0], x: [0, 5, 0], opacity: [0.4, 0.8, 0.4] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            />
                        </motion.a>
                    </motion.div>
                ))}
            </motion.div>

            {/* Call to Action - Uncommented */}
            <motion.div
                className="text-center mt-16"
                variants={itemVariants}
            >
                <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-3 px-8 py-3 bg-black text-white rounded-full font-Outfit hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17
                    }}
                >
                    Let's work together
                    <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                        <Image
                            src={assets.right_arrow_white}
                            alt="Arrow"
                            className="w-4"
                        />
                    </motion.div>
                </motion.a>
            </motion.div>
        </motion.div>
    );
};

export default Work;