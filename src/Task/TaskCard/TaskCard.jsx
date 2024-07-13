import { IconButton } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const TaskCard = () => {
  return (
    <div>
      <div className="card lg:flex justify-between">
        <div className="lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]">
          <div className="lg:w-[7rem] lg:h-[7rem] object-cover">
            <img
              src="https://velog.velcdn.com/images/dataliteracy/post/6ba7123d-8b8d-4470-9059-4b599f94b1c9/image.png"
              alt=""
            />
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <h1>프로그래머스 5문제 풀기</h1>
              <p>매일 프로그래머스 문제 풀기</p>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {[1, 1, 1, 1].map((item) => (
                <span className="py-1 px-5 rounded-full techStack">Python</span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
