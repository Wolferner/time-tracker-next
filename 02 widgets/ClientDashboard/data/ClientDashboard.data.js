"use server";

import {
  saveClient,
  deleteClient,
  getClient,
} from "@/04 items/lib/DataBase/Connector";

export const addNewClient = async (clientData) => {
  try {
    await saveClient("node-json-db", clientData);
  } catch (error) {
    console.log(`problemka v ClientDashboard.data.js!!!! error: ${error}`);
  }
};

export const deleteCurrentClient = async (clientId) => {
  try {
    console.log("work deleteCurentClient");
    await deleteClient("node-json-db", clientId);
  } catch (error) {
    console.log(`problemka v ClientDashboard.data.js!!!! error: ${error}`);
  }
};

export const updateCreatedClient = async (clientData) => {
  try {
    await saveClient("node-json-db", clientData);
  } catch (error) {
    console.log(`problemka v ClientDashboard.data.js!!!! error: ${error}`);
  }
};

export const getAllClients = async () => {
  try {
    const response = await getClient("node-json-db");
    return response;
  } catch (error) {
    console.log(`problemka v ClientDashboard.data.js!!!! error: ${error}`);
  }
};
