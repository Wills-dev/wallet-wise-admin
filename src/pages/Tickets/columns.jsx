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
