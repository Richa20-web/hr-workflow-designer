import { useState, useEffect } from "react";

export default function ConfigPanel({ selectedNode, setNodes }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (selectedNode) {
      setTitle(selectedNode.data.label);
    }
  }, [selectedNode]);

  const updateNode = () => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === selectedNode.id
          ? {
              ...node,
              data: { ...node.data, label: title },
            }
          : node,
      ),
    );
  };

  const deleteNode = () => {
    setNodes((nds) => nds.filter((node) => node.id !== selectedNode.id));
  };

  return (
    <div className="w-80 bg-white shadow-xl border-l p-5">
      <h2 className="text-xl font-bold mb-4">Configuration</h2>

      {!selectedNode ? (
        <p className="text-gray-500">Select a node to edit.</p>
      ) : (
        <>
          <label className="block mb-2 font-medium">Node Title</label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-slate-300 p-3 w-full rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={updateNode}
            className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
          >
            Save
          </button>

          <button
            onClick={deleteNode}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}
