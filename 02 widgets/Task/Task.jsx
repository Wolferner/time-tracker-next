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

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    timeStart: "",
    timeEnd: "",
    duration: 0,
    type: "",
  });

  const changeTitleHandler = (titleDescriprtion) => {
    setTaskData((prevTaskData) => ({
      ...prevTaskData,
      ...titleDescriprtion,
    }));
  };
  const getDateHandler = (date) => {
    setTaskData((prevTaskData) => ({
      ...prevTaskData,
      ...date,
    }));
  };

  return (
    <div className={`${styles.Task} ${props.className}  row`}>
      <div
        className={`${styles.card} ${props.className}  card blue-grey darken-1`}
      >
        <TextField />
        <TextDescription />
        <Time />
        <MediaButtons />

        <div className={`card-action`}>{props.children}</div>
      </div>
    </div>
  );
};

export default Task;
