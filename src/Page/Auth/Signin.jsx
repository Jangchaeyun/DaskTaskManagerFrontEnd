import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../../ReduxToolkit/AuthSlice";

const Signin = ({ togglePannel }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    console.log("login form", formData);
  };
  return (
    <div>
      <h1 className="text-lg font-bold text-center pb-8">로그인</h1>
      <form className="space-y-3" onSubmit={handleSubmit}>
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
        <div>
          <Button
            fullWidth
            className="customeButton"
            type="submit"
            sx={{ padding: ".9rem", fontFamily: "HancomMalangMalang" }}
          >
            로그인
          </Button>
        </div>
      </form>
      <div className="mt-5 flex items-center gap-2 py-5 justify-center">
        <span>계정이 없으십니까?</span>
        <Button
          onClick={togglePannel}
          sx={{ fontFamily: "HancomMalangMalang" }}
        >
          회원가입
        </Button>
      </div>
    </div>
  );
};

export default Signin;
