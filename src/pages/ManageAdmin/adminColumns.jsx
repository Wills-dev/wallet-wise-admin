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

export const adminColumns = [
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
  columnHelper.accessor("role", {
    header: "Role",
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      if (status === "inactive") {
        return (
          <div className="rounded-full text-yellow-400 bg-yellow-50 px-3 py-1 text-center w-32">
            {status}
          </div>
        );
      } else if (status === "active") {
        return (
          <div className="rounded-full text-green-400 bg-green-50 px-3 py-1 text-center w-32">
            {status}
          </div>
        );
      } else if (status === "suspended") {
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
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to={`/manage-admin/admin-info/${ticket.id}`}>
                View details
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">
              Suspend
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
