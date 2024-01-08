'use client';

// import styles from "./ProjectDashboard.module.css";
import useModals from '@/04 items/lib/hooks/use-modals';
import InputField from '@/04 items/ui/InputField/InputField';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import {
	deleteCurrentProject,
	getAllProject,
} from './data/ProjectDashboard.data';
import CreateProjectForm from './ui/CreateProjectForm/CreateProjectForm';
import EditProjectForm from './ui/EditProjectForm/EditProjectForm';

const ProjectDashboard = () => {
	const [searchInput, setSearchInput] = useState('');
	const [projectTable, setProjectTable] = useState([]);

	const {
		isShownForm,
		isShowEditingWindow,
		currentValue,
		valueDeleted,
		editValueHandler,
		hideFormHandler,
		deleteValueHandler,
	} = useModals(deleteCurrentProject);

	const fetchProjects = async () => {
		try {
			const response = await getAllProject();
			const dataArray = Object.keys(response).map(key => response[key]);
			setProjectTable(dataArray);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchProjects();
	}, [isShownForm, isShowEditingWindow, valueDeleted]);

	const searchInputHandler = value => {
		setSearchInput(value);
	};

	return (
		<div className='row'>
			{isShownForm && <CreateProjectForm onHideForm={hideFormHandler} />}
			{isShowEditingWindow && (
				<EditProjectForm data={currentValue} onHideWindow={editValueHandler} />
			)}
			<div className='container'>
				<div className='col s12'>
					<InputField
						placeholder={'Search'}
						value={searchInput}
						onBlurCallback={searchInputHandler}
					/>
					<Button onClick={hideFormHandler} variant='contained'>
						Create New
					</Button>
				</div>
				<div className='col s12'>
					<table>
						<thead>
							<tr>
								<th>Edit</th>
								<th>Project Id</th>
								<th>Name</th>
								<th>Acronym</th>
								<th>Planned Hours</th>
								<th>Clients</th>
								<th>Status</th>
								<th>Priority</th>
								<th>Del</th>
							</tr>
						</thead>
						<tbody>
							{projectTable.map((project, index) => (
								<tr key={index}>
									<td>
										<IconButton
											onClick={() => editValueHandler(project)}
											aria-label='edit'
											size='small'
										>
											<EditIcon fontSize='inherit' />
										</IconButton>
									</td>
									<td>{project.projectId}</td>
									<td>{project.projectName}</td>
									<td>{project.projectAcronym}</td>
									<td>{project.planned_hours}</td>
									<td>{project.clients}</td>
									<td>{project.status}</td>
									<td>{project.priority}</td>
									<td>
										<IconButton
											onClick={() => deleteValueHandler(project.projectId)}
											aria-label='delete'
											size='small'
										>
											<DeleteIcon fontSize='inherit' />
										</IconButton>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ProjectDashboard;
