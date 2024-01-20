import React from "react";

type Note = {
  name: string;
  frequency: number;
  lowerBound: number;
  upperBound?: number;
};

const notes: Note[] = [
  {name: "C1", frequency: 32.7, lowerBound: 31.2, upperBound: 33.67}, 
  {name: "C#1/Db1", frequency: 34.65, lowerBound: 33.67, upperBound: 35.68}, 
  {name: "D1", frequency: 36.71, lowerBound: 35.68, upperBound: 37.8}, 
  {name: "D#1/Eb1", frequency: 38.89, lowerBound: 37.8, upperBound: 40.05}, 
  {name: "E1", frequency: 41.2, lowerBound: 40.05, upperBound: 42.42}, 
  {name: "F1", frequency: 43.65, lowerBound: 42.42, upperBound: 44.95}, 
  {name: "F#1/Gb1", frequency: 46.25, lowerBound: 44.95, upperBound: 47.62}, 
  {name: "G1", frequency: 49.0, lowerBound: 47.62, upperBound: 50.45}, 
  {name: "G#1/Ab1", frequency: 51.91, lowerBound: 50.45, upperBound: 53.45}, 
  {name: "A1", frequency: 55.0, lowerBound: 53.45, upperBound: 56.64}, 
  {name: "A#1/Bb1", frequency: 58.27, lowerBound: 56.64, upperBound: 60.01}, 
  {name: "B1", frequency: 61.74, lowerBound: 60.01, upperBound: 63.58}, 
  {name: "C2", frequency: 65.41, lowerBound: 63.58, upperBound: 67.35}, 
  {name: "C#2/Db2", frequency: 69.3, lowerBound: 67.35, upperBound: 71.36}, 
  {name: "D2", frequency: 73.42, lowerBound: 71.36, upperBound: 75.6}, 
  {name: "D#2/Eb2", frequency: 77.78, lowerBound: 75.6, upperBound: 80.09}, 
  {name: "E2", frequency: 82.41, lowerBound: 80.09, upperBound: 84.86}, 
  {name: "F2", frequency: 87.31, lowerBound: 84.86, upperBound: 89.91}, 
  {name: "F#2/Gb2", frequency: 92.5, lowerBound: 89.91, upperBound: 95.25}, 
  {name: "G2", frequency: 98.0, lowerBound: 95.25, upperBound: 100.91}, 
  {name: "G#2/Ab2", frequency: 103.83, lowerBound: 100.91, upperBound: 106.91}, 
  {name: "A2", frequency: 110.0, lowerBound: 106.91, upperBound: 113.27}, 
  {name: "A#2/Bb2", frequency: 116.54, lowerBound: 113.27, upperBound: 120.0}, 
  {name: "B2", frequency: 123.47, lowerBound: 120.0, upperBound: 127.14}, 
  {name: "C3", frequency: 130.81, lowerBound: 127.14, upperBound: 134.7}, 
  {name: "C#3/Db3", frequency: 138.59, lowerBound: 134.7, upperBound: 142.71}, 
  {name: "D3", frequency: 146.83, lowerBound: 142.71, upperBound: 151.19}, 
  {name: "D#3/Eb3", frequency: 155.56, lowerBound: 151.19, upperBound: 160.19}, 
  {name: "E3", frequency: 164.81, lowerBound: 160.19, upperBound: 169.71}, 
  {name: "F3", frequency: 174.61, lowerBound: 169.71, upperBound: 179.81}, 
  {name: "F#3/Gb3", frequency: 185.0, lowerBound: 179.81, upperBound: 190.5}, 
  {name: "G3", frequency: 196.0, lowerBound: 190.5, upperBound: 201.82}, 
  {name: "G#3/Ab3", frequency: 207.65, lowerBound: 201.82, upperBound: 213.82}, 
  {name: "A3", frequency: 220.0, lowerBound: 213.82, upperBound: 226.54}, 
  {name: "A#3/Bb3", frequency: 233.08, lowerBound: 226.54, upperBound: 240.01}, 
  {name: "B3", frequency: 246.94, lowerBound: 240.01, upperBound: 254.28}, 
  {name: "C4", frequency: 261.63, lowerBound: 254.28, upperBound: 269.4}, 
  {name: "C#4/Db4", frequency: 277.18, lowerBound: 269.4, upperBound: 285.42}, 
  {name: "D4", frequency: 293.66, lowerBound: 285.42, upperBound: 302.39}, 
  {name: "D#4/Eb4", frequency: 311.13, lowerBound: 302.39, upperBound: 320.38}, 
  {name: "E4", frequency: 329.63, lowerBound: 320.38, upperBound: 339.43}, 
  {name: "F4", frequency: 349.23, lowerBound: 339.43, upperBound: 359.61}, 
  {name: "F#4/Gb4", frequency: 369.99, lowerBound: 359.61, upperBound: 381.0}, 
  {name: "G4", frequency: 392.0, lowerBound: 381.0, upperBound: 403.65}, 
  {name: "G#4/Ab4", frequency: 415.3, lowerBound: 403.65, upperBound: 427.65}, 
  {name: "A4", frequency: 440.0, lowerBound: 427.65, upperBound: 453.08}, 
  {name: "A#4/Bb4", frequency: 466.16, lowerBound: 453.08, upperBound: 480.02}, 
  {name: "B4", frequency: 493.88, lowerBound: 480.02, upperBound: 508.56}, 
  {name: "C5", frequency: 523.25, lowerBound: 508.56, upperBound: 538.81}, 
  {name: "C#5/Db5", frequency: 554.37, lowerBound: 538.81, upperBound: 570.85}, 
  {name: "D5", frequency: 587.33, lowerBound: 570.85, upperBound: 604.79}, 
  {name: "D#5/Eb5", frequency: 622.25, lowerBound: 604.79, upperBound: 640.75}, 
  {name: "E5", frequency: 659.25, lowerBound: 640.75, upperBound: 678.86}, 
  {name: "F5", frequency: 698.46, lowerBound: 678.86, upperBound: 719.23}, 
  {name: "F#5/Gb5", frequency: 739.99, lowerBound: 719.23, upperBound: 761.99}, 
  {name: "G5", frequency: 783.99, lowerBound: 761.99, upperBound: 807.3}, 
  {name: "G#5/Ab5", frequency: 830.61, lowerBound: 807.3, upperBound: 855.31}, 
  {name: "A5", frequency: 880.0, lowerBound: 855.31, upperBound: 906.16}, 
  {name: "A#5/Bb5", frequency: 932.33, lowerBound: 906.16, upperBound: 960.05}, 
  {name: "B5", frequency: 987.77, lowerBound: 960.05, upperBound: 1017.13}, 
  {name: "C6", frequency: 1046.5, lowerBound: 1017.13, upperBound: 1077.62}, 
  {name: "C#6/Db6", frequency: 1108.73, lowerBound: 1077.62, upperBound: 1141.7}, 
  {name: "D6", frequency: 1174.66, lowerBound: 1141.7, upperBound: 1209.59}, 
  {name: "D#6/Eb6", frequency: 1244.51, lowerBound: 1209.59, upperBound: 1281.51}, 
  {name: "E6", frequency: 1318.51, lowerBound: 1281.51, upperBound: 1357.71}, 
  {name: "F6", frequency: 1396.91, lowerBound: 1357.71, upperBound: 1438.45}, 
  {name: "F#6/Gb6", frequency: 1479.98, lowerBound: 1438.45, upperBound: 1523.98}, 
  {name: "G6", frequency: 1567.98, lowerBound: 1523.98, upperBound: 1614.6}, 
  {name:" G#6/Ab6", frequency: 1661.22, lowerBound: 1614.6, upperBound: 1710.61}, 
  {name: "A6", frequency: 1760.0, lowerBound: 1710.61, upperBound: 1812.33}, 
  {name: "A#6/Bb6", frequency: 1864.66, lowerBound: 1812.33, upperBound: 1920.1}, 
  {name: "B6", frequency: 1975.53, lowerBound: 1920.1, upperBound: 2034.26}, 
  {name: "C7", frequency: 2093.0, lowerBound: 2034.26, upperBound: 2155.23}, 
  {name: "C#7/Db7", frequency: 2217.46, lowerBound: 2155.23, upperBound: 2283.39}, 
  {name: "D7", frequency: 2349.32, lowerBound: 2283.39, upperBound: 2419.17}, 
  {name: "D#7/Eb7", frequency: 2489.02, lowerBound: 2419.17, upperBound: 2563.02}, 
  {name: "E7", frequency: 2637.02, lowerBound: 2563.02, upperBound: 2715.43}, 
  {name: "F7", frequency: 2793.83, lowerBound: 2715.43, upperBound: 2876.89}, 
  {name: "F#7/Gb7", frequency: 2959.96, lowerBound: 2876.89, upperBound: 3047.96},
  {name: "G7", frequency: 3135.96, lowerBound: 3047.96, upperBound: 3229.2}, 
  {name: "G#7/Ab7", frequency: 3322.44, lowerBound: 3229.2, upperBound: 3421.22}, 
  {name: "A7", frequency: 3520.0, lowerBound: 3421.22, upperBound: 3624.65}, 
  {name: "A#7/Bb7", frequency: 3729.31, lowerBound: 3624.65, upperBound: 3840.19}, 
  {name: "B7", frequency: 3951.07, lowerBound: 3840.19, upperBound: 4068.54}, 
  {name: "C8", frequency: 4186.01, lowerBound: 4068.54, upperBound: 4300}
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
    <div className="rounded-md bg-muted text-primary w-12 h-12 text-sm break-all p-1 text-center flex justify-center items-center border">
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
