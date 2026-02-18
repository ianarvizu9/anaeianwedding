"use client";

import { useState } from "react";

interface FlipCardProps {
  frontImage: string;
  backImage: string;
  locationUrl: string;
}

export default function FlipCard({ frontImage, backImage, locationUrl }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-[90%] max-w-125 h-75 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-700 transition-transform`}
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <img
          src={frontImage}
          alt="Front"
          className="absolute w-full h-full object-contain"
          style={{ backfaceVisibility: "hidden" }}
        />

        {/* BACK */}
        <div
            className="absolute w-full h-full flex items-center justify-center"
            style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
            }}
            >
            <img
                src={backImage}
                alt="Back"
                className="absolute w-full h-full object-contain"
            />

            <a
                href={locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="font-serif italic tracking-widest text-[13px] absolute min-w-2.5 bottom-20 px-7 border border-[#8b8070] rounded-full text-[#8b8070] hover:bg-[#8b8070] hover:text-white transition duration-300 bg-transparent backdrop-blur-sm hover:scale-105
">
                Ver ubicación
            </a>
        </div>
      </div>
    </div>
  );
}
