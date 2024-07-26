import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const togglePanel = () => {
    setIsRegister(!isRegister);
  };
  return (
    <div className="flex justify-center h-screen items-center overflow-hidden">
      <div className="box lg:max-w-4xl">
        <div className={`cover ${isRegister ? "rotate-active" : ""}`}>
          <div className="front">
            <img
              src="https://images.pexels.com/photos/13073600/pexels-photo-13073600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              srcset=""
            />
            <div className="text">
              <span className="text-1">
                성공은 체계적으로 조직된 작업에 기반하여 이루어집니다.
              </span>
              <span className="text-2 text-xs">Let's get connected</span>
            </div>
          </div>
          <div className="back">
            <img
              src="https://images.pexels.com/photos/12679942/pexels-photo-12679942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
        <div className="forms h-full">
          <div className="form-content h-full">
            <div className="login-form">로그인 폼</div>
            <div className="signup-form">회원가입 폼</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;