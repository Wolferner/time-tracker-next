'use client';

import Modal from '@/04 items/ui/Modal/Modal';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { updateCreatedClient } from '../../data/ClientDashboard.data';
import styles from './EditClientForm.module.css';

const EditClientForm = ({ data, onHideWindow }) => {
	// console.log(` editClientComponent ${data}`);
	const initialState = {
		...data,
	};

	const [changedClientData, setChangedClientData] = useState(initialState);

	const changeDataHandler = (value, field) => {
		setChangedClientData(prev => ({ ...prev, [field]: value }));
	};

	const sendChangedDataHandler = e => {
		e.preventDefault();
		// console.log("click");
		updateCreatedClient(JSON.stringify(changedClientData));
		onHideWindow();
	};

	return (
		<Modal onHideForm={onHideWindow}>
			<form onSubmit={sendChangedDataHandler}>
				{/* <div className={styles.control}>
					<label htmlFor='companyRegId'>Company Reg. Id</label>
					<input
						onChange={e => changeDataHandler(e.target.value, 'companyRegId')}
						value={changedClientData.companyRegId}
						id='companyRegId'
						type='text'
					></input>
				</div> */}

				<div className={styles.control}>
					<label htmlFor='companyName'>Company Name</label>
					<input
						onChange={e => changeDataHandler(e.target.value, 'companyName')}
						value={changedClientData.companyName}
						id='companyName'
						type='text'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>

				<div className={styles.control}>
					<label htmlFor='clientAcronym'>Acronym</label>
					<input
						onChange={e => changeDataHandler(e.target.value, 'clientAcronym')}
						value={changedClientData.clientAcronym}
						id='clientAcronym'
						type='text'
					></input>
				</div>

				<div className={styles.control}>
					<label htmlFor='clientShortName'>Short Name</label>
					<input
						onChange={e => changeDataHandler(e.target.value, 'clientShortName')}
						value={changedClientData.clientShortName}
						id='clientShortName'
						type='text'
					></input>
				</div>

				<div className={styles.control}>
					<label htmlFor='clientLongName'>Long Name</label>
					<input
						onChange={e => changeDataHandler(e.target.value, 'clientLongName')}
						value={changedClientData.clientLongName}
						id='clientLongName'
						type='text'
					></input>
				</div>

				<div className={styles.control}>
					<label htmlFor='clientEmail'>E-Mail</label>
					<input
						onChange={e => changeDataHandler(e.target.value, 'clientEmail')}
						value={changedClientData.clientEmail}
						id='clientEmail'
						type='email'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>

				<div className={styles.control}>
					<label htmlFor='clientPhone'>Phone</label>
					<input
						onChange={e => changeDataHandler(e.target.value, 'clientPhone')}
						value={changedClientData.clientPhone}
						id='clientPhone'
						type='number'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>

				<div className={styles.control}>
					<label htmlFor='clientStatus'>Status</label>
					<input
						onChange={e => changeDataHandler(e.target.value, 'clientStatus')}
						value={changedClientData.clientStatus}
						id='clientStatus'
						type='text'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>

				<div className={styles.control}>
					<label htmlFor='clientPriority'>Priority</label>
					<input
						onChange={e => changeDataHandler(e.target.value, 'clientPriority')}
						value={changedClientData.clientPriority}
						id='clientPriority'
						type='text'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>

				<div className={styles.control}>
					<label htmlFor='clientNotes'>Notes</label>
					<input
						onChange={e => changeDataHandler(e.target.value, 'clientNotes')}
						value={changedClientData.clientNotes}
						id='clientNotes'
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
