import { createColumnHelper } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const columnHelper = createColumnHelper();

export const airtimeColumn = [
  columnHelper.accessor("date", {
    header: "Date",
  }),
  columnHelper.accessor("id", {
    header: "Transaction ID",
  }),
  columnHelper.accessor("user", {
    header: "Full name",
  }),
  columnHelper.accessor("network", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Network
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
        currency: "NGN",
      }).format(amount);

      return <div className=" font-medium">{formatted}</div>;
    },
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      if (status === "completed") {
        return (
          <div className="rounded-full text-green-400 bg-green-50 px-3 py-1 text-center w-32">
            {status}
          </div>
        );
      } else if (status === "cancelled") {
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
      const airtime = row.original;

      return (
        <DropdownMenu className="">
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 text-right">
              {/* <span className="sr-only">Open menu</span> */}
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link to={`/airtime/info/${airtime.id}`}>View details</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
