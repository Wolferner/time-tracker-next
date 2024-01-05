import TextDescription from '@/04 items/ui/TextDescriprtion/TextDescription';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import style from './TaskTracker.module.css';

const TaskTracker = ({ isShown, onGetTaskData, loadedData, value }) => {
	// const [taskData, setTaskData] = useState({
	// 	description: '',
	// 	taskTags: [],
	// 	taskCategories: [],
	// });

	const { taskTags, taskCategories } = loadedData;

	// useEffect(() => {
	// 	if (value !== taskData) {
	// 		setTaskData(value);
	// 	}
	// }, [value]);

	const inputChangeHandler = (field, value) => {
		// setTaskData(prev => ({ ...prev, [field]: value }));
		onGetTaskData({ [field]: value });
	};

	return (
		<div hidden={!isShown} className={style.TaskTracker}>
			<TextDescription
				placeholder='Task Description'
				classNames=''
				onBlurCallback={fieldsValue =>
					inputChangeHandler('description', fieldsValue.description)
				}
				value={value.description}
			/>
			<Autocomplete
				onChange={(e, allTags) => inputChangeHandler('taskTags', allTags)}
				value={value.taskTags}
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
				value={value.taskCategories}
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
