import InputField from '@/04 items/ui/InputField/InputField';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';

const ProjectTracker = ({
	isShown,
	projectGroups,
	projectTags,
	onGetProjectData,
}) => {
	const [projectData, setProjectData] = useState({
		projects: [],
		projectTags: [],
		projectId: '',
		projectName: '',
		projectAcronym: '',
	});

	useEffect(() => {
		onGetProjectData(projectData);
	}, [projectData]);

	const inputChangeHandler = (field, value) => {
		setProjectData(prev => ({ ...prev, [field]: value }));
	};
	return (
		<div hidden={!isShown}>
			<InputField
				placeholder='Project ID'
				classNames=''
				onBlurCallback={value => inputChangeHandler('projectId', value.title)}
				value={projectData.projectId}
			/>

			<InputField
				placeholder='Project Name'
				classNames=''
				onBlurCallback={value => inputChangeHandler('projectName', value.title)}
				value={projectData.projectName}
			/>

			<InputField
				placeholder='Project Short Name'
				classNames=''
				onBlurCallback={value =>
					inputChangeHandler('projectAcronym', value.title)
				}
				value={projectData.projectAcronym}
			/>

			<Autocomplete
				onChange={(e, allTags) => inputChangeHandler('projects', allTags)}
				value={projectData.projects}
				multiple
				id='tags-filled'
				options={projectGroups}
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
						label='Your Project Groups'
						placeholder=''
					/>
				)}
			/>
			<Autocomplete
				onChange={(e, allTags) => inputChangeHandler('projectTags', allTags)}
				value={projectData.projectTags}
				multiple
				id='tags-filled'
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
