import React from 'react';
import Image from "next/image";
import { assets } from '@/assets/assets';

const Header = () => {
    return (
        <div className=" w-full text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 bg-[url(../assets/wallpaper.jpg)] bg-cover bg-fixed bg-center text-white">
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo text-gray-300">
                hey 👋! I am
            </h3>

            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo text-white">
                Ayush Kasera
            </h1>

            <p className="max-w-2xl mx-auto font-Ovo text-gray-400">
                a CS guy passionate about web development and designing.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact" className="px-10 py-3 border rounded-full border-white text-white flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                    contact me
                </a>
                <a href="/AyushKasera_CV.pdf" target="_blank" className="px-10 py-3 border rounded-full border-white text-white flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                    my resume
                </a>
            </div>
        </div>
    )
}

export default Header;
