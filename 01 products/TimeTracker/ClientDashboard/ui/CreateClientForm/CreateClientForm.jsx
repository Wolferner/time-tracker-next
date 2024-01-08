'use client';

import Modal from '@/04 items/ui/Modal/Modal';
import { useState } from 'react';
import { addNewClient } from '../../data/ClientDashboard.data';
import styles from './CreateClientForm.module.css';

const initialState = {
	companyRegId: '',
	companyName: '',
	clientAcronym: '',
	clientShortName: '',
	clientLongName: '',
	clientEmail: '',
	clientPhone: '',
	clientStatus: '',
	clientNotes: '',
	clientPriority: '',
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
			await addNewClient(JSON.stringify(formData));
			// console.log(formData);
			setFormData(initialState);
			props.onHideForm();
		} catch {
			console.log(`Problem with posting NewClient  error: ${error}`);
		}
	};
	return (
		<Modal onHideForm={props.onHideForm}>
			<form onSubmit={sendFormHandler}>
				<div className={styles.control}>
					<label htmlFor='companyRegId'>Company Reg. Id</label>
					<input
						onChange={e =>
							changeFormDataHandler(e.target.value, 'companyRegId')
						}
						value={formData.companyRegId}
						id='companyRegId'
						type='text'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>

				<div className={styles.control}>
					<label htmlFor='companyName'>Company Name</label>
					<input
						onChange={e => changeFormDataHandler(e.target.value, 'companyName')}
						value={formData.companyName}
						id='companyName'
						type='text'
					></input>
				</div>

				<div className={styles.control}>
					<label htmlFor='clientAcronym'>Acronym</label>
					<input
						onChange={e =>
							changeFormDataHandler(e.target.value, 'clientAcronym')
						}
						value={formData.clientAcronym}
						id='clientAcronym'
						type='text'
					></input>
				</div>

				<div className={styles.control}>
					<label htmlFor='shortName'>Short Name</label>
					<input
						onChange={e => changeFormDataHandler(e.target.value, 'shortName')}
						value={formData.clientShortName}
						id='shortName'
						type='text'
					></input>
				</div>

				<div className={styles.control}>
					<label htmlFor='longName'>Long Name</label>
					<input
						onChange={e => changeFormDataHandler(e.target.value, 'longName')}
						value={formData.clientLongName}
						id='longName'
						type='text'
					></input>
				</div>

				<div className={styles.control}>
					<label htmlFor='clientEmail'>E-Mail</label>
					<input
						onChange={e => changeFormDataHandler(e.target.value, 'clientEmail')}
						value={formData.clientEmail}
						id='clientEmail'
						type='email'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>

				<div className={styles.control}>
					<label htmlFor='clientPhone'>Phone</label>
					<input
						onChange={e => changeFormDataHandler(e.target.value, 'clientPhone')}
						value={formData.clientPhone}
						id='clientPhone'
						type='number'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>

				<div className={styles.control}>
					<label htmlFor='clientStatus'>Status</label>
					<input
						onChange={e =>
							changeFormDataHandler(e.target.value, 'clientStatus')
						}
						value={formData.clientStatus}
						id='clientStatus'
						type='text'
					></input>
				</div>

				<div className={styles.control}>
					<label htmlFor='clientPriority'>Priority</label>
					<input
						onChange={e =>
							changeFormDataHandler(e.target.value, 'clientPriority')
						}
						value={formData.clientPriority}
						id='clientPriority'
						type='text'
					></input>
					{/* {hasNameInputError && <p>vvedite imja</p>} */}
				</div>

				<div className={styles.control}>
					<label htmlFor='clientNotes'>Notes</label>
					<input
						onChange={e => changeFormDataHandler(e.target.value, 'clientNotes')}
						value={formData.clientNotes}
						id='clientNotes'
						type='text'
					></input>
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
