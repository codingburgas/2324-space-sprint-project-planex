// Slider.tsx
import React, { useState } from 'react';
import './Slider.css';

interface SliderProps {
  initialValue: number;
  min: number;
  max: number;
}

const Slider: React.FC<SliderProps> = ({ initialValue, min, max }) => {
  const [value, setValue] = useState(initialValue);

  const getYearFromValue = (val: number): string => {
    // Map the slider value to the corresponding year range
    const year = Math.round((val / (max - min)) * 4e9 - 2e9);
    return year.toString();
  };

  return (
    <div className="fancy-slider">
      <span className="slider-value">{value}</span>
      <span className="year">{getYearFromValue(value)}</span>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        onChange={(e) => setValue(Number(e.target.value))}
        className="slider-input"
      />
    </div>
  );
};

export default Slider;
