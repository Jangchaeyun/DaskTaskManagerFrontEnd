import { Avatar } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <div className="min-h-[85vh] flex flex-col justify-center fixed w-[20vw]">
      <div className="space-y-5 h-full">
        <div className="flex justify-center">
          <Avatar
            sx={{ width: "8rem", height: "8rem" }}
            src="https://flexible.img.hani.co.kr/flexible/normal/970/627/imgdb/original/2024/0315/20240315502867.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
