'use client';

import Modal from '@/04 items/ui/Modal/Modal';
import { useState } from 'react';
import { addNewProject } from '../../data/ProjectDashboard.data';
import styles from './CreateProjectForm.module.css';

const initialState = {
	projectId: '',
	projectName: '',
	projectAcronym: '',
	planned_hours: '',
	clients: '',
	status: '',
	priority: '',
};

const CreateClientForm = props => {
	const [formData, setFormData] = useState(initialState);

	const changeFormDataHandler = (value, field) => {
		setFormData(prev => {
			return {
				...prev,
				[field]: value,
			};
		});
	};

	const sendFormHandler = async e => {
		e.preventDefault();
		try {
			await addNewProject(JSON.stringify(formData));
			// console.log(formData);
			setFormData(initialState);
			props.onHideForm();
		} catch (error) {
			console.log(`Problem with posting NewProject  error: ${error}`);
		}
	};
	return (
		<Modal onHideForm={props.onHideForm}>
			<form onSubmit={sendFormHandler}>
				<div className={styles.control}>
					<label htmlFor='projectId'>Project Id</label>
					<input
						onChange={e => changeFormDataHandler(e.target.value, 'projectId')}
						value={formData.projectId}
						id='projectId'
						type='text'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>

				<div className={styles.control}>
					<label htmlFor='projectName'>Name</label>
					<input
						onChange={e => changeFormDataHandler(e.target.value, 'projectName')}
						value={formData.projectName}
						id='projectName'
						type='text'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>

				<div className={styles.control}>
					<label htmlFor='projectAcronym'>Acronym</label>
					<input
						onChange={e =>
							changeFormDataHandler(e.target.value, 'projectAcronym')
						}
						value={formData.projectAcronym}
						id='projectAcronym'
						type='text'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>

				<div className={styles.control}>
					<label htmlFor='planned_hours'>Planned Hours</label>
					<input
						onChange={e =>
							changeFormDataHandler(e.target.value, 'planned_hours')
						}
						value={formData.planned_hours}
						id='planned_hours'
						type='number'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>

				<div className={styles.control}>
					<label htmlFor='clients'>Clients</label>
					<input
						onChange={e => changeFormDataHandler(e.target.value, 'clients')}
						value={formData.clients}
						id='clients'
						type='text'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>

				<div className={styles.control}>
					<label htmlFor='status'>Status</label>
					<input
						onChange={e => changeFormDataHandler(e.target.value, 'status')}
						value={formData.status}
						id='status'
						type='text'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>

				<div className={styles.control}>
					<label htmlFor='priority'>Priority</label>
					<input
						onChange={e => changeFormDataHandler(e.target.value, 'priority')}
						value={formData.priority}
						id='priority'
						type='text'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>

				<div className={styles.actions}>
					<button className={styles.submit}>podtverditj</button>
					<button type='button' onClick={props.onHideForm}>
						otmenitj
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default CreateClientForm;
