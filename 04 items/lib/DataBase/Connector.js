const {
  getJsonData,
  addJsonData,
  delJsonData,
} = require("@/04 items/lib/DataBase/node-json-db");

const loadData = (dataBaseName, dataBase) => {
  try {
    if (dataBaseName === "node-json-db") {
      return getJsonData(dataBase);
    } else {
      console.log(
        "Need to use argument dataBaseName : loadData( dataBaseName, dataBase )"
      );
    }
  } catch (error) {
    console.log(error);
  }
};

const saveData = (dataBaseName, dataBase, data) => {
  try {
    if (dataBaseName === "node-json-db") {
      addJsonData(dataBase, data);
    } else {
      console.log(
        "Need to use argument dataBaseName : saveData( dataBaseName, dataBase, data )"
      );
    }
  } catch (error) {
    console.log(error);
  }
};

const updateData = (dataBaseName, dataBase, data) => {
  try {
    if (dataBaseName === "node-json-db") {
      addJsonData(dataBase, data);
    } else {
      console.log(
        "Need to use argument dataBaseName : updateData( dataBaseName, dataBase, data )"
      );
    }
  } catch (error) {
    console.log(error);
  }
};

const delData = (dataBaseName, dataBase) => {
  try {
    if (dataBaseName === "node-json-db") {
      delJsonData(dataBase);
    } else {
      console.log(
        "Need to use argument dataBaseName : delData( dataBaseName, dataBase )"
      );
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { loadData, saveData, delData, updateData };
