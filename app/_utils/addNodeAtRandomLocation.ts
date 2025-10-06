import { type ReactFlowInstance } from '@xyflow/react';

export const addNodeAtRandomLocation = (
    reactFlowInstance: ReactFlowInstance,
    id:string 
) => {
    const newNode = {
        id,
        position: {
            x: Math.random() * 500,
            y: Math.random() * 500,
        },
        data: {
            label: `Node ${id}`,
        },
    };
    reactFlowInstance.addNodes(newNode);
};
