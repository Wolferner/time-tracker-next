"use client";

import React, { useContext, useEffect, useState, useReducer } from "react";
import styles from "@/02 widgets/Task/Task.module.css";
import dayjs from "dayjs";
// import TaskContext from "@/app/lib/TasksContext";
import TextField from "@/04 items/ui/TextField/TextField";
import TextDescription from "@/04 items/ui/TextDescriprtion/TextDescription";
import Time from "@/04 items/ui/Time/Time";
import MediaButtons from "@/04 items/ui/MediaButtons/MediaButtons";

const Task = (props) => {
  console.log("Task Render");

  const initialDataState = {
    title: "",
    description: "",
    timeStart: dayjs(),
    timeEnd: null,
    duration: 0,
    type: "",
  };

  const [taskData, setTaskData] = useState(initialDataState);

  const dataSendHandler = (value) => {
    if (value.type === "PLAY") {
      console.log(taskData);
      setTaskData(initialDataState);
    }
  };

  const getTitleHandler = (titleValue) => {
    setTaskData((prev) => ({
      ...prev,
      ...titleValue,
    }));
  };
  const getDescriptionHandler = (descriptionValue) => {
    setTaskData((prev) => ({
      ...prev,
      ...descriptionValue,
    }));
  };
  const getDateHandler = (dateValue) => {
    setTaskData((prev) => ({
      ...prev,
      ...dateValue,
    }));
  };

  return (
    <div className={`${styles.Task} ${props.className}  row`}>
      <div
        className={`${styles.card} ${props.className}  card blue-grey darken-1`}
      >
        <TextField
          placeholder=""
          classNames=""
          onBlurCallback={getTitleHandler}
          value={taskData.title}
        />
        <TextDescription
          placeholder=""
          classNames=""
          onBlurCallback={getDescriptionHandler}
          value={taskData.description}
        />
        <Time onDateChange={getDateHandler} />
        <MediaButtons onPressButton={dataSendHandler} place="" classNames="" />

        <div className={`card-action`}>{props.children}</div>
      </div>
    </div>
  );
};

export default Task;
