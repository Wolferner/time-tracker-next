"use server";

import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig";

const userDb = new JsonDB(new Config(`UserDB-1`, true, false, "/"));

export const getJsonData = async (path) => {
  const response = await userDb.getData(path);
  return response;
};

export const addJsonData = async (path, data) => {
  try {
    await userDb.push(path, data);
  } catch (error) {
    console.log(`oshibka v addJsonData -  node-json-db.js!!! error: ${error}`);
  }
};
