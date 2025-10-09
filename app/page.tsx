'use client';
import { useCallback, useEffect } from 'react';
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
import { getNodeId } from './_utils/getNodeId';
// import DEBOUNCE_TIME_FOR_STORE_UPDATE from './constants';

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

function Canvas() {
  const nodeTypes: NodeTypes = {
    decisionNode: DecisionNode,
  };

  //TODO: this key should be changed based on what the pipeline the user is working with
  const storage_key = 'pipeline';

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const reactFlowInstance = useReactFlow();

  const onEventNameGiven = useCallback(
    (name: string, type: string) => {
      const id = getNodeId();
      createEventNode(reactFlowInstance, type, name, id);
    },
    [reactFlowInstance]
  );

  //TODO: when you add the portion that does the storage remember to have a global store that holds the data for the particular pipeline
  useEffect(() => {
    localStorage.setItem(
      storage_key,
      JSON.stringify(reactFlowInstance.toObject())
    );
  }, [nodes, edges, reactFlowInstance]);

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
