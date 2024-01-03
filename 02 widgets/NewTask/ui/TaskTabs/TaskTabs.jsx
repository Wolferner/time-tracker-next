import { useState } from 'react';
import IncidentTracker from '../IncidentTracker/IncidentTracker';
import ProjectTracker from '../ProjectTracker/ProjectTracker';
import TaskTracker from '../TaskTracker/TaskTracker';
import TimeTracker from '../TimeTracker/TimeTracker';
import styles from './TaskTabs.module.css';

const TaskTabs = () => {
	const initialDataState = {
		description: '',
		taskCategories: [],
		taskTags: [],
	};
	const [activeTab, setActiveTab] = useState('Task');
	const [tabsData, setTabsData] = useState(initialDataState);

	const getTrackerDataHandler = value => {
		setTabsData(prev => ({ ...prev, ...value }));
	};

	return (
		<div className={styles.tab}>
			<div className={styles.tab_head}>
				<div
					className={`${styles.tab_header} ${
						activeTab === 'Task' && styles.active
					}`}
					onClick={() => setActiveTab('Task')}
					key='Task'
				>
					Task
				</div>
				<div
					className={`${styles.tab_header} ${
						activeTab === 'Project' && styles.active
					}`}
					onClick={() => setActiveTab('Project')}
					key='Project'
				>
					Project
				</div>
				<div
					className={`${styles.tab_header} ${
						activeTab === 'Incident' && styles.active
					}`}
					onClick={() => setActiveTab('Incident')}
					key='Incident'
				>
					Incident
				</div>
				<div
					className={`${styles.tab_header} ${
						activeTab === 'Time_Sets' && styles.active
					}`}
					onClick={() => setActiveTab('Time_Sets')}
					key='Time_Sets'
				>
					Time Sets
				</div>
			</div>
			<div className={`${styles.tab_body}`}>
				<TaskTracker
					onBlurCallback={getTrackerDataHandler}
					isShown={activeTab !== 'Task' ? false : true}
				/>
				<ProjectTracker
					onBlurCallback={getTrackerDataHandler}
					isShown={activeTab !== 'Project' ? false : true}
				/>
				<IncidentTracker
					onBlurCallback={getTrackerDataHandler}
					isShown={activeTab !== 'Incident' ? false : true}
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
