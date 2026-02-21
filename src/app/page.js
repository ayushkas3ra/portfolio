"use client";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Stacks from "../components/Stacks";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[hsl(0,0%,11%)] flex items-center justify-center flex-col">
      <Navbar />
      <Hero />
      <Stacks />
      <Footer />
    </main>
  );
}
