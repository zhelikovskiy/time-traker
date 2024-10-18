function handleCreateTaskForm(event: Event): void {
	event.preventDefault();
	const form = document.getElementById('create-task-form') as HTMLFormElement;

	const task = {
		name: (form.elements.namedItem('task-name') as HTMLInputElement).value,

		description: (form.elements.namedItem('task-desc') as HTMLTextAreaElement)
			.value,

		startDate: (form.elements.namedItem('task-start-date') as HTMLInputElement)
			.value,

		endDate: (form.elements.namedItem('task-end-date') as HTMLInputElement)
			.value,
	};

	window.ipc.CreateTask(task);
}

export default handleCreateTaskForm;
