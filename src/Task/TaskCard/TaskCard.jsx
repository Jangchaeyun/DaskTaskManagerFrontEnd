import React from "react";

const TaskCard = () => {
  return (
    <div>
      <div className="card lg:flex justify-between">
        <div className="lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]">
          <div className="lg:w-[7rem] lg:h-[rem] object-cover">
            <img src="" alt="" />
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <h1>프로그래머스 5문제 풀기</h1>
              <p>매일 프로그래머스 문제 풀기</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
