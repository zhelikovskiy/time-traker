import { v4 as uuidv4 } from 'uuid';
import db from './db-service.js';

type DbError = Error | null;

const createOne = async (data: CreateTaskData) => {
	const newTask: Task = {
		id: uuidv4(),
		title: data.name,
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

export default { createOne, getAll };
