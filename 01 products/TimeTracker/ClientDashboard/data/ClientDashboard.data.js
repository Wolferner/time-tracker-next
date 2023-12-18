"use server";

import {
  saveData,
  deleteData,
  getData,
} from "@/04 items/lib/DataBase/Connector";

export const addNewClient = async (clientData) => {
  try {
    await saveData("node-json-db", "userClients", clientData);
  } catch (error) {
    console.log(`problemka v ClientDashboard.data.js!!!! error: ${error}`);
  }
};

export const deleteCurrentClient = async (clientId) => {
  try {
    console.log("work deleteCurentClient");
    await deleteData("node-json-db", "userClients", clientId);
  } catch (error) {
    console.log(`problemka v ClientDashboard.data.js!!!! error: ${error}`);
  }
};

export const updateCreatedClient = async (clientData) => {
  try {
    await saveData("node-json-db", "userClients", clientData);
  } catch (error) {
    console.log(`problemka v ClientDashboard.data.js!!!! error: ${error}`);
  }
};

export const getAllClients = async () => {
  try {
    const response = await getData("node-json-db", "userClients");
    return response;
  } catch (error) {
    console.log(
      `problemka v ClientDashboard.data.js, getAllClients !!!! error: ${error}`
    );
  }
};
