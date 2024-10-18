import { CreateTaskDto } from '../dto/create-task-dto';
import Task from '../models/Task';
import { v4 as uuidv4 } from 'uuid';

const tasks: Task[] = [];

const create = (task: CreateTaskDto) => {
	const dateNow = new Date();

	const newTask: Task = {
		id: uuidv4(),
		name: task.name,
		description: task.description,
		status: 'todo',
		startDate: task.startDate ? task.startDate : dateNow,
		endDate: task.endDate,
		createdAt: dateNow,
	};

	tasks.push(newTask);

	return newTask;
};

export default {
	create,
};
