import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';

const ProjectTracker = ({ isShown, loadedData, onGetProjectData }) => {
	const [projectData, setProjectData] = useState({
		projectCategories: [],
		projectTags: [],
		projectId: undefined,
		projectName: undefined,
		projectAcronym: undefined,
	});

	const {
		loadedProjectCategories,
		loadedProjectTags,
		loadedProjectId,
		loadedProjectName,
		loadedProjectAcronym,
	} = loadedData;

	useEffect(() => {
		onGetProjectData(projectData);
	}, [projectData]);

	const inputChangeHandler = (field, value) => {
		setProjectData(prev => ({ ...prev, [field]: value }));
	};
	return (
		<div hidden={!isShown}>
			<Autocomplete
				disablePortal
				id='combo-box-demo1'
				options={loadedProjectId}
				sx={{ width: 300 }}
				renderInput={params => <TextField {...params} label='Project ID' />}
				value={projectData.projectId}
				onChange={(e, value) => inputChangeHandler('projectId', value)}
			/>

			<Autocomplete
				disablePortal
				id='combo-box-demo2'
				options={loadedProjectName}
				sx={{ width: 300 }}
				renderInput={params => <TextField {...params} label='Project Name' />}
				value={projectData.projectName}
				onChange={(e, value) => inputChangeHandler('projectName', value)}
			/>

			<Autocomplete
				disablePortal
				id='combo-box-demo3'
				options={loadedProjectAcronym}
				sx={{ width: 300 }}
				renderInput={params => (
					<TextField {...params} label='Project Short Name' />
				)}
				value={projectData.projectAcronym}
				onChange={(e, value) => inputChangeHandler('projectAcronym', value)}
			/>

			<Autocomplete
				onChange={(e, allTags) =>
					inputChangeHandler('projectCategories', allTags)
				}
				value={projectData.projectCategories}
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
				onChange={(e, allTags) => inputChangeHandler('projectTags', allTags)}
				value={projectData.projectTags}
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
