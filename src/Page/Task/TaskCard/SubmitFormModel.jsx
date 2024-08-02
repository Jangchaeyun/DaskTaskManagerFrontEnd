import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasksById, updateTask } from "../../../ReduxToolkit/TaskSlice";
import { useLocation } from "react-router-dom";
import { submitTask } from "../../../ReduxToolkit/SubmissionSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  fontFamily: "HancomMalangMalang",
};

export default function SubmitFormModel({ item, handleClose, open }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("taskId");
  const { task } = useSelector((store) => store);
  const [formData, setFormData] = React.useState({
    githubLink: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitTask({ taskId, githubLink: formData.githubLink }));
    handleClose();
  };

  React.useEffect(() => {
    dispatch(fetchTasksById(taskId));
  }, [taskId]);

  React.useEffect(() => {
    if (task.taskDetails) setFormData(task.taskDetails);
  }, [task.taskDetails]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <TextField
                  label="깃허브 링크"
                  fullWidth
                  name="github"
                  value={formData.githubLink}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="설명"
                  fullWidth
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  className="customeButton"
                  type="submit"
                  sx={{ padding: ".9rem" }}
                >
                  전송
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
