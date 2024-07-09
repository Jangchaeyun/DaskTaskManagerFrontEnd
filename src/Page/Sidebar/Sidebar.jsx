import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

const menu = [
  { name: "홈", value: "Home", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
  { name: "완료", value: "DONE", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
  { name: "진행 중", value: "ASSIGNED", role: ["ROLE_ADMIN"] },
  { name: "보류 중", value: "PENDING", role: ["ROLE_ADMIN"] },
  { name: "새로운 할 일 만들기", value: "", role: ["ROLE_ADMIN"] },
  { name: "알림", value: "NOTIFICATION", role: ["ROLE_CUSTOMER"] },
];

const role = "ROLE_ADMIN";

const Sidebar = () => {
  return (
    <div className="card min-h-[85vh] flex flex-col justify-center fixed w-[20vw]">
      <div className="space-y-5 h-full">
        <div className="flex justify-center">
          <Avatar
            className="border-2 border-[#c24dd0]"
            sx={{ width: "8rem", height: "8rem" }}
            src="https://flexible.img.hani.co.kr/flexible/normal/970/627/imgdb/original/2024/0315/20240315502867.jpg"
          />
        </div>
        {menu
          .filter((item) => item.role.includes(role))
          .map((item) => (
            <p className={`py-3 px-5 rounded-full text-center cursor-pointer`}>
              {item.name}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
