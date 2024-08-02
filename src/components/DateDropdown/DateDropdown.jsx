import { useState } from "react";

import { Button } from "@/components/ui/button";
("use client");

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DateDropdown() {
  const [year, setYear] = useState("2024");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{year}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-24">
        {/* <DropdownMenuLabel>Select year</DropdownMenuLabel>
        <DropdownMenuSeparator /> */}
        <DropdownMenuRadioGroup value={year} onValueChange={setYear}>
          <DropdownMenuRadioItem value="2023">2023</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="2024">2024</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="2025">2025</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
