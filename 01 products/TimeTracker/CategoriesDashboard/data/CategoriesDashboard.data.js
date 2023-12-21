"use server";

import {
  saveDataArray,
  deleteData,
  getData,
  saveDataIndex,
} from "@/04 items/lib/DataBase/Connector";

export const addNewCategory = async (categoriesData) => {
  try {
    await saveDataArray("node-json-db", "userCategories", categoriesData);
  } catch (error) {
    console.log(
      `problemka v CategoriesDashboard.data.js  addNewCategorie!!!! error: ${error}`
    );
  }
};

export const deleteCurrentCategory = async (categoryData) => {
  try {
    await deleteData("node-json-db", "userCategories", categoryData);
  } catch (error) {
    console.log(
      `problemka v CategoriesDashboard.data.js, deleteCurrentCategorie !!!! error: ${error}`
    );
  }
};

export const updateCreatedCategory = async (categoriesData) => {
  try {
    await saveDataIndex("node-json-db", "userCategories", categoriesData);
  } catch (error) {
    console.log(
      `problemka v CategoriesDashboard.data.js , updateCreatedCategorie!!!! error: ${error}`
    );
  }
};

export const getAllCategories = async () => {
  try {
    const response = await getData("node-json-db", "userCategories");
    return response;
  } catch (error) {
    console.log(
      `problemka v CategoriesDashboard.data.js, getAllCategories!!!! error: ${error}`
    );
  }
};
