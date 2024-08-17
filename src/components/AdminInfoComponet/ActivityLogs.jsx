import { useStateContext } from "@/context/ContextProvider";
import React from "react";

const ActivityLogs = ({ activities }) => {
  const { currentColor } = useStateContext();
  return (
    <div className="bg-white dark:bg-secondary-dark-bg dark:text-white shadow-md rounded-lg p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
      <ul className="divide-y divide-gray-200">
        {activities.map((activity, index) => (
          <li
            key="{index}"
            className="py-2 pl-3 border-l-4 border-gray-300 relative"
          >
            <div
              className="h-3 w-3 rounded-full absolute -left-2 top-0"
              style={{ backgroundColor: currentColor }}
            />
            <p className="text-gray-700 dark:text-gray-200">
              {activity.description}
            </p>
            <span className="text-gray-400 text-sm">{activity.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ActivityLogs;
