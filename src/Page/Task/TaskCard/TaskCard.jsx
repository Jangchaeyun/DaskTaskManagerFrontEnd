import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import UserList from "../UserList";
import SubmissionList from "./SubmissionList";
import EditTaskForm from "./EditTaskForm";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../../ReduxToolkit/TaskSlice";
import { useLocation, useNavigate } from "react-router-dom";

const role = "ROLE_ADMIN";

const TaskCard = ({ item }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [openUserList, setOpenUserList] = useState(false);
  const handleCloseUserList = () => {
    setOpenUserList(false);
  };
  const handleOpenUserList = () => {
    setOpenUserList(true);
    handleMenuClose();
  };

  const [openSubmissionList, setOpenSubmissionList] = useState(false);
  const handleCloseSubmissionList = () => {
    setOpenSubmissionList(false);
  };

  const handleOpenSubmissionList = () => {
    setOpenSubmissionList(true);
    handleMenuClose();
  };

  const [openUpdateTaskForm, setOpenUpdateTaskForm] = useState(false);
  const handleCloseUpdateTaskForm = () => {
    setOpenUpdateTaskForm(false);
  };

  const handleRemoveTaskIdParams = () => {
    const updatedParams = new URLSearchParams(location.search);
    updatedParams.delete("filter");
    const queryString = updatedParams.toString();
    const updatedPath = queryString
      ? `${location.pathname}?${queryString}`
      : location.pathname;
    navigate(updatedPath);
  };

  const handleOpenUpdateTaskModel = () => {
    const updatedParams = new URLSearchParams(location.search);
    setOpenUpdateTaskForm(true);
    updatedParams.set("taskId", item.id);
    navigate(`${location.pathname}?${updatedParams.toString()}`);
    handleMenuClose();
  };
  const handleDeleteTask = () => {
    dispatch(deleteTask(item.id));
    handleMenuClose();
  };
  return (
    <div>
      <div className="card lg:flex justify-between">
        <div className="lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]">
          <div className="lg:w-[7rem] lg:h-[7rem] object-cover">
            <img src={item.image} alt="" />
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <h1 className="font-bold text-lg">{item.title}</h1>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {item.tags.map((item) => (
                <span className="py-1 px-5 rounded-full techStack">{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <IconButton
            id="basic-button"
            aria-controls={openMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={handleMenuClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{ fontFamily: "HancomMalangMalang" }}
          >
            {role === "ROLE_ADMIN" ? (
              <>
                <MenuItem
                  sx={{ fontFamily: "HancomMalangMalang" }}
                  onClick={handleOpenUserList}
                >
                  할당된 사용자
                </MenuItem>
                <MenuItem
                  sx={{ fontFamily: "HancomMalangMalang" }}
                  onClick={handleOpenSubmissionList}
                >
                  제출물 보기
                </MenuItem>
                <MenuItem
                  sx={{ fontFamily: "HancomMalangMalang" }}
                  onClick={handleOpenUpdateTaskModel}
                >
                  수정
                </MenuItem>
                <MenuItem
                  sx={{ fontFamily: "HancomMalangMalang" }}
                  onClick={handleDeleteTask}
                >
                  삭제
                </MenuItem>
              </>
            ) : (
              <></>
            )}
          </Menu>
        </div>
      </div>
      <UserList
        open={openUserList}
        handleClose={handleCloseUserList}
        sx={{ fontFamily: "HancomMalangMalang" }}
      />
      <SubmissionList
        open={openSubmissionList}
        handleClose={handleCloseSubmissionList}
        sx={{ fontFamily: "HancomMalangMalang" }}
      />
      <EditTaskForm
        item={item}
        open={openUpdateTaskForm}
        handleClose={handleCloseUpdateTaskForm}
      />
    </div>
  );
};

export default TaskCard;
