import { useDragDrop } from './DragDropContext';
import './Hotbar.css';

const Hotbar = (props) => {
  const [_, setType] = useDragDrop();

  const onDragStart = (e, nodeType) => {
    setType(nodeType);
  };

  return (
    <div className="hotbar-container">
      <div className="hotbar">
        <div className="hotbar-item" onDragStart={(e) => onDragStart(e, 'shape')} draggable>
          Shape
        </div>
        <div className="hotbar-item" onDragStart={(e) => onDragStart(e, 'paper')} draggable>
          Raster
        </div>
        <div className="hotbar-item" onDragStart={(e) => onDragStart(e, 'paper')} draggable>
          Group
        </div>
      </div>
    </div>
  );
};

export default Hotbar;