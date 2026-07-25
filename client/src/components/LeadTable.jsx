import StatusBadge from "./StatusBadge";

const LeadTable = ({ leads, updateStatus }) => {
  if (leads.length === 0) {
    return (
      <div className="rounded-lg bg-white p-8 text-center shadow">
        No Leads Found
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Budget</th>
            <th className="px-4 py-3 text-left">Message</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Change</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id} className="border-b">
              <td className="px-4 py-3">{lead.name}</td>
              <td className="px-4 py-3">{lead.email}</td>
              <td className="px-4 py-3">{lead.budget}</td>
              <td className="px-4 py-3">{lead.message}</td>

              <td className="px-4 py-3">
                <StatusBadge status={lead.status} />
              </td>

              <td className="px-4 py-3">
                <select
                  value={lead.status}
                  onChange={(e) =>
                    updateStatus(lead._id, e.target.value)
                  }
                  className="rounded border p-2"
                >
                  <option>New</option>
                  <option>Contacted</option>
                  <option>Closed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadTable;