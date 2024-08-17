import React from "react";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import UserProfile from "@/components/AdminInfoComponet/UserProfile";
import RolePermissions from "@/components/AdminInfoComponet/RolePermissions";
import ActivityLogs from "@/components/AdminInfoComponet/ActivityLogs";
import AssignedTickets from "@/components/AdminInfoComponet/AssignedTickets";

const AdminInfo = () => {
  // User data
  const user = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    role: "Support Agent",
    profilePicture: "https://via.placeholder.com/150", // Placeholder image
  };

  // Roles data
  const roles = [
    "View Tickets",
    "Edit Tickets",
    "Assign Tickets",
    "Manage Users",
    "View Reports",
  ];

  // Activities data
  const activities = [
    {
      description: "Resolved ticket #12345",
      timestamp: "2024-08-15 14:30",
    },
    {
      description: "Assigned ticket #12346 to John Smith",
      timestamp: "2024-08-15 13:15",
    },
    {
      description: "Logged in from IP 192.168.1.1",
      timestamp: "2024-08-15 09:22",
    },
    {
      description: "Updated user profile settings",
      timestamp: "2024-08-14 16:45",
    },
    {
      description: "Closed ticket #12344",
      timestamp: "2024-08-14 14:02",
    },
  ];

  // Tickets data
  const tickets = [
    {
      title: "Issue with payment processing",
      status: "open",
    },
    {
      title: "Unable to access account",
      status: "closed",
    },
    {
      title: "Question about product warranty",
      status: "open",
    },
  ];

  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 dark:text-white">
        <div className="container mx-auto px-4 py-8">
          <UserProfile user={user} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RolePermissions roles={roles} />
            <ActivityLogs activities={activities} />
          </div>
          {tickets && <AssignedTickets tickets={tickets} />}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminInfo;
