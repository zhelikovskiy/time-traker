const handleCreateTaskForm = (event: Event): void => {
	event.preventDefault();
	const form = document.getElementById('create-task-form') as HTMLFormElement;

	const startDateElement = form.elements.namedItem(
		'task-start-date'
	) as HTMLInputElement;
	const endDateElement = form.elements.namedItem(
		'task-end-date'
	) as HTMLInputElement;

	const task = {
		name: (form.elements.namedItem('task-name') as HTMLInputElement).value,

		description: (form.elements.namedItem('task-desc') as HTMLTextAreaElement)
			.value,

		startDate: startDateElement.value
			? new Date(startDateElement.value)
			: new Date(),

		endDate: endDateElement.value ? new Date(endDateElement.value) : undefined,
	};

	window.ipc.CreateTask(task);

	form.reset();
};

export default handleCreateTaskForm;
