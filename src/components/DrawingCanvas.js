import React, { useState, useRef, useEffect } from 'react';
import './DrawingCanvas.css';

const DrawingCanvas = ({ brushSize, color, eraser }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const startDrawing = (event) => {
      const { offsetX, offsetY } = event;
      context.beginPath();
      context.moveTo(offsetX, offsetY);
      setIsDrawing(true);
    };

    const draw = (event) => {
      if (!isDrawing) return;

      const { offsetX, offsetY } = event;
      context.lineTo(offsetX, offsetY);
      context.stroke();
    };

    const stopDrawing = () => {
      context.closePath();
      setIsDrawing(false);
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseleave', stopDrawing);
    };
  }, [isDrawing]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Clear the canvas when the key changes (forcing a remount)
    context.clearRect(0, 0, canvas.width, canvas.height);
  }, [eraser]); // Clear the canvas when switching between brush and eraser

  return (
    <div>
      <canvas
        id="drawing-canvas"
        ref={canvasRef}
        width={800}
        height={600}
        className={eraser ? 'eraser' : ''}
      />
    </div>
  );
};

export default DrawingCanvas;