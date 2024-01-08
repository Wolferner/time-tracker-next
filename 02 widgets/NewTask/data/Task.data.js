'use server';

import {
	getAutocompleteData,
	saveTask,
} from '@/04 items/lib/DataBase/Connector';

export const addNewTask = async taskData => {
	try {
		await saveTask('node-json-db', taskData);
	} catch (error) {
		console.log(`problemka v Task.data.js addNewTask!!!! error: ${error}`);
	}
};

export const extractAutocompleteData = async where => {
	try {
		await getAutocompleteData('node-json-db', where);
	} catch (error) {
		console.log(
			`problemka v Task.data.js extractAutocompleteData!!!! error: ${error}`
		);
	}
};
