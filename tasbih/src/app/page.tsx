"use client";

import Image from "next/image";
import Background from "../app/public/bg.jpg"; // Corrected the path for the background image import
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Ensure this path is correct

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <Image 
        src={Background} 
        alt="tasbih-background" 
        layout="fill" // Makes the image cover the entire viewport
        objectFit="contain" // Ensures the image maintains aspect ratio while filling the screen
  
      />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pl-5 bg-opacity-10 bg-black">
        <div className="text-center p-8 max-w-sm h-80  bg-opacity-10 shadow-lg rounded-lg">    
          <h1 className="text-lg font-bold mb-9 text-black">Tasbih Counter</h1>

          <p className="text-8xl font-semibold text-amber-950 mb-5">{count}</p>

          {/* Button for incrementing the count */}
          <Button 
            onClick={() => setCount(count + 1)} 
            className="bg-yellow-700 text-white px-4 py-2  rounded-lg shadow-md hover:bg-brown-800 transition">
           ٱلْحَمْدُ لِلّٰهِ
          </Button>
          <br></br>

          {/* Reset Button */}
          <Button 
            onClick={() => setCount(0)} 
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
