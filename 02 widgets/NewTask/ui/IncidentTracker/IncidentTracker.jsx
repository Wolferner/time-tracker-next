import Toggler from '@/04 items/ui/Toggler/Toggler'


const IncidentTracker = ({ isShown }) => {
	const [incidentData, setIncidentData] = useState();

	return (
		<div hidden={!isShown}>
			<form>
				<fieldset>
					<legend>Incident Tracker</legend>
					<InputField 
						placeholder='Incident Id' 
						classNames='' 
						onBlurCallback={} 
						value={}
					/>
					<InputField 
						placeholder='Incident Title' 
						classNames='' 
						onBlurCallback={} 
						value={}
					/>
					<TextDescription 
						placeholder='Description'
						classNames=''
						onBlurCallback={}
						value={}
					/>
				</fieldset>

				<fieldset>
					<legend>Bussines</legend>
					<InputField 
						placeholder='Incident Id' 
						classNames='' 
						onBlurCallback={} 
						value={}
					/>
					<InputField 
						placeholder='Incident Id' 
						classNames='' 
						onBlurCallback={} 
						value={}
					/>
					<InputField 
						placeholder='Incident Id' 
						classNames='' 
						onBlurCallback={} 
						value={}
					/>
				</fieldset>

				<fieldset>
					<legend>Support Team</legend>
					<InputField 
						placeholder='Incident Id' 
						classNames='' 
						onBlurCallback={} 
						value={}
					/>
					<InputField 
						placeholder='Incident Id' 
						classNames='' 
						onBlurCallback={} 
						value={}
					/>
					<InputField 
						placeholder='Incident Id' 
						classNames='' 
						onBlurCallback={} 
						value={}
					/>
				</fieldset>

				

				<fieldset >
					<legend>System changes</legend>
					<Toggler getTogglerState={}/>
					<div hidden={ SystemChanged && true} >
						<InputField 
							placeholder='Incident Id' 
							classNames='' 
							onBlurCallback={} 
							value={}
						/>
						<InputField 
							placeholder='Incident Id' 
							classNames='' 
							onBlurCallback={} 
							value={}
						/>
						<InputField 
							placeholder='Incident Id' 
							classNames='' 
							onBlurCallback={} 
							value={}
						/>
					</div>
					
				</fieldset>
			</form>
			
		</div>
	);
};

export default IncidentTracker;
