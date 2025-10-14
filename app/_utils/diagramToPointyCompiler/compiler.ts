import { type Node, type Edge } from '@xyflow/react';

//
//INFO: this represents a naive version of the compiler for the minimum version of the diagram
// I hvae to think about the fact that if there is an even number of nodes. there will always be one of the nodes that doesn't have a destination
//TODO: make sure that two nodes don't have the same name because you can't have two events with the same name
//the labels of the nodes are what will represent the event names

//source//destination key value pairs

export function getPointyLang(nodes: Node[], edges: Edge[]): string[] {
  const sourceToDestination = new Map<Node, string>();
  const lastKey = nodes[nodes.length - 1]

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

  //this assumes that they were put in the same order
  const pointy_array: string[] = []
  sourceToDestination.forEach((value, key) => {
    if (key != lastKey) {
      pointy_array.push(key.data.label)
      pointy_array.push("->")
      pointy_array.push(findDestinationNodeLabel(nodes, value))
    }
  })
  return pointy_array
}

function findDestinationNodeLabel(nodes: Node[], nodeId: string): string {
  let label = ''
  for (const node of nodes) {
    if (nodeId == node.id) {
      label = node.data.label
    }
  }
  return label
}

