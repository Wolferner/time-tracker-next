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

export const saveClient = async (dataBaseName, data) => {
  try {
    if (dataBaseName === "node-json-db") {
      const clientData = JSON.parse(data);
      const clientId = clientData.clientId;
      const path = `/userClients/${clientId}`;

      await addJsonData(path, clientData);
    } else {
      console.log(
        "Need to use argument dataBaseName : saveClient( dataBaseName, data )"
      );
    }
  } catch {
    console.log(error);
  }
};

export const deleteClient = async (dataBaseName, dataId) => {
  try {
    if (dataBaseName === "node-json-db") {
      const path = `/userClients/${dataId}`;

      await delJsonData(path);
    } else {
      console.log(
        "Need to use argument dataBaseName : deleteClient( dataBaseName, data )"
      );
    }
  } catch {
    console.log(error);
  }
};

export const getClient = async (dataBaseName) => {
  try {
    if (dataBaseName === "node-json-db") {
      const path = `/userClients`;

      const client = await getJsonData(path);
      return client;
    } else {
      console.log(
        "Need to use argument dataBaseName : getClient( dataBaseName, data )"
      );
    }
  } catch {
    console.log(error);
  }
};
