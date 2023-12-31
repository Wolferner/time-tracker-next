import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';

const ProjectTracker = ({ isShown, loadedData, onGetProjectData, value }) => {
	// const [projectData, setProjectData] = useState({
	// 	projectCategories: [],
	// 	projectTags: [],
	// 	projectId: null,
	// 	projectName: null,
	// 	projectAcronym: null,
	// });

	const { loadedProjectCategories, loadedProjectTags, projectInfoArray } =
		loadedData;

	// const loadedProjectId = projectInfoArray.forEach

	// useEffect(() => {
	// 	onGetProjectData(projectData);
	// }, [projectData]);

	const inputChangeHandler = (field, value) => {
		// setProjectData(prev => ({
		// 	...prev,
		// 	[field]: value,
		// }));

		onGetProjectData({ [field]: value });
	};

	// const handleFieldType = (field, value) => {
	// 	const fieldMappings = {
	// 		'projectId': 'projectId',
	//       'projectName': 'projectName',
	//       'projectAcronym': 'projectAcronym',
	// 	}

	// 	if(fieldMappings[field]){
	// 		project = projectInfoArray.find(info => info[fieldMappings[field]] === value);
	// 			setProjectData(prev => ({
	// 				...prev,
	// 				...project,
	// 			}))
	// 	}else if (field === 'projectTags'|| field === 'projectCategories'){
	// 		inputChangeHandler(field, value);
	// 	}else{
	// 		console.log('Incorrect field name in handleFieldType in ProjectTracker');
	// 	}
	// }

	//TODO: Переписать switch на if или что-нибудь оптимальнее
	const handleFieldType = (field, value) => {
		let project;
		switch (field) {
			case 'projectId':
				project = projectInfoArray.find(info => info.projectId === value);
				// setProjectData(prev => ({
				// 	...prev,
				// 	...project,
				// }));

				break;
			case 'projectName':
				project = projectInfoArray.find(info => info.projectName === value);
				// setProjectData(prev => ({
				// 	...prev,
				// 	...project,
				// }));

				break;
			case 'projectAcronym':
				project = projectInfoArray.find(info => info.projectAcronym === value);
				// setProjectData(prev => ({
				// 	...prev,
				// 	...project,
				// }));
				break;
			case 'projectTags':
				inputChangeHandler('projectTags', value);
				break;
			case 'projectCategories':
				inputChangeHandler('projectCategories', value);
				break;
			default:
				console.log('incorect field name in handleFieldType in ProjectTracker');
				break;
		}
		onGetProjectData({ ...project });
	};

	return (
		<div hidden={!isShown}>
			<Autocomplete
				disablePortal
				id='combo-box-demo1'
				options={projectInfoArray.map(data => data.projectId)}
				sx={{ width: 300 }}
				renderInput={params => <TextField {...params} label='Project ID' />}
				value={value.projectId}
				onChange={(e, value) => handleFieldType('projectId', value)}
			/>

			<Autocomplete
				disablePortal
				id='combo-box-demo2'
				options={projectInfoArray.map(data => data.projectName)}
				sx={{ width: 300 }}
				renderInput={params => <TextField {...params} label='Project Name' />}
				value={value.projectName}
				onChange={(e, value) => handleFieldType('projectName', value)}
			/>

			<Autocomplete
				disablePortal
				id='combo-box-demo3'
				options={projectInfoArray.map(data => data.projectAcronym)}
				sx={{ width: 300 }}
				renderInput={params => (
					<TextField {...params} label='Project Short Name' />
				)}
				value={value.projectAcronym}
				onChange={(e, value) => handleFieldType('projectAcronym', value)}
			/>

			<Autocomplete
				onChange={(e, allTags) => handleFieldType('projectCategories', allTags)}
				value={value.projectCategories}
				multiple
				id='tags-filled1'
				options={loadedProjectCategories}
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
						label='Your Project Categories'
						placeholder=''
					/>
				)}
			/>
			<Autocomplete
				onChange={(e, allTags) => handleFieldType('projectTags', allTags)}
				value={value.projectTags}
				multiple
				id='tags-filled2'
				options={loadedProjectTags}
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
						label='Your Project Tags'
						placeholder=''
					/>
				)}
			/>
		</div>
	);
};

export default ProjectTracker;

// const projectId = ['ddddd', 'dddddfff', 'ghththth'];
// const projectName = ['dddddddddd', 'ddddddddfff', 'ghththddddddth'];
// const projectAcronym = ['as', 'gas', 'ik'];

{
	/* <InputField
				placeholder='Project ID'
				classNames=''
				onBlurCallback={value => inputChangeHandler('projectId', value.title)}
				value={projectData.projectId}
			/> */
}

{
	/* <InputField
				
				placeholder='Project Name'
				classNames=''
				onBlurCallback={value => inputChangeHandler('projectName', value.title)}
				value={projectData.projectName}
			/> */
}

{
	/* <InputField
				placeholder='Project Short Name'
				classNames=''
				onBlurCallback={value =>
					inputChangeHandler('projectAcronym', value.title)
				}
				value={projectData.projectAcronym}
			/> */
}
