import { type ReactFlowInstance, Position, type Node } from '@xyflow/react';

export const createEventNode = (
  reactFlowInstance: ReactFlowInstance,
  type: string,
  label: string,
  id: string
) => {
  const nodeDefaults = {
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  };

  const minWidth = 150;
  const charWidth = 8;
  const padding = 40;
  const calculatedWidth = Math.max(
    minWidth,
    label.length * charWidth + padding
  );

  let newNode: Node;

  if (type === 'decisionNode') {
    newNode = {
      id,
      position: {
        x: 0,
        y: 10,
      },
      data: {
        label: label,
      },
      type: type,
    };
  }
    //TODO: need to set up a type here to make things easier when converting to pionty lang
    else {
    newNode = {
      id,
      position: {
        x: 0,
        y: 10,
      },
      data: {
        label: label,
      },
      style: {
        background: '#D9E0FF',
        width: calculatedWidth,
      },
      ...nodeDefaults,
    };
  }
  reactFlowInstance.addNodes(newNode);
};
