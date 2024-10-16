const CreteTaskFormHanlder = (event: Event) => {
	event.preventDefault();

	const taskName = document.getElementById('task-name') as HTMLInputElement;

	const taskDesc = document.getElementById('task-desc') as HTMLTextAreaElement;

	const startDate = document.getElementById('start-date') as HTMLInputElement;

	const endDate = document.getElementById('end-date') as HTMLInputElement;

	window.ipc.CreateTask({
		name: taskName.value,
		description: taskDesc.value,
		startDate: startDate.value,
		endDate: endDate.value,
	});
};

export default CreteTaskFormHanlder;
