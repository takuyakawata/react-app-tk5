//components/SeatShapeSelector.jsx

import { useState } from 'react';

export const SeatShapeSelector = ({ onChange }) => {

  const [seatShape, setSeatShape] = useState('rectangle');

  // 座席の形を選んで決める
  const handleSeatShapeChange = (e) => {
    const shape = e.target.value;
    setSeatShape(shape);
    onChange(shape);
    console.log(shape)
  };


  return (
    <div>
      <label>
        シートの形：
        <select value={seatShape} onChange={handleSeatShapeChange}>
          <option value="rectangle">長方形</option>
          <option value="circle">円形</option>
          <option value="random">ランダム</option>
        </select>
      </label>
    </div>
  );
};