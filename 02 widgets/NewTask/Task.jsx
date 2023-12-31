'use client';

// import styles from '@/02 widgets/Task/Task.module.css';
import InputField from '@/04 items/ui/InputField/InputField';
import MediaButtons from '@/04 items/ui/MediaButtons/MediaButtons';
import Time from '@/04 items/ui/Time/Time';
import Toggler from '@/04 items/ui/Toggler/Toggler';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useState } from 'react';
import { addNewTask } from './data/Task.data';
import styles from './ui/Task.module.css';
import TaskTabs from './ui/TaskTabs/TaskTabs';

const Task = props => {
	console.log('Task Render');

	const initialDataState = () => ({
		id: dayjs(),
		title: '',
		timeStart: dayjs(),
		timeEnd: null,
		duration: 0,
		type: '',

		description: '',
		taskCategories: [],
		taskTags: [],
		projectCategories: [],
		projectTags: [],
		projectId: null,
		projectName: null,
		projectAcronym: null,
		incidentId: '',
		incidentTitle: '',
		incidentDescription: '',
		businessFirstName: null,
		businessLastName: null,
		businessEmail: null,
		supportFirstName: null,
		supportLastName: null,
		supportEmail: null,
		rfcId: '',
		crqId: '',
		charmId: '',
	});

	const [taskData, setTaskData] = useState(initialDataState);
	const [isShownTabs, setIsShownTabs] = useState(true);

	// const extractProjectsData = async () =>{
	// 	try{
	// 		const userProjects = await getTaskData('userProjests')
	// 		const projectArray = Object.keys(userProjects).map((key)=>{
	// 			const project = userProjects[key]
	// 			return{
	// 				projectId: project.projectId,
	// 				projectName: project.projectName,
	// 				projectAcronym: project.projectAcronym,
	// 			}
	// 		})
	// 		return projectArray
	// 	}catch (error){
	// 		console.log(`problem in extractProjectsData in Task.jsx error: ${error}`)
	// 	}
	// }

	// const extractClientsData = async () =>{
	// 	try{
	// 		const userClients = await getTaskData('userClients')
	// 		const clientArray = Object.keys(userClients).map((key)=>{
	// 			const client = userClients[key]
	// 			return{
	// 				clientRegNumber: client.clientRegNumber,
	// 				clientName: client.clientName,
	// 				clientAcronym: client.clientAcronym,
	// 			}
	// 		})
	// 		return clientArray
	// 	}catch (error){
	// 		console.log(`problem in extractClientsData in Task.jsx error: ${error}`)
	// 	}
	// }

	// const extractTagsData =

	// const getAutocompleteData = async () => {
	// 	let autocompleteData = {};
	// 	const projects = await extractProjectsData()
	// 	const clients = await extractClientsData()
	// 	const tags = await extractTagsData()
	// 	const categories = await extractCategoriesData()
	// 	const businessInfo = await extractBusinessInfoData()
	// 	const supportInfo = await extractSupportInfoData()
	// };

	// useEffect(() => {
	// 	getAutocompleteData()
	// }, []);

	const dataSendHandler = async value => {
		try {
			if (value.type === 'PLAY') {
				// console.log(addNewTask);
				await addNewTask(JSON.stringify(taskData));

				console.log(taskData);
				setTaskData(initialDataState);
			}
		} catch (error) {
			console.log(`Problem with posting Task  error: ${error}`);
		}
	};

	const getDataHandler = obj => {
		setTaskData(prev => ({ ...prev, ...obj }));
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<div className={`${styles.Task}`}>
				<div className={`${styles.card} `}>
					<InputField
						placeholder='Task Title'
						classNames=''
						onBlurCallback={getDataHandler}
						value={taskData.title}
					/>

					<Time onDateChange={getDataHandler} />
					<MediaButtons
						onPressButton={dataSendHandler}
						place=''
						classNames=''
					/>
					<Toggler getTogglerState={() => setIsShownTabs(prev => !prev)} />
					{isShownTabs && (
						<TaskTabs
							onGetTabData={getDataHandler}
							value={taskData}
							loadedData={allAutocompleteData}
						/>
					)}
					<div className={``}>{props.children}</div>
				</div>
			</div>
		</LocalizationProvider>
	);
};

export default Task;

const allAutocompleteData = {
	loadedTaskData: {
		taskTags: ['tag1', 'tag2', 'tag3', 'mmmtag4', 'uuutag5'],
		taskCategories: ['cat1', 'cat2', 'cat3', 'ssscat4'],
	},
	loadedProjectData: {
		projectInfoArray: [
			{ projectId: 'aa3', projectName: 'Oreon', projectAcronym: 'OR' },
			{ projectId: 'azz3', projectName: 'Olron', projectAcronym: 'ON' },
			{ projectId: 'afr5', projectName: 'Ofton', projectAcronym: 'OfN' },
		],
		loadedProjectCategories: ['project1', 'project2'],
		loadedProjectTags: ['pTag1', 'pTag2'],
	},
	loadedIncidentData: {
		businessInfoArray: [
			{
				businessFirstName: 'sdas',
				businessLastName: 'fffff',
				businessEmail: 'asdas@asds',
			},
			{
				businessFirstName: 'ffff',
				businessLastName: 'fffffff',
				businessEmail: 'fff@ff',
			},
			{
				businessFirstName: 'aa',
				businessLastName: 'aaaaaaaaaa',
				businessEmail: 'aaa@aaa',
			},
			{
				businessFirstName: 'ssss',
				businessLastName: 'sssssssssss',
				businessEmail: 'ss@ssss',
			},
		],
		supportInfoArray: [
			{
				supportFirstName: 'sdas',
				supportLastName: 'fffff',
				supportEmail: 'asdas@asds',
			},
			{
				supportFirstName: 'ffff',
				supportLastName: 'fffffff',
				supportEmail: 'fff@ff',
			},
			{
				supportFirstName: 'aa',
				supportLastName: 'aaaaaaaaaa',
				supportEmail: 'aaa@aaa',
			},
			{
				supportFirstName: 'ssss',
				supportLastName: 'sssssssssss',
				supportEmail: 'ss@ssss',
			},
		],
	},
};
