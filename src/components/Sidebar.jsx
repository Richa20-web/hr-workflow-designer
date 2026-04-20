export default function Sidebar() {
  const nodes = ["Start", "Task", "Approval", "Automation", "End"];

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="w-60 bg-white shadow-xl border-r p-5">
      <h2 className="text-2xl font-bold mb-5 text-slate-800">Workflow Nodes</h2>

      {nodes.map((item) => (
        <div
          key={item}
          draggable
          onDragStart={(e) => onDragStart(e, item)}
          className="p-3 bg-slate-50 rounded-xl shadow hover:bg-blue-100 hover:scale-105 transition mb-3 cursor-grab font-medium"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
