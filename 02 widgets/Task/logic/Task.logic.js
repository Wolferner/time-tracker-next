import { addNewTask } from "../database/Task.data";

export const dataSendHandler =
  (taskData, setTaskData, initialDataState) => async (value) => {
    try {
      if (value.type === "PLAY") {
        await addNewTask(JSON.stringify(taskData));

        console.log(taskData);
        setTaskData(initialDataState);
      }
    } catch (error) {
      console.log(`Problem with posting Task  error: ${error}`);
    }
  };

export const getDataHandler =
  (taskData, setTaskData) => (field, fieldsValue) => {
    if (field === "additionalInfo") {
      setTaskData((prev) => ({
        ...prev,
        additionalInfo: {
          ...prev.additionalInfo,
          ...fieldsValue,
        },
      }));
    } else {
      setTaskData((prev) => ({
        ...prev,
        ...fieldsValue,
      }));
    }
  };
