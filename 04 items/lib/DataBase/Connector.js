"use server";

import {
  getJsonData,
  addJsonData,
  delJsonData,
} from "@/04 items/lib/DataBase/Connectors/node-json-db";
import dayjs from "dayjs";

export const saveTask = async (dataBaseName, data) => {
  try {
    if (dataBaseName === "node-json-db") {
      const task = JSON.parse(data);
      const date = dayjs(task.id);
      const year = date.format("YYYY");
      const month = date.format("MM");
      const day = date.format("DD");

      const path = `/userTasks/${year}/${month}/${day}`;

      let currentTasks = [];
      // console.log(data);
      // console.log(path);
      try {
        currentTasks = await getJsonData(path);
        // console.log(currentTasks);
      } catch (error) {
        console.log(`problem to get data in func  saveData  ${error}`);
        currentTasks = [];
      }
      // console.log(currentTasks);

      currentTasks.push(task);

      await addJsonData(path, currentTasks);
    } else {
      console.log(
        "Need to use argument dataBaseName : saveData( dataBaseName, data )"
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const saveData = async (dataBaseName, where, data) => {
  try {
    if (dataBaseName === "node-json-db") {
      const parsedData = JSON.parse(data);
      let id;
      switch (where) {
        case "userClients":
          id = parsedData.clientId;
          break;
        case "userProjects":
          id = parsedData.project_business_id;
      }
      const path = `/${where}/${id}`;

      await addJsonData(path, parsedData);
    } else {
      console.log(
        "Need to use argument dataBaseName : saveClient( dataBaseName, data )"
      );
    }
  } catch {
    console.log(error);
  }
};

export const deleteData = async (dataBaseName, where, dataId) => {
  try {
    if (dataBaseName === "node-json-db") {
      const path = `/${where}/${dataId}`;

      await delJsonData(path);
    } else {
      console.log(
        "Need to use argument dataBaseName : deleteData( dataBaseName, where ,data )"
      );
    }
  } catch {
    console.log(error);
  }
};

export const getData = async (dataBaseName, where) => {
  try {
    if (dataBaseName === "node-json-db") {
      const path = `/${where}`;

      const response = await getJsonData(path);
      return response;
    } else {
      console.log(
        "Need to use argument dataBaseName : getData( dataBaseName, where )"
      );
    }
  } catch {
    console.log(error);
  }
};
