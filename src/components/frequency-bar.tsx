"use client";
import React, { useState, useEffect } from "react";
import NoteIndicator from "./note-indicator";

interface FrequencySliderProps {
  onChange?: (frequency: number) => void;
}

const FrequencySlider: React.FC<FrequencySliderProps> = ({ onChange }) => {
  const [frequency, setFrequency] = useState(440); // Default frequency
  const [isPlaying, setIsPlaying] = useState(false);
  const [oscillator, setOscillator] = useState<OscillatorNode | null>(null);

  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setIsDragging(true);
    handleDivClick(event);
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (isDragging) {
      handleDivClick(event);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging) {
      const divHeight = event.currentTarget.offsetHeight;
      const clickPosition =
        event.targetTouches[0].clientY -
        event.currentTarget.getBoundingClientRect().top;
      const minFrequency = 145;
      const maxFrequency = 1085;
      const logMinFrequency = Math.log(minFrequency);
      const logMaxFrequency = Math.log(maxFrequency);
      const logFrequency =
        (clickPosition / divHeight) * (logMaxFrequency - logMinFrequency) +
        logMinFrequency;
      const newFrequency = Math.round(Math.exp(logFrequency));
      setFrequency(newFrequency);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleDivClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const divHeight = event.currentTarget.offsetHeight;
    const clickPosition =
      event.clientY - event.currentTarget.getBoundingClientRect().top;
    const minFrequency = 145;
    const maxFrequency = 1085;
    const logMinFrequency = Math.log(minFrequency);
    const logMaxFrequency = Math.log(maxFrequency);
    const logFrequency =
      (clickPosition / divHeight) * (logMaxFrequency - logMinFrequency) +
      logMinFrequency;
    const newFrequency = Math.round(Math.exp(logFrequency));
    setFrequency(newFrequency);
  };

  useEffect(() => {
    // Trigger the parent component's onChange callback when the frequency changes
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
    <div className="items-center flex flex-col">
      <div
        id="frequencySlider"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="w-10 h-80 sm:h-10 xl:h-[36rem] bg-gray-900 dark:bg-white rounded-xl"
      />
      <label htmlFor="frequencySlider">Frequency: {frequency} Hz</label>
      <div>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "Stop Sound" : "Play Sound"}
        </button>
      </div>
      <NoteIndicator frequency={frequency} />
    </div>
  );
};

export default FrequencySlider;
