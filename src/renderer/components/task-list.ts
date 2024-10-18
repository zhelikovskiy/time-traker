import { GetNewTaskDto } from '../../dto/get-new-task-dto';

const creteTaskElement = (task: GetNewTaskDto): HTMLElement => {
	const taskItem = document.createElement('li');
	taskItem.classList.add('task-item');

	const taskHeader = document.createElement('div');
	taskHeader.classList.add('task-header');

	const taskName = document.createElement('h3');
	taskName.classList.add('task-name');
	taskName.textContent = task.name;

	const taskStatus = document.createElement('span');
	taskStatus.classList.add('task-status');
	taskStatus.textContent =
		task.status === 'doing'
			? 'In Progress'
			: task.status.charAt(0).toUpperCase() + task.status.slice(1);

	taskHeader.appendChild(taskName);
	taskHeader.appendChild(taskStatus);

	const taskDesc = document.createElement('p');
	taskDesc.classList.add('task-desc');
	taskDesc.textContent = task.description ? task.description : 'No description';

	const taskDates = document.createElement('div');
	taskDates.classList.add('task-dates');

	const startDate = document.createElement('span');
	startDate.classList.add('task-start-date');
	startDate.innerHTML = `Start Date: <strong>${task.startDate.toISOString().split('T')[0]}</strong>`;

	const endDate = document.createElement('span');
	endDate.classList.add('task-end-date');
	endDate.innerHTML = `End Date: <strong>${task.endDate ? task.endDate.toISOString().split('T')[0] : 'N/A'}</strong>`;

	taskDates.appendChild(startDate);
	taskDates.appendChild(endDate);

	taskItem.appendChild(taskHeader);
	taskItem.appendChild(taskDesc);
	taskItem.appendChild(taskDates);

	return taskItem;
};

const handleAddNewTask = (task: GetNewTaskDto): void => {
	const taskList = document.getElementById('task-list') as HTMLUListElement;
	const taskElement = creteTaskElement(task);

	taskList.appendChild(taskElement);
};

export default { handleAddNewTask };
