const colors = {
  New: "bg-blue-100 text-blue-700",
  Contacted: "bg-yellow-100 text-yellow-700",
  Closed: "bg-green-100 text-green-700",
};

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${colors[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;