/* eslint-disable no-unused-vars */
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DropDownAvatar = () => {
  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center ml-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            
            <KeyboardArrowDownIcon style={{ color: "white" }} className="ml-2" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-slate-800 text-white w-60">
          <DropdownMenuLabel className="text-lg"><div className="ml-2 text-white">
              <p>Mandeep</p>
              <p className="text-sm text-gray-400">mandeepnh5@gmail.com</p>
            </div></DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex items-center">
              <span className="ml-2">Bank & AutoPay</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center">
              <span className="ml-2">Import Funds</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center">
              <span className="ml-2">Watchlist</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center">
              <span className="ml-2">Orders</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center">
              <span className="ml-2">Reports</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center">
              <span className="ml-2">SIPs</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex items-center">
              <span className="ml-2">Customer Support 24x7</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center">
              <span className="ml-2">Settings</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex items-center">
              <span className="ml-2">Log Out</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDownAvatar;
