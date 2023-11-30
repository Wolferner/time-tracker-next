"use client";

import React, { useContext, useEffect, useState, useReducer } from "react";
import styles from "@/02 widgets/Task/Task.module.css";
import TitleDescriptionSet from "@/03 sets/TitleDescriptionSet/TitleDescriptionSet";
import dayjs from "dayjs";
// import TaskContext from "@/app/lib/TasksContext";
import TaskTime from "@/03 sets/TaskTime/TaskTime";

const sendingTaskReducer = (state, action) => {
  switch (action.type) {
    case "Date":
      return { ...state, date: action.date };
    case "TEXT":
      return { ...state, title: action.title, description: action.description };
    default:
      return state;
  }
};

const Task = (props) => {
  console.log("Task Render");
  // const taskCtx = useContext(TaskContext);

  //   useEffect(() => {
  //     if (taskCtx.startSending) {
  //       taskCtx.updateTaskData({
  //         title: title,
  //         description: text,
  //       });
  //       // console.log(taskCtx.taskData)
  //       setText("");
  //       setTitle("");
  //     }
  //   }, [taskCtx.startSending]);

  const [task, dispatchTask] = useReducer(sendingTaskReducer, {
    title: "",
    description: "",
    date: dayjs(),
  });

  const blurTitleDescriptionHandler = (titleDescriprtion) => {
    dispatchTask(titleDescriprtion);
  };
  const getButtonActionHandler = (date) => {
    dispatchTask(date);
  };

  return (
    <div className={`${styles.Task} ${props.className}  row`}>
      <div
        className={`${styles.card} ${props.className}  card blue-grey darken-1`}
      >
        <TitleDescriptionSet onGetTextData={blurTitleDescriptionHandler} />
        <TaskTime place="" onGetButtonData={getButtonActionHandler} />
        <div className={`card-action`}>{props.children}</div>
      </div>
    </div>
  );
};

export default Task;
