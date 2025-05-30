import { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import Canvas from './Canvas';
import './PaperNode.css';

const PaperNode = ({ data, isConnectable }) => {
  const [paperData, setPaperData] = useState({ color: 'blue' });

  return (
    <div className="paper-node">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div className="node-half">
        <div>PaperNode</div>
        <button onClick={() => {
          setPaperData(prev => ({
            color: prev.color === 'blue' ? 'red' : 'blue'
          }));
        }}>
          color
        </button>
      </div>
      <div className="node-half">
        <Canvas paperData={paperData} id={data.id} />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default PaperNode;