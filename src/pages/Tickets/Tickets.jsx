import React, { useState } from "react";

import { AnimatePresence } from "framer-motion";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";

import { ticketLinks } from "@/contants";

import { useStateContext } from "@/context/ContextProvider";
import TicketSummary from "@/components/TicketComponent/TicketSummary";
import AllTickets from "@/components/TicketComponent/AllTickets";
import AssigneeActivity from "@/components/TicketComponent/AssigneeActivity";

const Tickets = () => {
  const { currentColor } = useStateContext();
  const [currentLink, setCurrentLink] = useState(0);

  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 dark:text-white">
        <div className=" sidebar">
          <div className="flex border-b-1 mb-5 w-full bg-white dark:bg-secondary-dark-bg z-50 overflow-x-auto">
            {ticketLinks.map((link, index) => (
              <p
                key={index}
                className={`px-3 whitespace-nowrap py-2 cursor-pointer hover:text-[#696cff] text-sm transition-all text-gray-400 font-medium`}
                onClick={() => setCurrentLink(index)}
                style={{ color: currentLink === index && currentColor }}
              >
                {link}
              </p>
            ))}
          </div>
          <AnimatePresence>
            {currentLink === 0 && <TicketSummary currentColor={currentColor} />}
          </AnimatePresence>
          <AnimatePresence>
            {currentLink === 2 && <AssigneeActivity />}
          </AnimatePresence>
          <AnimatePresence>
            {currentLink === 3 && <AllTickets />}
          </AnimatePresence>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Tickets;
