"use client";
import FrequencySlider from "@/components/frequency-bar";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="fixed">
      <div className="flex screen flex-col items-center justify-between">
        <Navbar />
        <h1>Audio Player App</h1>
        <FrequencySlider onChange={function (frequency: number): void {}} />
      </div>
    </main>
  );
}
