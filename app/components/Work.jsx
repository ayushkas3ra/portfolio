import React, { useState } from 'react';
import { workData } from '@/assets/assets';

const Work = () => {
    return (
        <div id="work" className="px-5 lg:px-8 xl:px-[8%] py-10 bg-[url(../assets/wallpaper.jpg)] bg-cover bg-fixed bg-center text-white">
            {/* Section Header */}
            <h2 className="text-center mb-2 text-5xl font-Ovo text-white">
                My projects 🧑‍💻
            </h2>

            <p className="text-center text-lg mb-12 max-w-2xl mx-auto font-Outfit text-gray-400">
                Explore my latest work and projects
            </p>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5 max-w-6xl mx-auto">
                {workData.map((project, index) => {
                    const [videoError, setVideoError] = useState(false);

                    return (
                        <div
                            key={index}
                            className="aspect-video rounded-lg relative group overflow-hidden"
                        >
                            {/* Background Video or Image */}
                            {!videoError && project.video ? (
                                <video
                                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    onError={() => setVideoError(true)}
                                >
                                    <source src={project.video} type="video/mp4" />
                                </video>
                            ) : (
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-lg"
                                    style={{ backgroundImage: `url(${project.bgImage})` }}
                                />
                            )}

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/50" />

                            {/* Info Card */}
                            <div className="bg-none backdrop-blur-sm border border-gray-700 w-10/12 rounded-md absolute bottom-1 left-1/2 -translate-x-1/2 py-1 px-5 shadow-lg">
                                <div className="flex-1 mb-2">
                                    <h2 className="font-semibold text-lg font-Ovo text-white">
                                        {project.title}
                                    </h2>
                                </div>
                                <div className="flex items-center gap-2">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                                        <div className="bg-white hover:bg-gray-200 rounded-full text-xs px-3 py-1 flex items-center gap-1 text-black font-medium">
                                            LIVE
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
                                                <path d="M415.9 344L225 344C227.9 408.5 242.2 467.9 262.5 511.4C273.9 535.9 286.2 553.2 297.6 563.8C308.8 574.3 316.5 576 320.5 576C324.5 576 332.2 574.3 343.4 563.8C354.8 553.2 367.1 535.8 378.5 511.4C398.8 467.9 413.1 408.5 416 344zM224.9 296L415.8 296C413 231.5 398.7 172.1 378.4 128.6C367 104.2 354.7 86.8 343.3 76.2C332.1 65.7 324.4 64 320.4 64C316.4 64 308.7 65.7 297.5 76.2C286.1 86.8 273.8 104.2 262.4 128.6C242.1 172.1 227.8 231.5 224.9 296zM176.9 296C180.4 210.4 202.5 130.9 234.8 78.7C142.7 111.3 74.9 195.2 65.5 296L176.9 296zM65.5 344C74.9 444.8 142.7 528.7 234.8 561.3C202.5 509.1 180.4 429.6 176.9 344L65.5 344zM463.9 344C460.4 429.6 438.3 509.1 406 561.3C498.1 528.6 565.9 444.8 575.3 344L463.9 344zM575.3 296C565.9 195.2 498.1 111.3 406 78.7C438.3 130.9 460.4 210.4 463.9 296L575.3 296z" />
                                            </svg>
                                        </div>
                                    </a>
                                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                                        <div className="bg-white hover:bg-gray-200 rounded-full text-xs px-3 py-1 flex items-center gap-1 text-black font-medium">
                                            REPO
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
                                                <path d="M392.8 65.2C375.8 60.3 358.1 70.2 353.2 87.2L225.2 535.2C220.3 552.2 230.2 569.9 247.2 574.8C264.2 579.7 281.9 569.8 286.8 552.8L414.8 104.8C419.7 87.8 409.8 70.1 392.8 65.2zM457.4 201.3C444.9 213.8 444.9 234.1 457.4 246.6L530.8 320L457.4 393.4C444.9 405.9 444.9 426.2 457.4 438.7C469.9 451.2 490.2 451.2 502.7 438.7L598.7 342.7C611.2 330.2 611.2 309.9 598.7 297.4L502.7 201.4C490.2 188.9 469.9 188.9 457.4 201.4zM182.7 201.3C170.2 188.8 149.9 188.8 137.4 201.3L41.4 297.3C28.9 309.8 28.9 330.1 41.4 342.6L137.4 438.6C149.9 451.1 170.2 451.1 182.7 438.6C195.2 426.1 195.2 405.8 182.7 393.3L109.3 320L182.6 246.6C195.1 234.1 195.1 213.8 182.6 201.3z" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex items-center justify-center font-semibold">
                See More on Github <a href="https://www.github.com/ayushkas3ra" target="blank"><svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-4 h-4" viewBox="0 0 640 640"><path d="M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z" /></svg></a>
            </div>
        </div>
    );
};

export default Work;