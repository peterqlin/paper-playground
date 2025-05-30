import { useRef, useEffect } from 'react';
import Paper from 'paper';
import './Canvas.css';

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    Paper.setup(canvasRef.current);
    Paper.view.viewSize = new Paper.Size(200, 100);
    // * logic for creating shape/updating shape attributes
  }, [props]);

  return <canvas ref={canvasRef} id={`canvas-${props.id}`} className="canvas" />
};

export default Canvas;