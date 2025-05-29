import React, { StrictMode, useCallback, useState } from 'react';
import { ReactFlow, Background, useNodesState, useEdgesState, addEdge } from '@xyflow/react';
import Hotbar from './Hotbar';
import './App.css';

import '@xyflow/react/dist/base.css';

const initialNodes = [
  { id: '1', position: { x: 500, y: 150 }, data: { label: '1' } },
  { id: '2', position: { x: 500, y: 300 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const nodeTypes = {};

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const hotbarItems = [
    { name: 'item1', id: 1 },
    { name: 'item2', id: 2 },
    { name: 'item3', id: 3 },
  ];

  return (
    <div className="app-container">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
      <Hotbar hotbarItems={hotbarItems} nodes={nodes} setNodes={setNodes} />
    </div>
  );
}
