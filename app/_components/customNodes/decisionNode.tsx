import { Position, Handle, NodeProps, Node } from '@xyflow/react';
type DecisionNodeProps = Node<{ label: string }, 'decisionNode'>;

export default function DecisionNode({ data }: NodeProps<DecisionNodeProps>) {
  return (
    <div className="relative" style={{ width: '50px', height: '50px' }}>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="diamond-top"
          style={{
            width: 0,
            height: 0,
            border: '25px solid transparent',
            borderBottomColor: '#F7EBD0',
            position: 'relative',
          }}
        />
        <div
          className="diamond-bottom"
          style={{
            width: 0,
            height: 0,
            border: '25px solid transparent',
            borderTopColor: '#F7EBD0',
            position: 'relative',
          }}
        />

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-[7px] text-center px-2">
          {data?.label}
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Left}
        style={{ left: '0', top: '50%' }}
      />
      <Handle
        type="source"
        position={Position.Top}
        id="true"
        style={{ left: '50%', top: '0' }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="false"
        style={{ left: '50%', top: '85%' }}
      />
    </div>
  );
}
