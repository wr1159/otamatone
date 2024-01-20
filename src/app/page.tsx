"use client";
import FrequencySlider from "@/components/frequency-bar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Audio Player App</h1>
      <FrequencySlider onChange={function (frequency: number): void {}} />
    </main>
  );
}
