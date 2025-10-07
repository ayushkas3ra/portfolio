import React from 'react';
import Image from "next/image";
import { infoList } from '@/assets/assets';

const About = () => {
    return (
        <div
            id="about"
            className="w-full px-[12%] py-10 scroll-mt-20 bg-[url(../assets/wallpaper.jpg)] bg-cover bg-fixed bg-center text-white"
        >
            {/* Section Header */}
            <h4 className="text-center mb-2 text-lg font-Ovo text-gray-400">
                Introduction
            </h4>
            <h3 className="text-center text-5xl font-Ovo mb-20 text-white">
                About me 🤔
            </h3>

            {/* Info Cards Grid */}
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                {infoList.map(({ icon, title, description }, index) => (
                    <li
                        key={index}
                        className="border border-gray-600 rounded-xl p-6 cursor-pointer bg-gray-800/70 hover:bg-gray-700/70 hover:-translate-y-1 transition-all duration-300"
                    >
                        <Image
                            src={icon}
                            alt={title}
                            className="w-7 mt-3"
                        />
                        <h3 className="my-4 font-semibold text-gray-200 font-Ovo">{title}</h3>
                        <p className="text-gray-400 text-sm font-Outfit">{description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default About;