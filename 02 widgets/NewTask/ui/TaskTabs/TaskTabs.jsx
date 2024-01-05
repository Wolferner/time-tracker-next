import { useState } from 'react';
import IncidentTracker from '../IncidentTracker/IncidentTracker';
import ProjectTracker from '../ProjectTracker/ProjectTracker';
import TaskTracker from '../TaskTracker/TaskTracker';
import TimeTracker from '../TimeTracker/TimeTracker';
import styles from './TaskTabs.module.css';

const TaskTabs = ({ loadedData, value, onGetTabData }) => {
	const tabs = {
		Task: 'Task',
		Project: 'Project',
		Incident: 'Incident',
		Time_Sets: 'Time Sets',
	};
	const [activeTab, setActiveTab] = useState('Task');

	const getTrackerDataHandler = value => {
		onGetTabData(value);
	};

	return (
		<div className={styles.tab}>
			<div className={styles.tab_head}>
				{Object.keys(tabs).map(tab => (
					<div
						key={tab}
						onClick={() => setActiveTab(tab)}
						className={`${styles.tab_header} ${
							activeTab === tab ? styles.active : ''
						}`}
					>
						{tabs[tab]}
					</div>
				))}
			</div>
			<div className={`${styles.tab_body}`}>
				<TaskTracker
					onGetTaskData={getTrackerDataHandler}
					isShown={activeTab !== 'Task' ? false : true}
					loadedData={loadedData.loadedTaskData}
					value={value}
				/>
				<ProjectTracker
					onGetProjectData={getTrackerDataHandler}
					isShown={activeTab !== 'Project' ? false : true}
					loadedData={loadedData.loadedProjectData}
					value={value}
				/>
				<IncidentTracker
					onGetIncidentData={getTrackerDataHandler}
					isShown={activeTab !== 'Incident' ? false : true}
					loadedData={loadedData.loadedIncidentData}
					value={value}
				/>
				<TimeTracker
					onBlurCallback={getTrackerDataHandler}
					isShown={activeTab !== 'Time_Sets' ? false : true}
				/>
			</div>
		</div>
	);
};

export default TaskTabs;
