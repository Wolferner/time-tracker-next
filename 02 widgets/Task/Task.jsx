"use client";

import React, { useContext, useEffect, useState, useReducer } from "react";
import styles from "@/02 widgets/Task/Task.module.css";
import TitleDescriptionSet from "@/03 sets/TitleDescriptionSet/TitleDescriptionSet";
import dayjs from "dayjs";
// import TaskContext from "@/app/lib/TasksContext";
import TaskTime from "@/03 sets/TaskTime/TaskTime";

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

  // useEffect =
  //   (() => {
  //     try {
  //     } catch (error) {}
  //   },
  //   []);

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
        <TitleDescriptionSet
          onBlurCallback={changeTitleHandler}
          input={{ placeholder: "someText", id: "dd" }}
          description={{}}
        />

        <TaskTime place="" onGetDate={getDateHandler} />
        <div className={`card-action`}>{props.children}</div>
      </div>
    </div>
  );
};

export default Task;
