import Task from '@/02 widgets/NewTask/Task';

export default async function Page() {
	return (
		<div
			style={{
				outline: '1px solid red',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: '100vh',
			}}
		>
			<Task />
		</div>
	);
}
