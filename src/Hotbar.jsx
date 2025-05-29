import { useState } from 'react';
import './Hotbar.css';

const Hotbar = (props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  const handleMouseDown = (downEvent, item, props) => {
    // * prevent text from being selected while dragging
    downEvent.preventDefault();

    document.body.style.cursor = 'grab';

    const onMouseMove = (moveEvent) => {
      setClicked(true);
      setPosition({ x: moveEvent.clientX, y: moveEvent.clientY });
    };

    const onMouseUp = (upEvent) => {
      setClicked(false);
      const newNode = { id: props.nodes[props.nodes.length - 1].id + 1, position: { x: upEvent.clientX, y: upEvent.clientY }, data: { label: `${item.name} node` } };
      props.setNodes([...props.nodes, newNode]);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  return (
    <>
      <div className="hotbar-container">
        <div className="hotbar">
          {props.hotbarItems.map((item) => (
            <div
              key={item.id}
              className="hotbar-item"
              onMouseDown={(e) => { handleMouseDown(e, item, props) }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      {clicked && (
        <div
          style={{
            position: 'fixed',
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%,-50%)',
            zIndex: 11,
            padding: '10px 15px',
            backgroundColor: '#555',
            color: 'white',
            borderRadius: '4px'
          }}
        // className="hotbar-clicked"
        >
          bruh
        </div>
      )}
    </>
  );
};

export default Hotbar;