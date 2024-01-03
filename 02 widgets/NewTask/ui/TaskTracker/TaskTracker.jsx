import TextDescription from '@/04 items/ui/TextDescriprtion/TextDescription';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import style from './TaskTracker.module.css';

const TaskTracker = ({ isShown, onGetTaskData, taskTags, taskCategories }) => {
	const [taskData, setTaskData] = useState({
		description: '',
		taskTags: [],
		taskCategories: [],
	});

	useEffect(() => {
		onGetTaskData(taskData);
	}, [taskData]);

	const inputChangeHandler = (field, value) => {
		setTaskData(prev => ({ ...prev, [field]: value }));
		// console.log(taskData);
	};

	return (
		<div hidden={!isShown} className={style.TaskTracker}>
			<TextDescription
				placeholder='Task Description'
				classNames=''
				onBlurCallback={fieldsValue =>
					inputChangeHandler('description', fieldsValue.description)
				}
				value={taskData.description}
			/>
			<Autocomplete
				onChange={(e, allTags) => inputChangeHandler('taskTags', allTags)}
				value={taskData.taskTags}
				multiple
				id='tags-filled'
				options={taskTags}
				defaultValue={[]}
				freeSolo
				renderTags={(value, getTagProps) =>
					value.map((option, index) => {
						const tagProps = getTagProps({ index });
						const { key, ...otherTagProps } = tagProps;
						return (
							<Chip
								key={key}
								variant='outlined'
								label={option}
								{...otherTagProps}
							/>
						);
					})
				}
				renderInput={params => (
					<TextField
						{...params}
						variant='filled'
						label='Your Task Tags'
						placeholder=''
					/>
				)}
			/>

			<Autocomplete
				onChange={(e, allCategories) =>
					inputChangeHandler('taskCategories', allCategories)
				}
				value={taskData.taskCategories}
				multiple
				id='tags-filled-cat'
				options={taskCategories}
				defaultValue={[]}
				freeSolo
				renderTags={(value, getTagProps) =>
					value.map((option, index) => {
						const tagProps = getTagProps({ index });
						const { key, ...otherTagProps } = tagProps;
						return (
							<Chip
								key={key}
								variant='outlined'
								label={option}
								{...otherTagProps}
							/>
						);
					})
				}
				renderInput={params => (
					<TextField
						{...params}
						variant='filled'
						label='Your Task Categories'
						placeholder=''
					/>
				)}
			/>
		</div>
	);
};

export default TaskTracker;
