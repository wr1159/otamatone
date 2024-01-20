"use client";
import FrequencySlider from "@/components/frequency-bar";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [soundOn, changeSound] = useState(false);
  const [frequencies, changeFrequencies] = useState([145,1085])
  return (
    <main className="fixed">
      <div className="flex screen flex-col items-center justify-between">
        <Navbar />
        <div>
          <FrequencySlider changeState={changeSound} frequencyPair = {frequencies}/>
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
        <div className="relative top-[150px] flex flex-row w-[30vw] justify-between">
            <Button onClick={() => changeFrequencies([679,3800])}>High</Button>
            <Button onClick={() => changeFrequencies([145,1085])}>Medium</Button>
            <Button onClick={() => changeFrequencies([45,277])}>Low</Button>
        </div>
        
      </div>
    </main>
  );
}
