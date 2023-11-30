"use client";

import React, { useState, useEffect } from "react";
import styles from "./TaskTime.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import StopIcon from "@mui/icons-material/Stop";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

const TaskTime = ({ place, onGetDate }) => {
  console.log("TaskTime Render");
  const [togleButtons, setTogleButtons] = useState();
  const [dateTimeValue, setDateTimeValue] = useState(dayjs());

  useEffect(() => {
    if (place === "card") {
      setTogleButtons(true);
    } else {
      setTogleButtons(false);
    }
  }, [place]);

  const sendDateHandler = () => {
    onGetDate({ timeStart: dateTimeValue });
  };

  const playTimeHandler = (event) => {
    onGetDate({ timeStart: dateTimeValue });
  };

  return (
    <div className={`${styles.TaskTime} `}>
      <DateTimePicker
        value={dateTimeValue}
        onChange={setDateTimeValue}
        onBlur={sendDateHandler}
      />

      <div className={`${styles.btns}`}>
        <a
          href="#"
          className="btn-floating btn-small waves-effect waves-light red"
          // disabled={taskCtx.startSending}
          onClick={playTimeHandler}
        >
          <PlayArrowIcon />
        </a>

        {togleButtons && (
          <>
            <a
              href="#"
              className="btn-floating btn-small waves-effect waves-light red hidden"
              // disabled={!taskCtx.startSending}
              // onClick={}
            >
              <PauseIcon />
            </a>
            <a
              href="#"
              className="btn-floating btn-small waves-effect waves-light red"
              // disabled={!taskCtx.startSending}
              // onClick={}
            >
              <StopIcon />
            </a>
          </>
        )}
      </div>
    </div>
  );
};
export default TaskTime;
