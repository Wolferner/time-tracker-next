'use server';

import { getData, saveTask } from '@/04 items/lib/DataBase/Connector';

export const addNewTask = async taskData => {
	try {
		await saveTask('node-json-db', taskData);
	} catch (error) {
		console.log(`problemka v Task.data.js addNewTask!!!! error: ${error}`);
	}
};

export const getTaskData = async (dataBaseName, where) => {
	try {
		await getData(dataBaseName, where);
	} catch (error) {
		console.log(`problemka v Task.data.js getTaskData!!!! error: ${error}`);
	}
};
