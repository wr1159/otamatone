"use client";
import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
import NoteIndicator from "./note-indicator";

interface FrequencySliderProps {
  changeState: Dispatch<SetStateAction<boolean>>;
}

const FrequencySlider: React.FC<FrequencySliderProps> = ({ changeState }) => {
  const [frequency, setFrequency] = useState(440); // Default frequency
  const [isPlaying, setIsPlaying] = useState(false);
  const [oscillator, setOscillator] = useState<OscillatorNode | null>(null);

  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setIsDragging(true);
    handleDivClick(event);
    setIsPlaying(!isPlaying);
    changeState(!isPlaying);
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
    setIsPlaying(!isPlaying);
    changeState(!isPlaying);
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

  const handleMouseLeave = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      setIsPlaying(false)
      changeState(false)
      if (isDragging) {
        handleDivClick(event);
      }
    }

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
    o.type = "square";
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
      <NoteIndicator frequency={frequency} />
      <label htmlFor="frequencySlider">Frequency: {frequency} Hz</label>
      <div>
      </div>
      <div
        id="frequencySlider"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseLeave={handleMouseLeave}
        className="w-[20.25px] h-[315px] bg-gray-900 dark:bg-black rounded-xl mt-[105px]"
      />
    </div>
  );
};

export default FrequencySlider;
