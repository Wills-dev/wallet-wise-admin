import { createColumnHelper } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const columnHelper = createColumnHelper();

export const columnsAssignee = [
  columnHelper.accessor("agent", {
    header: () => <div className="whitespace-nowrap">Agent Name</div>,
  }),
  columnHelper.accessor("noOfEscalated", {
    header: <div className="whitespace-nowrap">Escalated Ticket</div>,
  }),
  columnHelper.accessor("reopened", {
    header: () => <div className="whitespace-nowrap">Reopened Ticket</div>,
  }),
  columnHelper.accessor("pending", {
    header: () => <div className="whitespace-nowrap">Pending Ticket</div>,
  }),
  columnHelper.accessor("closed", {
    header: () => <div className="whitespace-nowrap">Closed Ticket</div>,
  }),
  columnHelper.accessor("resolved", {
    header: () => <div className="whitespace-nowrap">Resolved Ticket</div>,
  }),
  columnHelper.accessor("totalAssignedTicket", {
    header: () => <div className="whitespace-nowrap">Total Ticket</div>,
  }),
  columnHelper.accessor("customerRating", {
    header: () => <div className="whitespace-nowrap">Customer Rating</div>,
  }),
  {
    id: "actions",
    cell: ({ row }) => {
      const agent = row.original;

      return (
        <DropdownMenu className="">
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 text-right">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to={`/tickets/agent/info/${agent.id}`}>View agent</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
