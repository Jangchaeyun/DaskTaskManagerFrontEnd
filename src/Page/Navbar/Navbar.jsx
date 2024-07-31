import { Avatar } from "@mui/material";
import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { task, auth } = useSelector((store) => store);
  return (
    <div className="contain z-10 sticky left-0 right-0 top-0 py-3 px-5 lg:px-10, flex justify-between items-center">
      <p className="font-bold text-lg">Day Task Manager</p>
      <div className="flex items-center gap-5">
        <p>{auth.user.fullName}</p>
        <Avatar
          src="https://flexible.img.hani.co.kr/flexible/normal/970/627/imgdb/original/2024/0315/20240315502867.jpg"
          sx={{ backgroundColor: "#c24dd0" }}
          className="bg-[#c24dd0]"
        >
          S
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
