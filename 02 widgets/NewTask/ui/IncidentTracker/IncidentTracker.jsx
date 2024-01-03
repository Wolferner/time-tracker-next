const IncidentTracker = ({ isShown }) => {
	return (
		<div hidden={!isShown}>
			<h1>incident</h1>
		</div>
	);
};

export default IncidentTracker;
