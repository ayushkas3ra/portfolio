"use client";

import React from "react";
import Image from "next/image";
import { Github } from "lucide-react";
import { Globe } from "lucide-react";

const Projects = () => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="relative w-full h-40">
          <Image
            src="/coachingmandi-preview.png"
            alt="coachingmandi-preview"
            fill
            className="object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Coachingmandi</h2>
          <p>description</p>
          <div className="card-actions justify-end">
            <a className="bg-white font-bold text-black rounded-2xl px-4 items-center flex justify-center cursor-pointer">
              <Globe className="h-5" />
              Live
            </a>
            <a className="bg-white font-bold text-black rounded-2xl px-4 items-center flex justify-center cursor-pointer">
              <Github className="h-5" /> Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
