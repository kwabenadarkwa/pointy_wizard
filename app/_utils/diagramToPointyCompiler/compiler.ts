import { type Node, type Edge } from '@xyflow/react';
import { warn } from 'console';

//INFO: this represents a naive version of the compiler for the minimum version of the diagram
// I hvae to think about the fact that if there is an even number of nodes. there will always be one of the nodes that doesn't have a destination

export function getPointyLang(nodes: Node[], edges: Edge[]): string[] {
  const sourceToDestination = new Map<Node, string>();
  const lastKey = nodes[nodes.length - 1];
  const firstKey = nodes[0];

  nodes.map((node) => {
    sourceToDestination.set(node, '');
  });

  sourceToDestination.forEach((_, key) => {
    edges.map((edge) => {
      if (key.id == edge.source) {
        sourceToDestination.set(key, edge.target);
      }
    });
  });

  //this assumes that they were put in the same order and that the arrows would always be of the same type
  const pointy_array: string[] = [];
  sourceToDestination.forEach((value, key) => {
    if (key != lastKey) {
      if (key == firstKey) {
        pointy_array.push(key.data.label);
      }
      pointy_array.push('->');
      pointy_array.push(findDestinationNodeLabel(nodes, value));
    }
  });
  return pointy_array;
}

function findDestinationNodeLabel(nodes: Node[], nodeId: string): string {
  let label = '';
  for (const node of nodes) {
    if (nodeId == node.id) {
      label = node.data.label;
    }
  }
  return label;
}
