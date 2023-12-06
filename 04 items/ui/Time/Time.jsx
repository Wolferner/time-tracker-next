"use client";

import React, { useState } from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

const Time = ({ onDateChange }) => {
  const [dateTimeValue, setDateTimeValue] = useState(dayjs());

  const dateChangeHandler = (newValue) => {
    setDateTimeValue(dayjs(newValue));
    onDateChange({
      timeStart: dayjs(newValue).toISOString(),
      id: dayjs(newValue).toISOString(),
    });
  };

  // const dateTimeHandler = () => {
  //   onDateChange({ timeStart: dateTimeValue });
  // };

  return (
    <>
      <DateTimePicker
        value={dateTimeValue}
        onChange={dateChangeHandler}
        // onBlur={dateTimeHandler}
      />
    </>
  );
};

export default Time;
