'use client'
import React from 'react'
import Image from 'next/image'
import { FileUser } from 'lucide-react'
import ContactSection from '../components/Contact'

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          className="rounded-xl border-2 border-white mt-3"
          width={200}
          height={180}
          src="/pfp.jpg"
          alt="pfp"
          priority
        />

        <section
          id="hero"
          className="py-5 flex items-center justify-center flex-col text-center"
        >
          <h1 className="text-4xl font-bold text-white">Ayush Kasera</h1>
          <p className="text-gray-400 mt-4 tracking-widest uppercase text-sm">
            Full stack AI software developer
          </p>
        </section>
      </div>
    </>
  )
}

export default Hero
