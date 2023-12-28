'use server';

import {
	deleteData,
	getData,
	saveDataArray,
	saveDataIndex,
} from '@/04 items/lib/DataBase/Connector';

export const addNewTag = async tagsData => {
	try {
		await saveDataArray('node-json-db', 'userTags', tagsData);
	} catch (error) {
		console.log(
			`problem v TagsDashboard.data.js  addNewTag!!!! error: ${error}`
		);
	}
};

export const deleteCurrentTag = async TagData => {
	try {
		console.log(TagData);
		await deleteData('node-json-db', 'userTags', TagData);
	} catch (error) {
		console.log(
			`problem v TagsDashboard.data.js, deleteCurrentTag !!!! error: ${error}`
		);
	}
};

export const updateCreatedTag = async TagsData => {
	try {
		await saveDataIndex('node-json-db', 'userTags', TagsData);
	} catch (error) {
		console.log(
			`problem v TagsDashboard.data.js , updateCreatedTag!!!! error: ${error}`
		);
	}
};

export const getAllTags = async () => {
	try {
		const response = await getData('node-json-db', 'userTags');
		return response;
	} catch (error) {
		console.log(
			`problem v TagsDashboard.data.js, getAllTags!!!! error: ${error}`
		);
	}
};
