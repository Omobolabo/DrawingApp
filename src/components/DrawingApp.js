import React, { useState } from 'react';
import DrawingCanvas from './DrawingCanvas';
import DrawingControls from './DrawingControls';

const DrawingApp = () => {
  const [brushSize, setBrushSize] = useState(5);
  const [color, setColor] = useState('#000000');
  const [eraser, setEraser] = useState(false);
  const [canvasKey, setCanvasKey] = useState(Date.now()); // To force canvas remount

  const clearCanvas = () => {
    setCanvasKey(Date.now()); // Force remounting the canvas to clear it
  };

  const saveImage = () => {
    const canvas = document.getElementById('drawing-canvas');
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'drawing.png';
    link.click();
  };

  return (
    <div>
      <DrawingControls
        setBrushSize={setBrushSize}
        setColor={setColor}
        setEraser={setEraser}
        clearCanvas={clearCanvas}
        saveImage={saveImage}
      />
      <DrawingCanvas key={canvasKey} brushSize={brushSize} color={color} eraser={eraser} />
    </div>
  );
};

export default DrawingApp;