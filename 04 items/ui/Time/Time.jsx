import React, { useState } from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
// import TaskContext from "@/app/lib/TasksContext";

const Time = (onDateChange) => {
  const [dateTimeValue, setDateTimeValue] = useState(dayjs());

  const dateTimeHandler = (e) => {
    setDateTimeValue(dayjs(new Date(e.target.value)));
    onDateChange(dayjs(new Date(e.target.value)));
  };

  return (
    <>
      <DateTimePicker value={dateTimeValue} onChange={dateTimeHandler} />
    </>
  );
};

export default Time;
