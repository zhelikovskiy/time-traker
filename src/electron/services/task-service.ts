import { v4 as uuidv4 } from 'uuid';
import db from './db-service.js';

const createOne = async (data: CreateTaskData) => {
	const newTask: Task = {
		id: uuidv4(),
		title: data.title,
		description: data.description ? data.description : '',
		status: 'todo',
		timeIntervals: [],
		totalTrackedTime: 0,
	};

	const task = await db.create(newTask);

	return task;
};

const getAll = async () => {
	return await db.getAll();
};

const deleteOne = async (id: string) => {
	return await db.delete(id);
};

export default { createOne, getAll, deleteOne };
