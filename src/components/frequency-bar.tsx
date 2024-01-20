"use client";
import React, { useState, useEffect } from "react";

interface FrequencySliderProps {
  onChange?: (frequency: number) => void;
}

const FrequencySlider: React.FC<FrequencySliderProps> = ({ onChange }) => {
  const [frequency, setFrequency] = useState(440); // Default frequency
  const [isPlaying, setIsPlaying] = useState(false);
  const [oscillator, setOscillator] = useState<OscillatorNode | null>(null);

  const handleFrequencyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFrequency = parseInt(event.target.value, 10);
    setFrequency(newFrequency);
  };

  useEffect(() => {
    // Trigger the parent component's onChange callback when the frequency changes
    console.log("oscillator", oscillator);
    if (oscillator) {
      oscillator.frequency.value = frequency;
    }
  }, [frequency]);

  useEffect(() => {
    if (isPlaying && !oscillator) {
      startSound();
    } else {
      stopSound();
    }
  }, [isPlaying]);

  const startSound = () => {
    const context = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    const o = context.createOscillator();
    const g = context.createGain();
    o.start(0);
    o.frequency.value = frequency;
    o.connect(g);
    g.connect(context.destination);
    if (oscillator == null) {
      setOscillator(o);
    }
  };

  const stopSound = () => {
    if (oscillator) {
      oscillator.stop();
      setOscillator(null);
    }
  };

  return (
    <div className = "relative left-0">
      <input
        type="range"
        id="frequencySlider"
        min="20"
        max="2000"
        step="1"
        value={frequency}
        onChange={handleFrequencyChange}
        style={{ transform: "rotate(270deg)" }}
      />
      <div>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "Stop Sound" : "Play Sound"}
        </button>
      </div>
    </div>
  );
};

export default FrequencySlider;
