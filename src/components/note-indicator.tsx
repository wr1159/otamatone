import React from "react";

type Note = {
  name: string;
  frequency: number;
  lowerBound: number;
  upperBound?: number;
};

const notes: Note[] = [
  { name: "C3", frequency: 130.81, lowerBound: 125, upperBound: 134 },
  { name: "C#3/Db3", frequency: 138.59, lowerBound: 134, upperBound: 142 },
  { name: "D3", frequency: 146.83, lowerBound: 142, upperBound: 151 },
  { name: "D#3/Eb3", frequency: 155.56, lowerBound: 151, upperBound: 159 },
  { name: "E3", frequency: 164.81, lowerBound: 159, upperBound: 169 },
  { name: "F3", frequency: 174.61, lowerBound: 169, upperBound: 180 },
  { name: "F#3/Gb3", frequency: 185.0, lowerBound: 180, upperBound: 190 },
  { name: "G3", frequency: 196.0, lowerBound: 190, upperBound: 201 },
  { name: "G#3/Ab3", frequency: 207.65, lowerBound: 201, upperBound: 214 },
  { name: "A3", frequency: 220.0, lowerBound: 214, upperBound: 227 },
  { name: "A#3/Bb3", frequency: 233.08, lowerBound: 227, upperBound: 240 },
  { name: "B3", frequency: 246.94, lowerBound: 240, upperBound: 248 },
  { name: "C4", frequency: 261.63, lowerBound: 248, upperBound: 269 },
  { name: "C#4/Db4", frequency: 277.18, lowerBound: 269, upperBound: 285 },
  { name: "D4", frequency: 293.66, lowerBound: 285, upperBound: 301 },
  { name: "D#4/Eb4", frequency: 311.13, lowerBound: 301, upperBound: 320 },
  { name: "E4", frequency: 329.63, lowerBound: 320, upperBound: 339 },
  { name: "F4", frequency: 349.23, lowerBound: 339, upperBound: 359 },
  { name: "F#4/Gb4", frequency: 369.99, lowerBound: 359, upperBound: 378 },
  { name: "G4", frequency: 392.0, lowerBound: 378, upperBound: 404 },
  { name: "G#4/Ab4", frequency: 415.3, lowerBound: 404, upperBound: 427 },
  { name: "A4", frequency: 440.0, lowerBound: 427, upperBound: 453 },
  { name: "A#4/Bb4", frequency: 466.16, lowerBound: 453, upperBound: 478 },
  { name: "B4", frequency: 493.88, lowerBound: 478, upperBound: 508 },
  { name: "C5", frequency: 523.25, lowerBound: 508, upperBound: 523 },
  { name: "C#5/Db5", frequency: 554.37, lowerBound: 523, upperBound: 565 },
  { name: "D5", frequency: 587.33, lowerBound: 565, upperBound: 600 },
  { name: "D#5/Eb5", frequency: 622.25, lowerBound: 600, upperBound: 634 },
  { name: "E5", frequency: 659.25, lowerBound: 634, upperBound: 670 },
  { name: "F5", frequency: 698.46, lowerBound: 670, upperBound: 720 },
  { name: "F#5/Gb5", frequency: 739.99, lowerBound: 720, upperBound: 763 },
  { name: "G5", frequency: 783.99, lowerBound: 763, upperBound: 807 },
  { name: "G#5/Ab5", frequency: 830.61, lowerBound: 807, upperBound: 855 },
  { name: "A5", frequency: 880.0, lowerBound: 855, upperBound: 906 },
  { name: "A#5/Bb5", frequency: 932.33, lowerBound: 906, upperBound: 955 },
  { name: "B5", frequency: 987.77, lowerBound: 955, upperBound: 1011 },
  { name: "C6", frequency: 1046.5, lowerBound: 1011, upperBound: 1069 },
  { name: "C#6/Db6", frequency: 1108.73, lowerBound: 1069, upperBound: 1141 },
  { name: "D6", frequency: 1174.66, lowerBound: 1141, upperBound: 1209 },
  { name: "D#6/Eb6", frequency: 1244.51, lowerBound: 1209, upperBound: 1280 },
  { name: "E6", frequency: 1318.51, lowerBound: 1280, upperBound: 1358 },
  { name: "F6", frequency: 1396.91, lowerBound: 1358, upperBound: 1438 },
  { name: "F#6/Gb6", frequency: 1479.98, lowerBound: 1438, upperBound: 1525 },
  { name: "G6", frequency: 1567.98, lowerBound: 1525, upperBound: 1611 },
  { name: "G#6/Ab6", frequency: 1661.22, lowerBound: 1611, upperBound: 1710 },
  { name: "A6", frequency: 1760.0, lowerBound: 1710, upperBound: 1812 },
  { name: "A#6/Bb6", frequency: 1864.66, lowerBound: 1812, upperBound: 1920 },
  { name: "B6", frequency: 1975.53, lowerBound: 1920, upperBound: 2040 },
  { name: "C7", frequency: 2093.0, lowerBound: 2040 },
];

function getNoteByFrequency(frequency: number): Note | null {
  for (const note of notes) {
    if (
      frequency >= note.lowerBound &&
      (note.upperBound === undefined || frequency < note.upperBound)
    ) {
      return note;
    }
  }
  return null;
}

type NoteIndicatorProps = {
  frequency: number;
};

const NoteIndicator: React.FC<NoteIndicatorProps> = ({ frequency }) => {
  const note = getNoteByFrequency(frequency);

  return (
    <div className="rounded-md bg-muted text-primary w-12 h-12 text-sm break-all p-1 text-center flex justify-center items-center">
      {note ? (
        <div>
          <h2>{note.name}</h2>
        </div>
      ) : (
        <p>No note found for frequency {frequency}</p>
      )}
    </div>
  );
};

export default NoteIndicator;
