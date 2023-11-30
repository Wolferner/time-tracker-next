"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./Task.module.css";
import TitleDescriptionSet from "@/03 sets/TitleDescriptionSet/TitleDescriptionSet";
import TaskContext from "@/app/lib/TasksContext";
import TaskTime from "@/03 sets/TaskTime/TaskTime";

const Task = (props) => {
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const taskCtx = useContext(TaskContext);

  const togleHandler = () => {
    setIsEditing(!isEditing);
  };
  const changeTextHandler = (event) => {
    setText(event.target.value);
  };
  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    if (taskCtx.startSending) {
      taskCtx.updateTaskData({
        title: title,
        description: text,
      });
      // console.log(taskCtx.taskData)
      setText("");
      setTitle("");
    }
  }, [taskCtx.startSending]);

  return (
    <div className={`${styles.Task} ${props.className}  row`}>
      <div
        className={`${styles.card} ${props.className}  card blue-grey darken-1`}
      >
        <TitleDescriptionSet titleValue={} descriptionValue={} onDescriptionGet={} onTitleGet={}/>
        <TaskTime place='' onGetButtonData={}/>
        <div className={`card-action`}>{props.children}</div>
      </div>
    </div>
  );
};

export default Task;
