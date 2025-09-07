import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion, AnimatePresence } from 'framer-motion'; // Corrected import

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Optimized scroll effect: it's already well-implemented, so we'll keep it.
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // A single function to toggle the menu state.
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Use Framer Motion's variants for better orchestration.
    const menuVariants = {
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.1, // Stagger children's animation
                delayChildren: 0.2, // Delay the children's animation
            },
        },
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.05,
                staggerDirection: -1, // Animate children out in reverse
            },
        },
    };

    const navItemVariants = {
        open: { y: 0, opacity: 1, transition: { duration: 0.3 } },
        closed: { y: 20, opacity: 0, transition: { duration: 0.2 } },
    };

    const backgroundVariants = {
        animate: { opacity: 1, x: 0 },
        initial: { opacity: 0, x: 100 },
    };

    return (
        <>
            {/* Background Image */}
            <motion.div
                className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]"
                variants={backgroundVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <Image src={assets.header_bg_color} alt="Header background" className="w-full" />
            </motion.div>

            {/* Main Navigation */}
            <motion.nav
                className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScrolled ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Logo */}
                <motion.a
                    href="#top"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <Image src={assets.logo} alt="Logo" className="w-28 cursor-pointer mr-14" />
                </motion.a>

                {/* Desktop Navigation Menu */}
                <motion.ul
                    className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${isScrolled ? "" : "shadow-sm bg-white/50"}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {['Home', 'About me', 'My Work', 'Contact me'].map((item, index) => {
                        const href = item === 'Home' ? '#top' :
                            item === 'About me' ? '#about' :
                                item === 'My Work' ? '#work' : '#contact';

                        return (
                            <motion.li
                                key={item}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                            >
                                <motion.a
                                    href={href}
                                    className="font-Ovo relative"
                                    whileHover={{ y: -2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    {item}
                                    <motion.div
                                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black"
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                            </motion.li>
                        );
                    })}
                </motion.ul>

                {/* Right Side Controls */}
                <div className="flex items-center gap-4">
                    {/* Theme Toggle */}
                    <motion.button
                        className="cursor-pointer"
                        whileHover={{ rotate: 180, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        {/* <Image src={assets.moon_icon} alt="Toggle theme" className="w-6" /> */}
                    </motion.button>

                    {/* Contact Button */}
                    <motion.a
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo cursor-pointer hover:bg-gray-100 transition-colors"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        Contact
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                            <Image src={assets.arrow_icon} alt="Arrow" className="w-3" />
                        </motion.div>
                    </motion.a>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="block md:hidden ml-3 cursor-pointer"
                        onClick={toggleMobileMenu}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <Image src={assets.menu_black} alt="Open menu" className="w-6" />
                    </motion.button>
                </div>

                {/* Mobile Menu & Backdrop - Use AnimatePresence for smooth transitions */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <>
                            <motion.ul
                                className="flex md:hidden flex-col gap-4 px-10 py-20 fixed right-0 top-0 bottom-0 w-64 h-screen bg-rose-50/95 backdrop-blur-sm shadow-lg"
                                variants={menuVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                            >
                                {/* Close Button */}
                                <motion.div
                                    className="absolute right-6 top-6 cursor-pointer"
                                    whileHover={{ rotate: 90, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    onClick={toggleMobileMenu}
                                >
                                    <Image src={assets.close_black} alt="Close menu" className="w-5" />
                                </motion.div>

                                {/* Mobile Menu Items */}
                                {['Home', 'About me', 'My Work', 'Contact me'].map((item) => {
                                    const href = item === 'Home' ? '#top' :
                                        item === 'About me' ? '#about' :
                                            item === 'My Work' ? '#work' : '#contact';

                                    return (
                                        <motion.li
                                            key={item}
                                            variants={navItemVariants}
                                        >
                                            <a
                                                href={href}
                                                className="font-Ovo cursor-pointer text-gray-800 hover:text-black transition-colors"
                                                onClick={toggleMobileMenu}
                                            >
                                                {item}
                                            </a>
                                        </motion.li>
                                    );
                                })}
                            </motion.ul>

                            <motion.div
                                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={toggleMobileMenu}
                            />
                        </>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
};

export default Navbar;