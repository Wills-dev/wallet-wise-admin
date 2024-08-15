import { createColumnHelper } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
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

export const columns = [
  columnHelper.accessor("id", {
    header: "Ticket ID",
  }),
  columnHelper.accessor("user", {
    header: "Full name",
  }),
  columnHelper.accessor("email", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("amount", {
    header: () => <div className="">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className=" font-medium">{formatted}</div>;
    },
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      if (status === "pending") {
        return (
          <div className="rounded-full text-yellow-400 bg-yellow-50 px-3 py-1 text-center w-32">
            {status}
          </div>
        );
      } else if (status === "in progress") {
        return (
          <div className="rounded-full text-blue-400 bg-blue-50 px-3 py-1 text-center w-32">
            {status}
          </div>
        );
      } else if (status === "resolved") {
        return (
          <div className="rounded-full text-green-400 bg-green-50 px-3 py-1 text-center w-32">
            {status}
          </div>
        );
      } else if (status === "closed") {
        return (
          <div className="rounded-full text-red-400 bg-red-50 px-3 py-1 text-center w-32">
            {status}
          </div>
        );
      } else if (status === "escalated") {
        return (
          <div className="rounded-full text-red-400 bg-red-50 px-3 py-1 text-center w-32">
            {status}
          </div>
        );
      }
    },
  }),

  {
    id: "actions",
    cell: ({ row }) => {
      const ticket = row.original;

      return (
        <DropdownMenu className="">
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 text-right">
              {/* <span className="sr-only">Open menu</span> */}
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(ticket.id)}
            >
              Copy ticket ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to={`/tickets/info/${ticket.id}`}>View ticket</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Close ticket</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
