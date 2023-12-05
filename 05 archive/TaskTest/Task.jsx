"use client";

import React, { useContext, useEffect, useState, useReducer } from "react";
import styles from "@/02 widgets/Task/Task.module.css";
import TitleDescriptionSet from "@/05 archive/TitleDescriptionSet/TitleDescriptionSet.jsx";
import dayjs from "dayjs";
// import TaskContext from "@/app/lib/TasksContext";
import TaskTime from "@/03 sets/TaskTime/TaskTime";
import Title from "./ui/Title.jsx";
import Description from "./ui/Description.jsx";
import InfoBlock from "@/02 widgets/Task/ui/InfoBlock/InfoBlock.jsx";

const Task = (props) => {
  console.log("Task Render");

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    timeStart: "",
    timeEnd: "",
    duration: 0,
    type: "",
  });

  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [dateInput, setDateInput] = useState(dayjs());
  const [buttonState, setButtonState] = useState("");

  useEffect(() => {
    setTaskData((prev) => {
      return {
        ...prev,
        title: titleInput,
        description: descriptionInput,
        date: dateInput,
      };
    });

    onBlurCallback(titleDescription);
  }, [titleInput, descriptionInput, dateInput]);

  useEffect(() => {
    if (buttonState === "PLAY") {
    }
    if (buttonState === "PAUSE") {
    }
    if (buttonState === "STOP") {
    }
  }, [buttonState]);

  const getTitleHandler = (title) => {
    setTitleInput(title);
  };
  const getDescriptionHandler = (description) => {
    setDescriptionInput(description);
  };
  const getDateHandler = (date) => {
    setDateInput(date);
  };

  const getButtonStateHandler = (buttonValue) => {
    setButtonState(buttonValue);
  };

  return (
    <div className={`${styles.Task} ${props.className}  row`}>
      <div
        className={`${styles.card} ${props.className}  card blue-grey darken-1`}
      >
        <Title onChange={getTitleHandler} />
        <Description onChange={getDescriptionHandler} />
        {/* <TitleDescriptionSet
          onBlurCallback={changeTitleHandler}
        /> */}

        <TaskTime
          place=""
          onGetDate={getDateHandler}
          onPressButton={getButtonStateHandler}
        />
        <InfoBlock />
        <div className={`card-action`}>{props.children}</div>
      </div>
    </div>
  );
};

export default Task;
