import { useEffect, useState } from 'react';
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
	const tabs = {
		Task: 'Task',
		Project: 'Project',
		Incident: 'Incident',
		Time_Sets: 'Time Sets',
	};
	const [activeTab, setActiveTab] = useState('Task');
	const [tabsData, setTabsData] = useState(initialDataState);

	useEffect(() => {
		console.log(tabsData);
	}, [tabsData]);

	const getTrackerDataHandler = value => {
		setTabsData(prev => ({ ...prev, ...value }));
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
					taskCategories={taskCategories}
					taskTags={taskTags}
				/>
				<ProjectTracker
					onGetProjectData={getTrackerDataHandler}
					isShown={activeTab !== 'Project' ? false : true}
					projectGroups={projectGroups}
					projectTags={projectTags}
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
const taskTags = ['tag1', 'tag2', 'tag3', 'mmmtag4', 'uuutag5'];
const taskCategories = ['cat1', 'cat2', 'cat3', 'ssscat4'];
const projectGroups = ['project1', 'project2'];
const projectTags = ['pTag1', 'pTag2'];
