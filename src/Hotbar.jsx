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
        <div className="hotbar-item" onDragStart={(e) => onDragStart(e, 'paper')} draggable>
          PaperNode
        </div>
      </div>
    </div>
  );
};

export default Hotbar;