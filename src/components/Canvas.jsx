import { useCallback } from "react";
import ReactFlow, { Background, Controls, MiniMap, addEdge } from "reactflow";
import "reactflow/dist/style.css";

export default function Canvas({
  nodes,
  setNodes,
  edges,
  setEdges,
  setSelectedNode,
}) {
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  const onDrop = useCallback((event) => {
    event.preventDefault();

    const type = event.dataTransfer.getData("application/reactflow");

    if (!type) return;

    const newNode = {
      id: `${Date.now()}`,
      position: {
        x: event.clientX - 250,
        y: event.clientY - 80,
      },
      data: { label: type },
    };

    setNodes((nds) => nds.concat(newNode));
  }, []);

  const onNodeClick = (_, node) => {
    setSelectedNode(node);
  };

  return (
    <div className="flex-1 rounded-2xl overflow-hidden m-3 shadow-xl border bg-white">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        onNodeClick={onNodeClick}
        onNodesChange={() => {}}
        onEdgesChange={() => {}}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
