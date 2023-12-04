import React, { useState } from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
// import TaskContext from "@/app/lib/TasksContext";

const Time = ({ onDateChange }) => {
  const [dateTimeValue, setDateTimeValue] = useState(dayjs());

  const dateTimeHandler = (newValue) => {
    setDateTimeValue(dayjs(newValue));
    onDateChange({ timeStart: dayjs(newValue) });
  };

  return (
    <>
      <DateTimePicker value={dateTimeValue} onChange={dateTimeHandler} />
    </>
  );
};

export default Time;
