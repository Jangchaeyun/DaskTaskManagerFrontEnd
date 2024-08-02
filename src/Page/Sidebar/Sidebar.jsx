import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./Sidebar.css";
import CreateNewTaskForm from "../Task/CreateTask";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../ReduxToolkit/AuthSlice";
import { useDispatch } from "react-redux";

const menu = [
  { name: "홈", value: "Home", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
  { name: "완료", value: "DONE", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
  { name: "할당 됨", value: "ASSIGNED", role: ["ROLE_ADMIN"] },
  { name: "진행 중", value: "PENDING", role: ["ROLE_ADMIN"] },
  { name: "새로운 할 일 만들기", value: "", role: ["ROLE_ADMIN"] },
  { name: "알림", value: "NOTIFICATION", role: ["ROLE_CUSTOMER"] },
];

const role = "ROLE_ADMIN";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeMenu, setActiveMenu] = useState("홈");
  const [openCreateTaskForm, setOpenCreateTaskForm] = useState(false);
  const handleCloseCreateTaskForm = () => {
    setOpenCreateTaskForm(false);
  };
  const handleOpenCreateTaskModel = () => {
    setOpenCreateTaskForm(true);
  };
  const handleMenuChange = (item) => {
    const updatedParams = new URLSearchParams(location.search);
    if (item.name == "새로운 할 일 만들기") {
      handleOpenCreateTaskModel();
    } else if (item.name == "홈") {
      updatedParams.delete("filter");
      const queryString = updatedParams.toString();
      const updatedPath = queryString
        ? `${location.pathname}?${queryString}`
        : location.pathname;
      navigate(updatedPath);
    } else {
      updatedParams.set("filter", item.value);
      navigate(`${location.pathname}?${updatedParams.toString()}`);
    }
    setActiveMenu(item.name);
  };
  const handleLogout = () => {
    dispatch(logout());
    console.log("handle logout");
  };
  return (
    <>
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
              <p
                onClick={() => handleMenuChange(item)}
                className={`py-3 px-5 rounded-full text-center cursor-pointer ${
                  activeMenu === item.name ? "activeMenuItem" : "menuItem"
                }`}
              >
                {item.name}
              </p>
            ))}
          <Button
            onClick={handleLogout}
            sx={{
              fontFamily: "HancomMalangMalang-Regular",
              padding: ".7rem",
              borderRadius: "2rem",
            }}
            fullWidth
            className="logoutButton"
            variant="outlined"
          >
            로그아웃
          </Button>
        </div>
        <CreateNewTaskForm
          open={openCreateTaskForm}
          handleClose={handleCloseCreateTaskForm}
        />
      </div>
    </>
  );
};

export default Sidebar;
