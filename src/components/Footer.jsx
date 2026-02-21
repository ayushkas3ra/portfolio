"use client";

import React, { useRef, useEffect } from "react";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <>
      <section className="p-5 w-full flex items-center justify-between mt-15 flex-col my-5">
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://www.github.com/ayushkas3ra"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>

          <a
            href="https://www.x.com/ayushkas3ra"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Twitter className="h-6 w-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/ayushkas3ra"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Footer;
