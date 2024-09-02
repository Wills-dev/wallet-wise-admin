import { Link } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const columnHelper = createColumnHelper();

export const kycColumn = [
  columnHelper.accessor("id", {
    header: "KYC ID",
  }),
  columnHelper.accessor("name", {
    header: "Full name",
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.accessor("phone", {
    header: "Phone number",
  }),
  columnHelper.accessor("submissionDate", {
    header: "Submission date",
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      if (status === "Approved") {
        return (
          <div className="rounded-full text-green-400 bg-green-100 px-3 py-1 text-center w-32">
            {status}
          </div>
        );
      } else if (status === "Pending") {
        return (
          <div className="rounded-full text-yellow-400 bg-yellow-100 px-3 py-1 text-center w-32">
            {status}
          </div>
        );
      } else if (status === "Declined") {
        return (
          <div className="rounded-full text-red-400 bg-red-100 px-3 py-1 text-center w-32">
            {status}
          </div>
        );
      }
    },
  }),
  columnHelper.accessor("verificationDate", {
    header: "Verification date",
  }),

  {
    id: "actions",
    cell: ({ row }) => {
      const kyc = row.original;

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
              <Link to={`/manage-kyc/info/${kyc.id}`}>View details</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="text-green-500">Approved</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="text-red-500">Decline</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
