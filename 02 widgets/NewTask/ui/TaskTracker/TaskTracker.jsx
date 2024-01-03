import style from './TaskTracker.module.css';

const TaskTracker = ({ isShown }) => {
	return (
		<div hidden={!isShown} className={style.TaskTracker}>
			<h1>task</h1>
		</div>
	);
};

export default TaskTracker;
