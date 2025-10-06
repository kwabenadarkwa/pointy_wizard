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
    type Connection,
    useReactFlow,
    addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import BottomControlCenter from './_components/bottomControlCenter';
import { addNodeAtRandomLocation } from './_utils/addNodeAtRandomLocation';

//TODO: this is going to be abstracted out to some form of storage that I'm yet to figure out
const initialNodes: Node[] = [
    { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
    { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
];
const initialEdges = [{ id: 'n1-n2', source: 'n1', target: 'n2' }];

function Canvas() {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    let nodeId = 0;
    const reactFlowInstance = useReactFlow();

    const onClick = useCallback(() => {
        const id = `${++nodeId}`;
        addNodeAtRandomLocation(reactFlowInstance, id);
    }, [nodeId, reactFlowInstance]);

    const onConnect = useCallback(
        (params: Connection) =>
            setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [setEdges]
    );

    return (
        //TODO: in order to add custom edges and nodes I'd have to add an edgeTypes prop and a nodeTypes prop
        <div className="h-screen w-screen">
            <ReactFlow
                colorMode="light"
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            >
                <BottomControlCenter onClickEvent={onClick} />
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
