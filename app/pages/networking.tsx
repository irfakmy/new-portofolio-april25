"use client";

import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

const Networking = () => {
  const words = ["Connecting, Learning, and Growing Together"];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 relative z-10 w-full">
        <div className="subtitle-box">
          <FlipWords words={words} duration={1000} />
        </div>
      </h2>

      <h3 className="md:text-xl text-sm lg:text-xl font-medium text-left text-gray-400 lg:mb-4 relative z-0">
        <p className="pb-12">
          focus on crafting efficient and reliable solutions for both frontend and backend needs, ensuring a seamless user experience and smooth functionality across all layers.
          <br />
          <br />
          Here are the key technologies that I use and enjoy working with:
        </p>
      </h3>

      <div className="relative overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <div className="relative z-10 bg-slate-950 rounded-md p-6 backdrop-blur-3xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {images.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-slate-800 p-4 rounded-md hover:scale-105 transition-transform"
              >
                <img
                  src={item.src}
                  alt={`Logo ${index}`}
                  className="w-[50px] h-[50px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Networking;

const images = [
  { src: "assets/skill/laravel2.png", href: "https://laravel.com/" },
  { src: "assets/skill/postman.png", href: "https://www.postman.com/" },
  { src: "assets/skill/react.png", href: "https://react.dev/" },
  { src: "assets/skill/nextjs.jpg", href: "https://nextjs.org/" },
  { src: "assets/skill/mysql.avif", href: "https://www.mysql.com/" },
  { src: "assets/skill/livewire.png", href: "https://laravel-livewire.com/" },
  { src: "assets/skill/filament.webp", href: "https://filamentphp.com/" },
  { src: "assets/skill/html.jpg", href: "https://www.w3schools.com/html/" },
  { src: "assets/skill/css3.svg", href: "https://www.w3schools.com/css/" },
  { src: "assets/skill/php.png", href: "https://www.php.net/" },
  { src: "assets/skill/js.png", href: "https://www.javascript.com/" },
];
