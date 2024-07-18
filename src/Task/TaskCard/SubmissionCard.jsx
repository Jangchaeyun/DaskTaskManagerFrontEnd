import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton } from "@mui/material";

const SubmissionCard = () => {
  const handlAcceptDecline = (status) => {
    console.log(status);
  };
  return (
    <div className="rounded-md bg-black p-5 flex items-center justify-between">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span>Git hub : </span>
          <div className="flex items-center gap-2 text-[#c24dd0]">
            <OpenInNewIcon />
            <a href="/" target="_blank" rel="noopener noreferrer">
              링크로 가기
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p>제출 시간 : </p>
          <p className="text-gray-400">2024-07-18T22:27:39.517343</p>
        </div>
      </div>
      <div>
        {true ? (
          <div className="flex gap-5">
            <div className="text-green-500">
              <IconButton
                color="success"
                onClick={() => handlAcceptDecline("승인됨")}
              >
                <CheckIcon />
              </IconButton>
            </div>
            <div className="text-red-500">
              <IconButton
                color="error"
                onClick={() => handlAcceptDecline("거절됨")}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </div>
        ) : (
          <Button
            color={true ? "success" : "error"}
            size="small"
            variant="outlined"
          >
            승인
          </Button>
        )}
      </div>
    </div>
  );
};

export default SubmissionCard;
