import { type ReactFlowInstance } from '@xyflow/react';

export const createEventNode = (
    reactFlowInstance: ReactFlowInstance,
    label: string,
    id: string
) => {
    const newNode = {
        id,
        position: {
            x: 0,
            y: 10,
        },
        data: {
            label: label,
        },
    };
    reactFlowInstance.addNodes(newNode);
};
