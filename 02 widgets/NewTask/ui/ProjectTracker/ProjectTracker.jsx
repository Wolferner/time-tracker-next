import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';

const ProjectTracker = ({ isShown, loadedData, onGetProjectData, value }) => {
	const { projectInfoArray, allTags, allCategories } = loadedData;
	const { projectTags } = allTags;
	const { projectCategories } = allCategories;

	const inputChangeHandler = (field, value) => {
		onGetProjectData({ [field]: value });
	};

	//TODO: Переписать switch на if или что-нибудь оптимальнее
	const handleFieldType = (field, value) => {
		let project;
		switch (field) {
			case 'projectId':
				project = projectInfoArray.find(info => info.projectId === value);

				break;
			case 'projectName':
				project = projectInfoArray.find(info => info.projectName === value);

				break;
			case 'projectAcronym':
				project = projectInfoArray.find(info => info.projectAcronym === value);

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
				options={projectCategories}
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
				options={projectTags}
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
