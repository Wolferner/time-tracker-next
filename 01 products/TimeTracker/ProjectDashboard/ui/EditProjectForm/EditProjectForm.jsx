'use client';

import Modal from '@/04 items/ui/Modal/Modal';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { updateCreatedProject } from '../../data/ProjectDashboard.data';
import styles from './EditProjectForm.module.css';

const EditClientForm = ({ data, onHideWindow }) => {
	// console.log(` editClientComponent ${data}`);
	const initialState = {
		...data,
	};

	const [changedProjectData, setChangedProjectData] = useState(initialState);

	const changeDataHandler = (value, field) => {
		setChangedProjectData(prev => ({ ...prev, [field]: value }));
	};

	const sendChangedDataHandler = e => {
		e.preventDefault();
		// console.log("click");
		updateCreatedProject(JSON.stringify(changedProjectData));
		onHideWindow();
	};

	return (
		<Modal onHideForm={onHideWindow}>
			<form onSubmit={sendChangedDataHandler}>
				<div className={styles.control}>
					<label htmlFor='projectName'>Name</label>
					<input
						onChange={e => changeDataHandler(e.target.value, 'projectName')}
						value={changedProjectData.projectName}
						id='projectName'
						type='text'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>

				<div className={styles.control}>
					<label htmlFor='projectAcronym'>Acronym</label>
					<input
						onChange={e => changeDataHandler(e.target.value, 'projectAcronym')}
						value={changedProjectData.projectAcronym}
						id='projectAcronym'
						type='text'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>

				<div className={styles.control}>
					<label htmlFor='planned_hours'>Planned Hours</label>
					<input
						onChange={e => changeDataHandler(e.target.value, 'planned_hours')}
						value={changedProjectData.planned_hours}
						id='planned_hours'
						type='number'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>
				<div className={styles.control}>
					<label htmlFor='clients'>Clients</label>
					<input
						onChange={e => changeDataHandler(e.target.value, 'clients')}
						value={changedProjectData.clients}
						id='clients'
						type='text'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>

				<div className={styles.control}>
					<label htmlFor='status'>Status</label>
					<input
						onChange={e => changeDataHandler(e.target.value, 'status')}
						value={changedProjectData.status}
						id='status'
						type='text'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>

				<div className={styles.control}>
					<label htmlFor='priority'>Priority</label>
					<input
						onChange={e => changeDataHandler(e.target.value, 'priority')}
						value={changedProjectData.priority}
						id='priority'
						type='text'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>

				<div className={styles.actions}>
					<Button variant='contained' type='submit'>
						Submit
					</Button>
					<Button onClick={onHideWindow} variant='contained' type='button'>
						Cancle
					</Button>
					{/* <button className={styles.submit}>podtverditj</button> */}
					{/* <button type="button" onClick={onHideWindow}>
            otmenitj
          </button> */}
				</div>
			</form>
		</Modal>
	);
};

export default EditClientForm;
