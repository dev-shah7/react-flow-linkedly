import { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import PropTypes from 'prop-types';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Campaign Start' },
    position: { x: 550, y: 100 },
    style: {
      border: '2px solid #E9E9EB',
      borderRadius: '5px',
    },
  },
];

const initialEdges = [];

const FlowChart = ({ setSelectedNode }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => {
      const edgeStyle = {
        stroke: params.sourceHandle === 'b' ? 'green' : 'red',
      };
      setEdges((eds) => addEdge({ ...params, style: edgeStyle }, eds));
    },
    [setEdges]
  );

  const onDrop = (event) => {
    event.preventDefault();
    const type = event.dataTransfer.getData('type');
    const position = {
      x: event.clientX - event.target.getBoundingClientRect().left,
      y: event.clientY - event.target.getBoundingClientRect().top,
    };

    const newNode = {
      id: Date.now().toString(),
      type: 'custom',
      data: { label: type },
      position,
      style: {
        border: '2px solid #E9E9EB',
        borderRadius: '5px',
      },
    };

    setNodes((nds) => nds.concat(newNode));
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onNodeClick = (event, node) => {
    setSelectedNode(node);
    console.log('Node clicked:', node);
  };

  return (
    <div className='flow-canvas' onDrop={onDrop} onDragOver={onDragOver}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

FlowChart.propTypes = {
  setSelectedNode: PropTypes.func.isRequired,
};

export default FlowChart;
