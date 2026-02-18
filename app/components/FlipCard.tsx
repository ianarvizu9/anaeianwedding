"use client";

import { useState } from "react";

interface FlipCardProps {
  frontImage: string;
  backImage: string;
}

export default function FlipCard({ frontImage, backImage }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-[90%] max-w-[500px] h-[300px] perspective cursor-pointer"
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
        <img
          src={backImage}
          alt="Back"
          className="absolute w-full h-full object-contain"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        />
      </div>
    </div>
  );
}
