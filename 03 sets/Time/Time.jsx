import React, { useState, useEffect, useContext } from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import TaskContext from "@/app/lib/TasksContext";

const Time = () => {
  const [dateTimeValue, setDateTimeValue] = useState(dayjs());
  const taskCtx = useContext(TaskContext);
  // console.log(taskCtx)
  useEffect(() => {
    if (taskCtx.startSending) {
      // console.log(taskCtx)
      setDateTimeValue(dayjs());
      taskCtx.updateTaskData({ timeStart: dateTimeValue });
      // console.log(taskCtx.taskData)
    }
  }, [taskCtx.startSending]);

  const dateTimeHandler = (event) => {
    setDateTimeValue(event);
  };

  return (
    <>
      <DateTimePicker value={dateTimeValue} onChange={dateTimeHandler} />
    </>
  );
};

export default Time;

{
  /* <input  className={`${styles.timer}`} type='text' disabled={true} placeholder='Start - End' value={`${props.timeStart}-${props.timeEnd}`}/> */
}
