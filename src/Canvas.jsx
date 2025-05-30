import { useRef, useEffect } from 'react';
import Paper from 'paper';
import './Canvas.css';

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    Paper.setup(canvasRef.current);
    Paper.view.viewSize = new Paper.Size(200, 100);
    new Paper.Shape.Circle({
      center: new Paper.Point(Paper.view.viewSize.width / 2, Paper.view.viewSize.height / 2),
      radius: 25,
      fillColor: props.paperData.color
    });
  }, [props]);

  return <canvas ref={canvasRef} id="canvas" className="canvas" />
};

export default Canvas;