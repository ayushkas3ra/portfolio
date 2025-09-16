import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Navbar = () => {
    const navLinks = [
        {
            name: 'Home',
            href: '#top',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
            )
        },
        {
            name: 'About me',
            href: '#about',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            )
        },
        {
            name: 'My Work',
            href: '#work',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            )
        },
        {
            name: 'Contact me',
            href: '#contact',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            )
        }
    ];

    return (
        <>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center z-50 transition-all duration-300`}>
                <div className="flex w-full max-w-7xl items-center justify-center">
                    <ul className={`flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 shadow-lg bg-none backdrop-blur-xl border border-white border-opacity-40`}>
                        {navLinks.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="text-gray-200 hover:text-white transition-colors relative inline-block p-3 rounded-full hover:bg-white/50"
                                    title={item.name}
                                >
                                    {item.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;