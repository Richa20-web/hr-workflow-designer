export default function Sandbox({ nodes, edges }) {
  const runWorkflow = () => {
    const hasStart = nodes.some(
      (node) => node.data.label.toLowerCase() === "start",
    );

    const hasEnd = nodes.some(
      (node) => node.data.label.toLowerCase() === "end",
    );

    if (!hasStart || !hasEnd) {
      alert("Workflow must contain Start and End nodes.");
      return;
    }

    const data = {
      nodes,
      edges,
    };

    console.log(data);
    alert("Workflow Executed Successfully!");
  };

  const saveJSON = () => {
    const data = JSON.stringify({ nodes, edges }, null, 2);

    const blob = new Blob([data], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "workflow.json";
    a.click();
  };

  return (
    <div className="h-28 bg-white border-t shadow-inner px-6 flex items-center gap-4">
      <button
        onClick={runWorkflow}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Run Workflow
      </button>

      <button
        onClick={saveJSON}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save JSON
      </button>
    </div>
  );
}
