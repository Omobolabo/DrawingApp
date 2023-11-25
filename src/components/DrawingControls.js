import React from 'react';
import './DrawingControls.css';

const DrawingControls = ({ setBrushSize, setColor, setEraser, clearCanvas, saveImage }) => {
  return (
    <div className="controls">
      <label>
        Brush Size:
        <input
          type="range"
          min="1"
          max="20"
          onChange={(e) => setBrushSize(parseInt(e.target.value))}
        />
      </label>

      <label>
        Color:
        <input type="color" onChange={(e) => setColor(e.target.value)} />
      </label>

      <button onClick={() => setEraser(true)}>Eraser</button>
      <button onClick={() => setEraser(false)}>Brush</button>
      <button onClick={clearCanvas}>Clear Canvas</button>
      <button onClick={saveImage}>Save Image</button>
    </div>
  );
};

export default DrawingControls;