import React, { useState } from "react";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { useStateContext } from "@/context/ContextProvider";

const TicketDetails = () => {
  const { currentColor } = useStateContext();

  const ticket = {
    id: "12345",
    subject: "Payment failed for cable purchase",
    category: "Payment",
    priority: "High",
    status: "Open",
    createdDate: "2024-08-13",
    product: "Cable Subscription",
  };

  const [conversation, setConversation] = useState([
    {
      sender: "Customer",
      message:
        "My payment for the cable didn’t go through, but my wallet was debited.",
      time: "2024-08-12 10:30 AM",
    },
    {
      sender: "Agent",
      message: "We’re sorry to hear that. Can you provide more details?",
      time: "2024-08-12 11:00 AM",
    },
  ]);

  const [agentMessage, setAgentMessage] = useState("");

  const [status, setStatus] = useState(ticket.status);
  const [assignedTo, setAssignedTo] = useState("Current Agent");
  const [escalated, setEscalated] = useState(false);

  const handleSendMessage = () => {
    if (agentMessage.trim()) {
      setConversation([
        ...conversation,
        {
          sender: "Agent",
          message: agentMessage,
          time: new Date().toLocaleString(),
        },
      ]);
      setAgentMessage("");
    }
  };

  const handleEscalate = () => {
    setEscalated(true);
    setStatus("Escalated");
  };

  const handleReassign = (newAgent) => {
    setAssignedTo(newAgent);
  };
  return (
    <DashboardLayout>
      <div className="padding-x py-24 dark:text-white">
        <div className="bg-white dark:bg-secondary-dark-bg shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-2">{ticket.subject}</h2>
          <div className="flex flex-wrap text-sm text-gray-600">
            <div className="mr-6">
              <span className="font-semibold">Ticket ID:</span> {ticket.id}
            </div>
            <div className="mr-6">
              <span className="font-semibold">Service:</span> {ticket.product}
            </div>
            <div className="mr-6">
              <span className="font-semibold">Category:</span> {ticket.category}
            </div>
            <div className="mr-6">
              <span className="font-semibold">Priority:</span>{" "}
              <span
                className={`text-${
                  ticket.priority === "High" ? "red" : "yellow"
                }-500`}
              >
                {ticket.priority}
              </span>
            </div>
            <div className="mr-6">
              <span className="font-semibold">Status:</span>{" "}
              <span
                className={`text-${status === "Open" ? "green" : "gray"}-500`}
              >
                {status}
              </span>
            </div>
            <div>
              <span className="font-semibold">Created On:</span>{" "}
              {ticket.createdDate}
            </div>
          </div>
        </div>

        {/* Conversation Thread */}
        <div className="bg-white dark:bg-secondary-dark-bg shadow-md rounded-lg px-4 py-6 flex flex-col justify-between h-[55vh] mt-5">
          <div className="overflow-y-auto mb-4">
            <h3 className="text-xl font-semibold mb-4">Conversation</h3>
            <div className="space-y-4">
              {conversation.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === "Agent" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg max-w-[80%] text-gray-700 ${
                      message.sender === "Agent"
                        ? "bg-purple-100"
                        : "bg-gray-100"
                    }`}
                  >
                    <p className="font-semibold">{message.sender}</p>
                    <p>{message.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{message.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <input
              type="text"
              className="flex-grow p-2 border rounded-lg focus:outline-none focus:border-[#696cff] dark:bg-secondary-dark-bg"
              placeholder="Type your message..."
              value={agentMessage}
              onChange={(e) => setAgentMessage(e.target.value)}
            />
            <button
              style={{ backgroundColor: currentColor }}
              className=" text-white px-4 py-2 rounded-lg"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>

        {/* Agent Actions */}
        <div className="bg-white dark:bg-secondary-dark-bg shadow-md rounded-lg p-4 space-y-4">
          <h3 className="text-xl font-semibold mb-4">Actions</h3>
          <div className="flex sm:gap-4 flex-wrap gap-2">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 whitespace-nowrap"
              onClick={() => setStatus("In Progress")}
            >
              Mark as In Progress
            </button>
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 whitespace-nowrap"
              onClick={() => setStatus("Pending")}
            >
              Mark as Pending
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 whitespace-nowrap"
              onClick={() => setStatus("Resolved")}
            >
              Mark as Resolved
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 whitespace-nowrap"
              onClick={() => setStatus("Closed")}
            >
              Close Ticket
            </button>
            <button
              className={`bg-${
                escalated ? "gray" : "red"
              }-500 text-white px-4 py-2 rounded-lg hover:bg-${
                escalated ? "gray" : "red"
              }-600`}
              onClick={handleEscalate}
              disabled={escalated}
            >
              {escalated ? "Escalated" : "Escalate Ticket"}
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TicketDetails;
