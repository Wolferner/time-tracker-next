"use server";

import { saveTask } from "@/04 items/lib/DataBase/Connector";

export const addNewTask = async (taskData) => {
  try {
    await saveTask("node-json-db", taskData);
  } catch (error) {
    console.log(`problemka v Task.data.js!!!! error: ${error}`);
  }
};

// export const addNewTask = async (taskData) => {
//   const task = JSON.parse(taskData);
//   const date = dayjs(task.id);
//   const year = date.format("YYYY");
//   const month = date.format("MM");
//   const day = date.format("DD");

//   const path = `/userTasks/${year}/${month}/${day}`;

//   let currentTasks;

//   try {
//     currentTasks = await userDb.getData(path);
//   } catch (error) {
//     currentTasks = [];
//   }

//   currentTasks.push(task);

//   await userDb.push(path, currentTasks);
// };

// prinimajut format string - '2023-01-01'
// const getTasksBetweenDates = (startDate, endDate) => {
//   const start = dayjs(startDate);
//   const end = dayjs(endDate);
//   let currentMonth = start.startOf("month");
//   const tasks = [];

//   while (currentMonth.isBefore(end) || currentMonth.isSame(end)) {
//     const year = currentMonth.format("YYYY");
//     const month = currentMonth.format("MM");
//     const path = `/userTasks/${year}/${month}`;

//     try {
//       const monthlyTasks = userDb.getData(path);
//       const filteredTasks = monthlyTasks.filter((task) => {
//         const taskDate = dayjs(task.id);
//         return taskDate.isSameOrAfter(start) && taskDate.isSameOrBefore(end);
//       });
//       tasks.push(...filteredTasks);
//     } catch (error) {}
//     currentMonth = currentMonth.add(1, "month");
//   }
//   return tasks;
// };
