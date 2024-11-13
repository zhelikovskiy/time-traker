import { UpdateTaskDto } from '../dto/update-task-dto';
import { CreateTaskDto } from '../dto/create-task-dto';
import Task from '../models/Task';
import { v4 as uuidv4 } from 'uuid';

const tasks: Task[] = [
	{
		id: uuidv4(),
		name: 'Meet with John',
		description: 'Discuss new project with John',
		status: 'todo',
		startDate: new Date('2022-11-01T14:00:00'),
		endDate: undefined,
		createdAt: new Date('2022-11-01T12:00:00'),
	},
	{
		id: uuidv4(),
		name: 'Write an article',
		description: 'Write an article about TypeScript',
		status: 'doing',
		startDate: new Date('2022-11-02T10:00:00'),
		endDate: undefined,
		createdAt: new Date('2022-11-02T09:00:00'),
	},
	{
		id: uuidv4(),
		name: 'Buy milk',
		description: 'Buy milk and eggs',
		status: 'done',
		startDate: new Date('2022-11-03T12:00:00'),
		endDate: new Date('2022-11-03T13:00:00'),
		createdAt: new Date('2022-11-03T11:00:00'),
	},
];

const create = (task: CreateTaskDto) => {
	const dateNow = new Date();

	const newTask: Task = {
		id: uuidv4(),
		name: task.name,
		description: task.description,
		status: 'todo',
		startDate:
			task.startDate && task.startDate >= dateNow ? task.startDate : dateNow,
		endDate: task.endDate,
		createdAt: dateNow,
	};

	tasks.push(newTask);

	return newTask;
};

const getMany = () => {
	return tasks;
};

const getOneById = (id: string) => {
	return tasks.find((task) => task.id === id);
};

const update = (id: string, updatedData: UpdateTaskDto) => {
	const task = tasks.find((task) => task.id === id);

	if (task) {
		Object.assign(task, updatedData);
		task.startDate = new Date(task.startDate);
		task.endDate = task.endDate ? new Date(task.endDate) : undefined;
	}

	return task;
};

const deleteOne = (id: string) => {
	const index = tasks.findIndex((task) => task.id === id);

	if (index !== -1) {
		tasks.splice(index, 1);
	}
};

export default {
	create,
	getMany,
	getOneById,
	update,
	deleteOne,
};
