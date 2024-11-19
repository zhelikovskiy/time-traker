import { v4 as uuidv4 } from 'uuid';

const tasks: any[] = [];

const createOne = (data: CreateTaskData) => {
	const task: Task = {
		id: uuidv4(),
		title: data.name,
		description: data.description ? data.description : '',
		status: 'todo',
		timeIntervals: [],
		totalTrackedTime: 0,
	};

	tasks.push(task);

	return task;
};

const getAll = () => tasks;

export default { createOne, getAll };
