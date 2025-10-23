import React from 'react';
import Image from "next/image";
import { assets } from '@/assets/assets';
import Typewriter from 'typewriter-effect';

const Header = () => {
    return (
        <>
            <div className=" w-full text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 bg-[url(../assets/wallpaper.jpg)] bg-cover bg-fixed bg-center text-white">
                <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo text-gray-300">
                    <Typewriter
                        options={{
                            strings: ['hey 👋! I am'],
                            autoStart: true,
                            loop: true,
                            cursor: '|',
                            delay: 50,
                            startDelay: 2000, // Delay to start after name
                        }}
                    />

                </h3>


                <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo text-white min-h-[1.2em]">
                    <Typewriter
                        options={{
                            strings: ['Ayush Kasera'],
                            autoStart: true,
                            loop: false,
                            cursor: '|',
                            delay: 75,
                            deleteSpeed: Infinity,
                        }}
                    />
                </h1>

                <div className="max-w-2xl mx-auto font-Ovo text-gray-400 min-h-[1.5em]">
                    <Typewriter
                        options={{
                            strings: ['CS grad | 2026 | Development | AI'],
                            autoStart: true,
                            loop: true,
                            cursor: '|',
                            delay: 50,
                            startDelay: 2000, // Delay to start after name
                        }}
                    />
                </div>


                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                    <a href="#contact" className="px-10 py-3 border rounded-full border-white text-white flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                        contact me
                    </a>
                    <a href="/AyushKasera_CV.pdf" target="_blank" className="px-10 py-3 border rounded-full border-white text-white flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                        my resume
                    </a>
                </div>
            </div >
        </>

    )
}

export default Header;
