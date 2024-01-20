"use client"
import React, { useState, useEffect } from 'react';
import FrequencyPlayer from './frequency-player';

interface FrequencySliderProps {
  onChange: (frequency: number) => void;
}

const FrequencySlider: React.FC<FrequencySliderProps> = ({ onChange }) => {
  const [frequency, setFrequency] = useState(440); // Default frequency

  useEffect(() => {
    // Trigger the parent component's onChange callback when the frequency changes
    setFrequency(frequency);
    stopSound()
    startSound()
  }, [frequency, onChange]);
  
  
  const handleFrequencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFrequency = parseInt(event.target.value, 10);
    setFrequency(newFrequency);
  };
  const [isPlaying, setIsPlaying] = useState(false);
  const [oscillator, setOscillator] = useState<OscillatorNode | null>(null);
  const context = new (window.AudioContext || (window as any).webkitAudioContext)();
  const o = context.createOscillator();
  const g = context.createGain();
  o.start(0);

  const startSound = () => {
  
    o.frequency.value = frequency;
    o.connect(g);
    g.connect(context.destination);
    
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 5)
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
      <label htmlFor="frequencySlider">Frequency: {frequency} Hz</label>
      <input
        type="range"
        id="frequencySlider"
        min="20"
        max="2000"
        step="1"
        value={frequency}
        onChange={handleFrequencyChange}
        style={{ transform: 'rotate(270deg)' }}
      />
    <div>
      <button onClick={isPlaying ? stopSound : startSound}>
        {isPlaying ? 'Stop Sound' : 'Play Sound'}
      </button>
    </div>
    </div>
  );
};

export default FrequencySlider;