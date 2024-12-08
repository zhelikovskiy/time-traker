import { v4 as uuidv4 } from 'uuid';
import db from './db-service.js';
import { TaskStatus } from '../types.js';

const createOne = async (data: CreateTaskData): Promise<Task> => {
	const newTask: Task = {
		id: uuidv4(),
		title: data.title,
		description: data.description ? data.description : '',
		status: TaskStatus.TODO,
		timeIntervals: [],
		totalTrackedTime: 0,
	};

	const task = await db.create(newTask);

	return task;
};

const updateOne = async (id: string, data: UpdateTaskData): Promise<number> => {
	return await db.update(id, data);
};

const getAll = async (): Promise<Task[]> => {
	return await db.getAll();
};

const deleteOne = async (id: string): Promise<number> => {
	return await db.delete(id);
};

export default { createOne, getAll, deleteOne, updateOne };
