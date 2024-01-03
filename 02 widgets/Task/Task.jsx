'use client';

import styles from '@/02 widgets/Task/Task.module.css';
import InputField from '@/04 items/ui/InputField/InputField';
import MediaButtons from '@/04 items/ui/MediaButtons/MediaButtons';
import TextDescription from '@/04 items/ui/TextDescriprtion/TextDescription';
import Time from '@/04 items/ui/Time/Time';
import dayjs from 'dayjs';
import { useState } from 'react';
import { dataSendHandler, getDataHandler } from './logic/Task.logic';
import InfoBlock from './ui/InfoBlock/InfoBlock';

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
		additionalInfo: {
			customer: '',
			project: '',
			inc: '',
			tags: [],
		},
	});

	const [taskData, setTaskData] = useState(initialDataState);

	const handleDataSend = dataSendHandler(
		taskData,
		setTaskData,
		initialDataState
	);
	const handleDataGet = getDataHandler(taskData, setTaskData);

	return (
		<div className={`${styles.Task} ${props.className}  row`}>
			<div
				className={`${styles.card} ${props.className}  card blue-grey darken-1`}
			>
				<InputField
					placeholder=''
					classNames=''
					onBlurCallback={fieldsValue => handleDataGet('title', fieldsValue)}
					value={taskData.title}
				/>
				<TextDescription
					placeholder=''
					classNames=''
					onBlurCallback={fieldsValue =>
						handleDataGet('description', fieldsValue)
					}
					value={taskData.description}
				/>
				<Time
					onDateChange={fieldsValue => handleDataGet('timeStart', fieldsValue)}
				/>
				<MediaButtons onPressButton={handleDataSend} place='' classNames='' />
				<InfoBlock
					onBlurCallback={fieldsValue =>
						handleDataGet('additionalInfo', fieldsValue)
					}
					value={taskData.additionalInfo}
				/>
				<div className={`card-action`}>{props.children}</div>
			</div>
		</div>
	);
};

export default Task;
