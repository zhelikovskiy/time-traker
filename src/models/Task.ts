interface Task {
	id: string;
	name: string;
	description?: string;
	status: 'todo' | 'doing' | 'done';
	startDate: Date;
	endDate?: Date;
	createdAt: Date;
}

export default Task;
