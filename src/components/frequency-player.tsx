'use client'
import React, { useState } from 'react';

interface FrequencyPlayerProps {
  frequency: number;
}

const FrequencyPlayer: React.FC<FrequencyPlayerProps> = ({ frequency }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [oscillator, setOscillator] = useState<OscillatorNode | null>(null);

  const startSound = () => {
    const context = new (window.AudioContext || (window as any).webkitAudioContext)();
    const o = context.createOscillator();
    const g = context.createGain();

    o.frequency.value = frequency;
    o.connect(g);
    g.connect(context.destination);
    o.start(0);

    setIsPlaying(true);
    setOscillator(o);
  };

  const stopSound = () => {
    if (oscillator) {
      oscillator.stop();
      setIsPlaying(false);
      setOscillator(null);
    }
  };

  return (
    <div>
      <button onClick={isPlaying ? stopSound : startSound}>
        {isPlaying ? 'Stop Sound' : 'Play Sound'}
      </button>
    </div>
  );
};

export default FrequencyPlayer;
