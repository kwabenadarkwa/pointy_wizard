import { describe, expect, test } from '@jest/globals';
import { getPointyLang } from './compiler';
import { type Node, type Edge } from '@xyflow/react';

describe('convert to Pointy lang', () => {
  test('makes sure that the nodes that are put in come out as what they are supposed to be', () => {
    const initialNodes: Node[] = [
      { id: '1', data: { label: 'Node 1' }, position: { x: 5, y: 5 } },
      { id: '2', data: { label: 'Node 2' }, position: { x: 5, y: 100 } },
    ];

    const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' }];
    const map: string[] = getPointyLang(initialNodes, initialEdges)
    console.log(map)
    const equal = ['Node 1','->','Node 2']
    expect(map).toEqual(equal)

  });
});
