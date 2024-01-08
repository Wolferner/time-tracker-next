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
					loadedData={{
						allTags: loadedData.allTags,
						allCategories: loadedData.allCategories,
					}}
					value={value}
				/>
				<ProjectTracker
					onGetProjectData={getTrackerDataHandler}
					isShown={activeTab !== 'Project' ? false : true}
					loadedData={{
						projectInfoArray: loadedData.projectInfoArray,
						allTags: loadedData.allTags,
						allCategories: loadedData.allCategories,
					}}
					value={value}
				/>
				<IncidentTracker
					onGetIncidentData={getTrackerDataHandler}
					isShown={activeTab !== 'Incident' ? false : true}
					loadedData={{
						businessInfoArray: loadedData.allBusinessInfo,
						supportInfoArray: loadedData.allSupportInfo,
					}}
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
