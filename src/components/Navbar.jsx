/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import WalletIcon from "@mui/icons-material/Wallet";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, alpha, styled } from "@mui/material";
import DropDownAvatar from "./DropDownAvatar";
import { Link, useLocation } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "42ch",
      "&:focus": {
        width: "50ch",
      },
    },
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleNotificationClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const path = useLocation().pathname;
  return (
    <nav className="relative top-0 left-0 w-full bg-slate-900 z-50 flex justify-between items-center mt-2">
      <Link to="/user">
        <div className="flex justify-between items-center">
          <img src="/icon.png" alt="Logo" width={50} className="mr-2" />
          <h1 className="text-white text-2xl font-bold">Tradecraft</h1>
        </div>
      </Link>
      <div className="flex justify-between items-center">
        <Link to="/user">
          <h1
            className={`mr-5 ${
              path === "/user" ? "text-green-500" : "text-white"
            }`}
          >
            Explore
          </h1>
        </Link>
        <Link to="/investments">
          <h1
            className={`${
              path === "/investments" ? "text-green-500" : "text-white"
            }`}
          >
            Investments
          </h1>
        </Link>
      </div>
      <div>
        <Search>
          <SearchIconWrapper>
            <SearchIcon style={{ color: "white" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            style={{ color: "white" }}
          />
        </Search>
      </div>
      <div className="flex justify-between items-center">
        <Popover>
          <PopoverTrigger asChild>
            <button onClick={handleNotificationClick}>
              <NotificationsNoneIcon
                style={{ color: "white" }}
                className="mr-3 ml-3"
              />
            </button>
          </PopoverTrigger>
          {anchorEl && (
            <PopoverContent className="bg-black">
              <p className="text-white">No Notifications</p>
            </PopoverContent>
          )}
        </Popover>
        <Link to='/wallet'>
        <WalletIcon style={{ color: "white" }} className="mr-3 ml-3" />
        </Link>
        <Link to='/cart'><ShoppingCartIcon style={{ color: "white" }} className="mr-2 ml-3" /></Link>
        <DropDownAvatar />
      </div>
    </nav>
  );
};

export default Navbar;
