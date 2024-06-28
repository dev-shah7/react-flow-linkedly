import 'reactflow/dist/style.css';
import './App.css';
import FlowChart from './components/FlowChart';
import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [selectedNode, setSelectedNode] = useState(null);

  const handleClearSelection = () => {
    setSelectedNode(null);
  };
  return (
    <div className='main-container'>
      <FlowChart setSelectedNode={setSelectedNode} />
      <Sidebar
        selectedNode={selectedNode}
        handleClearSelection={handleClearSelection}
      />
    </div>
  );
}

export default App;
