import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../../ReduxToolkit/AuthSlice";
import { assignedTaskToUser } from "../../ReduxToolkit/TaskSlice";
import { useLocation } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 2,
  fontFamily: "HancomMalangMalang",
};

const tasks = [1, 1, 1, 1];

export default function UserList({ handleClose, open }) {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("taskId");
  React.useEffect((item) => {
    dispatch(getUserList(localStorage.getItem("jwt")));
  }, []);

  const handleAssignedTask = (user) => {
    dispatch(assignedTaskToUser({ userId: user.id, taskId: taskId }));
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {auth.users.map((item, index) => (
            <>
              <div className="flex items-center justify-between w-full">
                <div>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src="https://media.istockphoto.com/id/931527124/ko/%EB%B2%A1%ED%84%B0/%EB%A7%8C%ED%99%94-%EB%B2%9A%EA%BD%83-%EA%B7%B8%EB%A6%AC%EA%B8%B0.jpg?s=612x612&w=0&k=20&c=IXyPYPHsWr9mTDMu7fAFcWh8kYLSnvdxWnLb_noWPMA=" />
                    </ListItemAvatar>
                    <ListItemText
                      secondary={`@${item.fullName
                        .split(" ")
                        .join("_")
                        .toLowerCase()}`}
                      primary={item.fullName}
                    />
                  </ListItem>
                </div>
                <div>
                  <Button
                    onClick={() => handleAssignedTask(item)}
                    className="customeButton"
                  >
                    선택
                  </Button>
                </div>
              </div>
              {index !== tasks.length - 1 && <Divider variant="inset" />}
            </>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
