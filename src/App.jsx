import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import ConfigPanel from "./components/ConfigPanel";
import Sandbox from "./components/Sandbox";

function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="h-16 bg-white shadow-md flex items-center px-6 text-2xl font-bold text-slate-800">
        HR Workflow Designer 🚀
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        <Sidebar />

        <Canvas
          nodes={nodes}
          setNodes={setNodes}
          edges={edges}
          setEdges={setEdges}
          setSelectedNode={setSelectedNode}
        />

        <ConfigPanel selectedNode={selectedNode} setNodes={setNodes} />
      </div>

      {/* Bottom Panel */}
      <Sandbox nodes={nodes} edges={edges} />
    </div>
  );
}

export default App;
