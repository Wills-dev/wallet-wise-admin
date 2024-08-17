const AssignedTickets = ({ tickets }) => {
  return (
    <div className="bg-white dark:bg-secondary-dark-bg dark:text-white shadow-md rounded-lg p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4">Assigned Tickets</h3>
      <ul className="divide-y divide-gray-200">
        {tickets.map((ticket, index) => (
          <li key={index} className="py-2 flex justify-between items-center">
            <p className="text-gray-700 dark:text-gray-200">{ticket.title}</p>
            <span
              className={`text-sm font-medium ${
                ticket.status === "open" ? "text-green-500" : "text-red-500"
              }`}
            >
              {ticket.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignedTickets;
