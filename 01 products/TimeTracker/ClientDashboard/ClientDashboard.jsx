'use client';

import InputField from '@/04 items/ui/InputField/InputField';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import {
	deleteCurrentClient,
	getAllClients,
} from './data/ClientDashboard.data';
import CreateClientForm from './ui/CreateClientForm/CreateClientForm';
import EditClientForm from './ui/EditClientForm/EditClientForm';

const ClientDashboard = () => {
	const [searchInput, setSearchInput] = useState('');
	const [isShownForm, setIsShownForm] = useState(false);
	const [isShowEditingWindow, setIsShownEditingWindow] = useState(false);
	const [currentClient, setCurrentClient] = useState(null);
	const [clientsTable, setClientsTable] = useState([]);
	const [clientDeleted, setClientDeleted] = useState(false);

	const fetchClients = async () => {
		try {
			const response = await getAllClients();
			const dataArray = Object.keys(response).map(key => response[key]);
			setClientsTable(dataArray);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchClients();
	}, [isShownForm, isShowEditingWindow, clientDeleted]);

	const editClientHandler = client => {
		setCurrentClient(client);
		setIsShownEditingWindow(prev => !prev);
	};

	const hideFormHandler = () => {
		setIsShownForm(prev => !prev);
	};

	const deleteClientHandler = id => {
		deleteCurrentClient(id);
		setClientDeleted(prev => !prev);
	};

	const searchInputHandler = value => {
		setSearchInput(value.title);
	};

	return (
		<div className='row'>
			{isShownForm && <CreateClientForm onHideForm={hideFormHandler} />}
			{isShowEditingWindow && (
				<EditClientForm data={currentClient} onHideWindow={editClientHandler} />
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

								<th>Company Reg. Id</th>
								<th>Company Name</th>
								<th>Acronym</th>
								<th>Short Name</th>
								<th>Long Name</th>

								<th>E-Mail</th>
								<th>Phone</th>
								<th>Status</th>
								<th>Priority</th>
								<th>Notes</th>
								<th>Del</th>
							</tr>
						</thead>
						<tbody>
							{clientsTable.map((client, index) => (
								<tr key={index}>
									<td>
										<IconButton
											onClick={() => editClientHandler(client)}
											aria-label='edit'
											size='small'
										>
											<EditIcon fontSize='inherit' />
										</IconButton>
									</td>

									<td>{client.companyRegId}</td>
									<td>{client.companyName}</td>
									<th>{client.clientAcronym}</th>
									<th>{client.clientShortName}</th>
									<th>{client.clientLongName}</th>

									<td>{client.clientEmail}</td>
									<td>{client.clientPhone}</td>
									<td>{client.clientStatus}</td>
									<td>{client.clientPriority}</td>
									<td>{client.clientNotes}</td>
									<td>
										<IconButton
											onClick={() => deleteClientHandler(client.companyRegId)}
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

export default ClientDashboard;
