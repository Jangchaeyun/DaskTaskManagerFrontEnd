import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { register } from "../../ReduxToolkit/AuthSlice";

const Signup = ({ togglePannel }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
    console.log("login form", formData);
  };
  return (
    <div>
      <h1 className="text-lg font-bold text-center pb-8">회원가입</h1>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="이름"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="이름을 입력하세요..."
          fontStyle="HancomMalangMalang"
          sx={{ fontFamily: "HancomMalangMalang" }}
        />
        <TextField
          fullWidth
          label="이메일"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="이메일을 입력하세요..."
          fontStyle="HancomMalangMalang"
          sx={{ fontFamily: "HancomMalangMalang" }}
        />
        <TextField
          fullWidth
          label="패스워드"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="패스워드를 입력하세요..."
          fontStyle="HancomMalangMalang"
          sx={{ fontFamily: "HancomMalangMalang" }}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">역할</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.role}
            label="역할"
            name="role"
            onChange={handleChange}
          >
            <MenuItem value={"ROLE_CUSTOMER"}>일반 회원</MenuItem>
            <MenuItem value={"ROLE_ADMIN"}>관리자</MenuItem>
          </Select>
        </FormControl>
        <div>
          <Button
            fullWidth
            className="customeButton"
            type="submit"
            sx={{ padding: ".9rem", fontFamily: "HancomMalangMalang" }}
          >
            회원가입
          </Button>
        </div>
      </form>
      <div className="mt-5 flex items-center gap-2 py-5 justify-center">
        <span>계정이 있으십니까?</span>
        <Button
          onClick={togglePannel}
          sx={{ fontFamily: "HancomMalangMalang" }}
        >
          로그인
        </Button>
      </div>
    </div>
  );
};

export default Signup;
