'use server';

import {
	addJsonData,
	delJsonData,
	getJsonData,
} from '@/04 items/lib/DataBase/Connectors/node-json-db';
import dayjs from 'dayjs';

export const saveTask = async (dataBaseName, data) => {
	try {
		if (dataBaseName === 'node-json-db') {
			const task = JSON.parse(data);
			const date = dayjs(task.id);
			const year = date.format('YYYY');
			const month = date.format('MM');
			const day = date.format('DD');

			const path = `/userTasks/${year}/${month}/${day}`;

			let currentTasks = [];
			// console.log(data);
			// console.log(path);
			try {
				currentTasks = await getJsonData(path);
				// console.log(currentTasks);
			} catch (error) {
				console.log(`problem to get data in func  saveData  ${error}`);
				currentTasks = [];
			}
			// console.log(currentTasks);

			currentTasks.push(task);

			await addJsonData(path, currentTasks);
		} else {
			console.log(
				'Need to use argument dataBaseName : saveData( dataBaseName, data )'
			);
		}
	} catch (error) {
		console.log(error);
	}
};

export const saveData = async (dataBaseName, where, data) => {
	try {
		if (dataBaseName === 'node-json-db') {
			const parsedData = JSON.parse(data);
			let id;
			let path;
			switch (where) {
				case 'userClients':
					id = parsedData.companyRegId;
					path = `/${where}/${id}`;
					break;
				case 'userProjects':
					id = parsedData.projectId;
					path = `/${where}/${id}`;
					break;
			}

			await addJsonData(path, parsedData);
		} else {
			console.log(
				'Need to use argument dataBaseName : saveClient( dataBaseName, data )'
			);
		}
	} catch {
		console.log(error);
	}
};

export const deleteData = async (dataBaseName, where, dataId) => {
	try {
		if (dataBaseName === 'node-json-db') {
			let path;

			if (where === 'userCategories' || where === 'userTags') {
				const data = JSON.parse(dataId);
				const filter = data.filter;
				const index = data.index;
				path = `/${where}/${filter}[${index}]`;
			} else {
				path = `/${where}/${dataId}`;
			}

			await delJsonData(path);
		} else {
			console.log(
				'Need to use argument dataBaseName : deleteData( dataBaseName, where ,data )'
			);
		}
	} catch {
		console.log(error);
	}
};

export const getData = async (dataBaseName, where) => {
	try {
		if (dataBaseName === 'node-json-db') {
			const path = `/${where}`;

			const response = await getJsonData(path);
			return response;
		} else {
			console.log(
				'Need to use argument dataBaseName : getData( dataBaseName, where )'
			);
		}
	} catch (error) {
		console.log(
			`Problem c connector,  getData(dataBaseName, where) error:${error}`
		);
	}
};

export const saveDataArray = async (dataBaseName, where, data) => {
	try {
		if (dataBaseName === 'node-json-db') {
			const parsedData = JSON.parse(data);
			const valueType = parsedData.type;
			const newValue = parsedData.value;

			const path = `/${where}/${valueType}`;

			let currentValues = [];
			try {
				currentValues = await getJsonData(path);
			} catch (error) {
				console.log(`problem to get data in func  saveDataArray  ${error}`);
				currentValues = [];
			}
			currentValues.push(newValue);
			await addJsonData(path, currentValues);
		} else {
			console.log(
				'Need to use argument dataBaseName : saveDataArray( dataBaseName, where, data )'
			);
		}
	} catch (error) {
		console.log(error);
	}
};

export const saveDataIndex = async (dataBaseName, where, data) => {
	try {
		if (dataBaseName === 'node-json-db') {
			const parsedData = JSON.parse(data);
			const valueType = parsedData.filter;
			const index = parsedData.index;
			const currentValue = parsedData.value;

			const path = `/${where}/${valueType}[${index}]`;

			await addJsonData(path, currentValue);
		} else {
			console.log(
				'Need to use argument dataBaseName : saveDataArray( dataBaseName, where, data )'
			);
		}
	} catch (error) {
		console.log(error);
	}
};

export const getAutocompleteData = async (dataBaseName, where) => {
	if (dataBaseName === 'node-json-db') {
		try {
			const path = `/${where}`;
			if (where === 'userProjects' || where === 'userClients') {
				const userValues = await getJsonData(path);
				const parsedUserValues = await JSON.parse(userValues);
				const valuesArray = Object.keys(parsedUserValues).map(key => {
					const value = parsedUserValues[key];
					if (where === 'userProjects') {
						return JSON.stringify({
							projectId: value.projectId,
							projectName: value.projectName,
							projectAcronym: value.projectAcronym,
						});
					} else if (where === 'userClients') {
						return JSON.stringify({
							clientRegNumber: value.clientRegNumber,
							clientLongName: value.clientLongName,
							clientShortName: value.clientShortName,
						});
					}
					return JSON.stringify(valuesArray);
				});
			} else {
				const userData = await getJsonData(path);
				return userData;
			}

			// if (where === 'userProjects') {
			// 	const userProjects = await getJsonData(path);
			// 	const parsedUserProject = await JSON.parse(userProjects);
			// 	const projectArray = Object.keys(parsedUserProject).map(key => {
			// 		const project = parsedUserProject[key];
			// 		return JSON.stringify({
			// 			projectId: project.projectId,
			// 			projectName: project.projectName,
			// 			projectAcronym: project.projectAcronym,
			// 		});
			// 	});
			// 	return JSON.stringify(projectArray);
			// }
			// if (where === 'userClients') {
			// 	const userClients = await getJsonData(path);
			// 	const clientsArray = Object.keys(userClients).map(key => {
			// 		const client = userClients[key];
			// 		return {
			// 			clientRegNumber: client.clientRegNumber,
			// 			clientLongName: client.clientLongName,
			// 			clientShortName: client.clientShortName,
			// 		};
			// 	});
			// 	return clientsArray;
			// } else {
			// 	const userData = await getJsonData(path);
			// 	return userData;
			// }
		} catch (error) {
			console.log(`problemka v Task.data.js getTaskData!!!! error: ${error}`);
		}
	} else {
		console.log(
			'Need to use argument dataBaseName : extractAutocompleteData( dataBaseName, where )'
		);
	}
};
