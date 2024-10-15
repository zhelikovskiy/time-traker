import CreateTaskDto from '../dto/create-task-dto';

export const CreateTaskFormHandler = (event: Event) => {
	event.preventDefault();

	const taskName = document.getElementById('task-name') as HTMLInputElement;
	const taskDesc = document.getElementById('task-desc') as HTMLTextAreaElement;
	const taskStartDate = document.getElementById(
		'task-start-date'
	) as HTMLInputElement;
	const taskEndDate = document.getElementById(
		'task-end-date'
	) as HTMLInputElement;

	const task: CreateTaskDto = {
		name: taskName.value,
		description: taskDesc.value,
		startDate: taskStartDate.value ? new Date(taskStartDate.value) : null,
		endDate: taskEndDate.value ? new Date(taskEndDate.value) : null,
	};
};
