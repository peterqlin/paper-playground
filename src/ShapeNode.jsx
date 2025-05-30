import { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import Canvas from './Canvas';
import './PaperNode.css';

const ShapeNode = (props) => {
  return (
    <div className="shape-node">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={props.isConnectable}
      />
      <div>ShapeNode</div>
      <Canvas paperData={props.shapeData} id={props.id} />
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={props.isConnectable}
      />
    </div>
  );
};

export default ShapeNode;