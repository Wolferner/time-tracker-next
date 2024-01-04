import InputField from '@/04 items/ui/InputField/InputField';
import TextDescription from '@/04 items/ui/TextDescriprtion/TextDescription';
import Toggler from '@/04 items/ui/Toggler/Toggler';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const IncidentTracker = ({ isShown, loadedData }) => {
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

	const fieldsChangeHandler = () => {};

	return (
		<div hidden={!isShown}>
			<form>
				<fieldset>
					<legend>Incident Tracker</legend>
					<InputField
						placeholder='Incident Id'
						classNames=''
						onBlurCallback={fieldsChangeHandler}
						value={incidentData.incidentId}
					/>
					<InputField
						placeholder='Incident Title'
						classNames=''
						onBlurCallback={fieldsChangeHandler}
						value={incidentData.incidentTitle}
					/>
					<TextDescription
						placeholder='Description'
						classNames=''
						onBlurCallback={fieldsChangeHandler}
						value={incidentData.description}
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
						value={incidentData.businessFirstName}
						onChange={(e, value) => handleFieldType('businessFirstName', value)}
					/>

					<Autocomplete
						disablePortal
						id='combo-box-demo2'
						options={businessInfoArray.map(data => data.businessLastName)}
						sx={{ width: 300 }}
						renderInput={params => (
							<TextField {...params} label='Business Last Name' />
						)}
						value={incidentData.businessLastName}
						onChange={(e, value) =>
							fieldChangeHandler('businessLastName', value)
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
						value={incidentData.businessEmail}
						onChange={(e, value) => fieldChangeHandler('businessEmail', value)}
					/>
				</fieldset>

				<fieldset>
					<legend>Support Team</legend>
					<Autocomplete
						disablePortal
						id='combo-box-demo1'
						options={supportInfoArray.map(data => data.supportFirstName)}
						sx={{ width: 300 }}
						renderInput={params => (
							<TextField {...params} label='Support First Name' />
						)}
						value={incidentData.supportFirstName}
						onChange={(e, value) => handleFieldType('supportFirstName', value)}
					/>

					<Autocomplete
						disablePortal
						id='combo-box-demo2'
						options={supportInfoArray.map(data => data.supportLastName)}
						sx={{ width: 300 }}
						renderInput={params => (
							<TextField {...params} label='Support Last Name' />
						)}
						value={incidentData.supportLastName}
						onChange={(e, value) =>
							fieldChangeHandler('supportLastName', value)
						}
					/>

					<Autocomplete
						disablePortal
						id='combo-box-demo3'
						options={supportInfoArray.map(data => data.supportEmail)}
						sx={{ width: 300 }}
						renderInput={params => (
							<TextField {...params} label='Support Email' />
						)}
						value={incidentData.supportEmail}
						onChange={(e, value) => fieldChangeHandler('supportEmail', value)}
					/>
				</fieldset>

				<fieldset>
					<legend>System changes</legend>
					<Toggler getTogglerState={() => setSystemChanged(prev => !prev)} />
					<div hidden={systemChanged && true}>
						<InputField
							placeholder='RFC Id'
							classNames=''
							onBlurCallback={fieldsChangeHandler}
							value={incidentData.rfcId}
						/>
						<InputField
							placeholder='CRQ Id'
							classNames=''
							onBlurCallback={fieldsChangeHandler}
							value={incidentData.crqId}
						/>
						<InputField
							placeholder='Charm Id'
							classNames=''
							onBlurCallback={fieldsChangeHandler}
							value={incidentData.charmId}
						/>
					</div>
				</fieldset>
			</form>
		</div>
	);
};

export default IncidentTracker;
