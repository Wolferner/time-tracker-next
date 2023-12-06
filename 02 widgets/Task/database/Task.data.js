"use server";

// import { userDb } from "@/04 items/lib/DataBase/Connectors/node-json-db";
import dayjs from "dayjs";
import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig";

const userDb = new JsonDB(new Config(`UserDB-1`, true, false, "/"));

export const addNewTask = async (taskData) => {
  const task = JSON.parse(taskData);
  const date = dayjs(task.id);
  const year = date.format("YYYY");
  const month = date.format("MMMM");
  const day = date.format("DD");

  const path = `/userTasks/${year}/${month}/${day}`;

  let currentTasks;

  try {
    currentTasks = await userDb.getData(path);
  } catch (error) {
    currentTasks = [];
  }

  currentTasks.push(task);

  await userDb.push(path, currentTasks);
};

// prinimajut format string - '2023-01-01'
const getTasksBetweenDates = (startDate, endDate) => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  let currentMonth = start.startOf("month");
  const tasks = [];

  while (currentMonth.isBefore(end) || currentMonth.isSame(end)) {
    const year = currentMonth.format("YYYY");
    const month = currentMonth.format("MMMM");
    const path = `/userTasks/${year}/${month}`;

    try {
      const monthlyTasks = userDb.getData(path);
      const filteredTasks = monthlyTasks.filter((task) => {
        const taskDate = dayjs(task.id);
        return taskDate.isSameOrAfter(start) && taskDate.isSameOrBefore(end);
      });
      tasks.push(...filteredTasks);
    } catch (error) {}
    currentMonth = currentMonth.add(1, "month");
  }
  return tasks;
};
