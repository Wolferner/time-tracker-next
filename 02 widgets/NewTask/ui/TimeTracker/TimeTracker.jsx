const TimeTracker = ({ isShown }) => {
	return (
		<div hidden={!isShown}>
			<h1>time</h1>
		</div>
	);
};

export default TimeTracker;
