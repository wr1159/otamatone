"use client";
import FrequencySlider from "@/components/frequency-bar";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [soundOn, changeSound] = useState(false);
  return (
    <main className="fixed">
      <div className="flex screen flex-col items-center justify-between">
        <Navbar />
        <h1>Audio Player App</h1>
        <div>
          <FrequencySlider changeState={changeSound} />
          {!soundOn ? (
            <Image
              src="/closedMouth.png"
              alt="resting position"
              width={202.5}
              height={54}
              className="absolute -z-10 top-[160px]"
              style={{ left: "calc(50vw - 69px)" }}
            />
          ) : (
            <Image
              src="/openMouth.png"
              alt="resting position"
              width={202.5}
              height={54}
              className="absolute -z-10 top-[160px]"
              style={{ left: "calc(50vw - 69px)" }}
            />
          )}
        </div>
      </div>
    </main>
  );
}
