"use client";

import React, { useRef, useEffect } from "react";

const Navbar = () => {
  const jokeRef = useRef(null);

  useEffect(() => {
    async function getJoke() {
      try {
        const response = await fetch(
          "https://official-joke-api.appspot.com/random_joke",
        );
        const data = await response.json();
        if (jokeRef.current) {
          jokeRef.current.innerHTML = `${data.setup} — ${data.punchline}`;
        }
      } catch (error) {
        console.log("Error:", error);
      }
    }

    getJoke();
    const interval = setInterval(getJoke, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="p-5 w-full flex items-center justify-center">
        <p ref={jokeRef} className="text-gray-400 p-5"></p>
      </section>
    </>
  );
};

export default Navbar;
