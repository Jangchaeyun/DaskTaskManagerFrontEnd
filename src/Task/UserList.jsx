import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
  fontFamily: "HancomMalangMalang",
};

export default function UserList({ handleClose, open }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {[1, 1, 1].map((item) => (
            <div className="flex items-center justify-between w-full">
              <div>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src="https://media.istockphoto.com/id/931527124/ko/%EB%B2%A1%ED%84%B0/%EB%A7%8C%ED%99%94-%EB%B2%9A%EA%BD%83-%EA%B7%B8%EB%A6%AC%EA%B8%B0.jpg?s=612x612&w=0&k=20&c=IXyPYPHsWr9mTDMu7fAFcWh8kYLSnvdxWnLb_noWPMA=" />
                  </ListItemAvatar>
                  <ListItemText
                    secondary="@cherry_chaeyun"
                    primary={"채리채윤"}
                  />
                </ListItem>
              </div>
              <div>
                <Button className="customeButton">선택</Button>
              </div>
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
