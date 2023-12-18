"use server";

import {
  saveData,
  deleteData,
  getData,
} from "@/04 items/lib/DataBase/Connector";

export const addNewProject = async (projectData) => {
  try {
    await saveData("node-json-db", "userProjects", projectData);
  } catch (error) {
    console.log(`problemka v ClientDashboard.data.js!!!! error: ${error}`);
  }
};

export const deleteCurrentProject = async (projectId) => {
  try {
    console.log("work deleteCurentProject");
    await deleteData("node-json-db", "userProjects", projectId);
  } catch (error) {
    console.log(`problemka v ClientDashboard.data.js!!!! error: ${error}`);
  }
};

export const updateCreatedProject = async (projectData) => {
  try {
    await saveData("node-json-db", "userProjects", projectData);
  } catch (error) {
    console.log(
      `problemka v ProjectDashboard.data.js , updateCreatedProject!!!! error: ${error}`
    );
  }
};

export const getAllProject = async () => {
  try {
    const response = await getData("node-json-db", "userProjects");
    return response;
  } catch (error) {
    console.log(
      `problemka v ProjectDashboard.data.js, getAllProjects!!!! error: ${error}`
    );
  }
};
