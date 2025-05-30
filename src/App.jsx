import React, { useCallback } from 'react';
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
} from '@xyflow/react';
import '@xyflow/react/dist/base.css';
import './App.css';

import Hotbar from './Hotbar';
import PaperNode from './PaperNode';
import { DragDropProvider, useDragDrop } from './DragDropContext';

const nodeWidth = 200;
const nodeHeight = 200;

const initialNodes = [
  { id: '1', type: 'paper', position: { x: 0, y: 0 }, data: { id: 1 } },
];

const nodeTypes = { paper: PaperNode };

let id = 0;
const getId = () => `node-${id++}`;

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const [type] = useDragDrop();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const onDrop = useCallback((e) => {
    e.preventDefault();

    if (!type) {
      return;
    }

    const position = screenToFlowPosition({
      x: e.clientX,
      y: e.clientY,
    });
    position.x -= nodeWidth / 2;
    position.y -= nodeHeight / 2;
    const newNode = {
      id: getId(),
      type: type,
      position: position,
      data: { label: `${type} node` },
    };

    setNodes((nodes) => [...nodes, newNode]);
  }, [screenToFlowPosition, type]);

  const onDragStart = (e, nodeType) => {
    setType(nodeType);
  }

  return (
    <div className="paper-flow">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
      <Hotbar />
    </div>
  );
}

export default function AppWithProvider() {
  return (
    <ReactFlowProvider>
      <DragDropProvider>
        <App />
      </DragDropProvider>
    </ReactFlowProvider>
  );
}