"use client";

import React, { useState } from "react";
import styles from "@/02 widgets/Task/Task.module.css";
import dayjs from "dayjs";
import TextField from "@/04 items/ui/TextField/TextField";
import TextDescription from "@/04 items/ui/TextDescriprtion/TextDescription";
import Time from "@/04 items/ui/Time/Time";
import MediaButtons from "@/04 items/ui/MediaButtons/MediaButtons";
import InfoBlock from "./ui/InfoBlock/InfoBlock";
import { addNewTask } from "./database/Task.data.js";
import { dataSendHandler, getDataHandler } from "./logic/Task.logic";

const Task = (props) => {
  console.log("Task Render");

  const initialDataState = () => ({
    id: dayjs(),
    title: "",
    description: "",
    timeStart: dayjs(),
    timeEnd: null,
    duration: 0,
    type: "",
    additionalInfo: {
      customer: "",
      project: "",
      inc: "",
      tags: [],
    },
  });

  const [taskData, setTaskData] = useState(initialDataState);

  // const dataSendHandler = async (value) => {
  //   try {
  //     if (value.type === "PLAY") {
  //       await addNewTask(JSON.stringify(taskData));

  //       console.log(taskData);
  //       setTaskData(initialDataState);
  //     }
  //   } catch (error) {
  //     console.log(`Problem with posting Task  error: ${error}`);
  //   }
  // };

  // const getDataHandler = (field, fieldsValue) => {
  //   if (field === "additionalInfo") {
  //     setTaskData((prev) => ({
  //       ...prev,
  //       additionalInfo: {
  //         ...prev.additionalInfo,
  //         ...fieldsValue,
  //       },
  //     }));
  //   } else {
  //     setTaskData((prev) => ({
  //       ...prev,
  //       ...fieldsValue,
  //     }));
  //   }
  // };

  const handleDataSend = dataSendHandler(
    taskData,
    setTaskData,
    initialDataState
  );
  const handleDataGet = getDataHandler(taskData, setTaskData);

  return (
    <div className={`${styles.Task} ${props.className}  row`}>
      <div
        className={`${styles.card} ${props.className}  card blue-grey darken-1`}
      >
        <TextField
          placeholder=""
          classNames=""
          onBlurCallback={(fieldsValue) => handleDataGet("title", fieldsValue)}
          value={taskData.title}
        />
        <TextDescription
          placeholder=""
          classNames=""
          onBlurCallback={(fieldsValue) =>
            handleDataGet("description", fieldsValue)
          }
          value={taskData.description}
        />
        <Time
          onDateChange={(fieldsValue) =>
            handleDataGet("timeStart", fieldsValue)
          }
        />
        <MediaButtons onPressButton={handleDataSend} place="" classNames="" />
        <InfoBlock
          onBlurCallback={(fieldsValue) =>
            handleDataGet("additionalInfo", fieldsValue)
          }
          value={taskData.additionalInfo}
        />
        <div className={`card-action`}>{props.children}</div>
      </div>
    </div>
  );
};

export default Task;
