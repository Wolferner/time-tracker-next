import InputField from '@/04 items/ui/InputField/InputField';
import TextDescription from '@/04 items/ui/TextDescriprtion/TextDescription';
import Toggler from '@/04 items/ui/Toggler/Toggler';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const IncidentTracker = ({ isShown, loadedData, onGetIncidentData, value }) => {
	const [incidentData, setIncidentData] = useState({
		incidentId: '',
		incidentTitle: '',
		incidentDescription: '',
		businessFirstName: null,
		businessLastName: null,
		businessEmail: null,
		supportFirstName: null,
		supportLastName: null,
		supportEmail: null,
		rfcId: '',
		crqId: '',
		charmId: '',
	});

	const [systemChanged, setSystemChanged] = useState(false);

	const { businessInfoArray, supportInfoArray } = loadedData;

	const fieldsChangeHandler = (field, value) => {
		let project;
		switch (field) {
			case 'businessFirstName':
				project = businessInfoArray.find(
					info => info.businessFirstName === value
				);
				break;
			case 'businessLastName':
				project = businessInfoArray.find(
					info => info.businessLastName === value
				);
				break;
			case 'businessEmail':
				project = businessInfoArray.find(info => info.businessEmail === value);
				break;
			case 'supportFirstName':
				project = supportInfoArray.find(
					info => info.supportFirstName === value
				);
				break;
			case 'supportLastName':
				project = supportInfoArray.find(info => info.supportLastName === value);
				break;
			case 'supportEmail':
				project = supportInfoArray.find(info => info.supportEmail === value);
				break;
			default:
				break;
		}
		onGetIncidentData({ ...project });
		if (
			field === 'incidentId' ||
			field === 'incidentTitle' ||
			field === 'incidentDescription' ||
			field === 'crqId' ||
			field === 'rfcId' ||
			field === 'charmId'
		) {
			onGetIncidentData({ [field]: value });
		}
	};

	return (
		<div hidden={!isShown}>
			<form>
				<fieldset>
					<legend>Incident Tracker</legend>
					<InputField
						placeholder='Incident Id'
						classNames=''
						onBlurCallback={value =>
							fieldsChangeHandler('incidentId', value.title)
						}
						value={value.incidentId}
					/>
					<InputField
						placeholder='Incident Title'
						classNames=''
						onBlurCallback={value =>
							fieldsChangeHandler('incidentTitle', value.title)
						}
						value={value.incidentTitle}
					/>
					<TextDescription
						placeholder='Description'
						classNames=''
						onBlurCallback={value =>
							fieldsChangeHandler('incidentDescription', value.description)
						}
						value={value.description}
					/>
				</fieldset>

				<fieldset>
					<legend>Business</legend>
					<Autocomplete
						disablePortal
						id='combo-box-demo1'
						options={businessInfoArray.map(data => data.businessFirstName)}
						sx={{ width: 300 }}
						renderInput={params => (
							<TextField {...params} label='Business First Name' />
						)}
						value={value.businessFirstName}
						onChange={(e, value) =>
							fieldsChangeHandler('businessFirstName', value)
						}
					/>

					<Autocomplete
						disablePortal
						id='combo-box-demo2'
						options={businessInfoArray.map(data => data.businessLastName)}
						sx={{ width: 300 }}
						renderInput={params => (
							<TextField {...params} label='Business Last Name' />
						)}
						value={value.businessLastName}
						onChange={(e, value) =>
							fieldsChangeHandler('businessLastName', value)
						}
					/>

					<Autocomplete
						disablePortal
						id='combo-box-demo3'
						options={businessInfoArray.map(data => data.businessEmail)}
						sx={{ width: 300 }}
						renderInput={params => (
							<TextField {...params} label='Business Email' />
						)}
						value={value.businessEmail}
						onChange={(e, value) => fieldsChangeHandler('businessEmail', value)}
					/>
				</fieldset>

				<fieldset>
					<legend>Support Team</legend>
					<Autocomplete
						disablePortal
						id='combo-box-demo4'
						options={supportInfoArray.map(data => data.supportFirstName)}
						sx={{ width: 300 }}
						renderInput={params => (
							<TextField {...params} label='Support First Name' />
						)}
						value={value.supportFirstName}
						onChange={(e, value) =>
							fieldsChangeHandler('supportFirstName', value)
						}
					/>

					<Autocomplete
						disablePortal
						id='combo-box-demo5'
						options={supportInfoArray.map(data => data.supportLastName)}
						sx={{ width: 300 }}
						renderInput={params => (
							<TextField {...params} label='Support Last Name' />
						)}
						value={value.supportLastName}
						onChange={(e, value) =>
							fieldsChangeHandler('supportLastName', value)
						}
					/>

					<Autocomplete
						disablePortal
						id='combo-box-demo6'
						options={supportInfoArray.map(data => data.supportEmail)}
						sx={{ width: 300 }}
						renderInput={params => (
							<TextField {...params} label='Support Email' />
						)}
						value={value.supportEmail}
						onChange={(e, value) => fieldsChangeHandler('supportEmail', value)}
					/>
				</fieldset>

				<fieldset>
					<legend>System changes</legend>
					<Toggler getTogglerState={() => setSystemChanged(prev => !prev)} />
					<div hidden={systemChanged && true}>
						<InputField
							placeholder='RFC Id'
							classNames=''
							onBlurCallback={value =>
								fieldsChangeHandler('rfcId', value.title)
							}
							value={value.rfcId}
						/>
						<InputField
							placeholder='CRQ Id'
							classNames=''
							onBlurCallback={value =>
								fieldsChangeHandler('crqId', value.title)
							}
							value={value.crqId}
						/>
						<InputField
							placeholder='Charm Id'
							classNames=''
							onBlurCallback={value =>
								fieldsChangeHandler('charmId', value.title)
							}
							value={value.charmId}
						/>
					</div>
				</fieldset>
			</form>
		</div>
	);
};

export default IncidentTracker;
