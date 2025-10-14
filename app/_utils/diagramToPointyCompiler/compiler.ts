import { type Node, type Edge } from '@xyflow/react';

//
//INFO: this represents a naive version of the compiler for the minimum version of the diagram
//TODO: make sure that two nodes don't have the same name because you can't have two events with the same name
//the labels of the nodes are what will represent the event names

//source//destination key value pairs

function getPointyLang(nodes: Node[], edges: Edge[]) {
  const sourceToDestination = new Map<Node, string>();

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

  //now that we hve all source and destinations we have to go through them and then print them out in the right order
}
