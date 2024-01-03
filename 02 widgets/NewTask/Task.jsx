'use client';

// import styles from '@/02 widgets/Task/Task.module.css';
import MediaButtons from '@/04 items/ui/MediaButtons/MediaButtons';
import TextField from '@/04 items/ui/TextField/TextField';
import Time from '@/04 items/ui/Time/Time';
import Toggler from '@/04 items/ui/Toggler/Toggler';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useState } from 'react';
import styles from './ui/Task.module.css';
import TaskTabs from './ui/TaskTabs/TaskTabs';

const Task = props => {
	console.log('Task Render');

	const initialDataState = () => ({
		id: dayjs(),
		title: '',
		description: '',
		timeStart: dayjs(),
		timeEnd: null,
		duration: 0,
		type: '',

		clientId: '',
		inc: '',

		taskTags: [],
		projectTags: [],
		taskCategories: [],
		projectCategories: [],
	});

	const [taskData, setTaskData] = useState(initialDataState);
	const [isShownTabs, setIsShownTabs] = useState(true);

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

	const isShownTabsHandler = bool => {
		setIsShownTabs(bool);
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<div className={`${styles.Task}`}>
				<div className={`${styles.card} `}>
					<TextField
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
					<Toggler getTogglerState={isShownTabsHandler} />
					{isShownTabs && <TaskTabs onBlurCallback={getDataHandler} />}
					<div className={``}>{props.children}</div>
				</div>
			</div>
		</LocalizationProvider>
	);
};

export default Task;
