'use client';
import { useCallback } from 'react';
import {
  ReactFlowProvider,
  ReactFlow,
  Background,
  Controls,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type Connection,
  useReactFlow,
  addEdge,
  NodeTypes,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import BottomControlCenter from './_components/bottomControlCenter/bottomControlCenter';
import DecisionNode from './_components/customNodes/decisionNode';
import { createEventNode } from './_utils/createEventNode';

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

function Canvas() {
  const nodeTypes: NodeTypes = {
    decisionNode: DecisionNode,
  };

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  let nodeId = 0;
  const reactFlowInstance = useReactFlow();

  const onEventNameGiven = useCallback(
    (name: string, type: string) => {
      const id = `${++nodeId}`;
      createEventNode(reactFlowInstance, type, name, id);
    },
    [nodeId, reactFlowInstance]
  );

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [setEdges]
  );

  return (
    <div className="h-screen w-screen">
      <ReactFlow
        colorMode="light"
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <BottomControlCenter
          actions={{
            onEventClick: onEventNameGiven,
            onConnectionClick: () => console.log('connection'),
            onExtrasClick: () => console.log('extras'),
          }}
        />
        <Background color="#ccc" variant={BackgroundVariant.Dots} />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default function Home() {
  return (
    <ReactFlowProvider>
      <Canvas />
    </ReactFlowProvider>
  );
}
