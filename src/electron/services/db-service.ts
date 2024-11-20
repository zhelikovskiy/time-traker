import Datastore from 'nedb';
import path from 'path';
import { app } from 'electron';

const userDataPath = app.getPath('userData');
const dbPath = path.join(userDataPath, 'tasks.db');

const nedb = new Datastore({ filename: dbPath, autoload: true });

const db = {
	create: (task: Task): Promise<Task> => {
		return new Promise((resolve, reject) => {
			nedb.insert(task, (err, newDoc) => {
				if (err) {
					reject(err);
				} else {
					resolve(newDoc);
				}
			});
		});
	},

	getAll: (): Promise<Task[]> => {
		return new Promise((resolve, reject) => {
			nedb.find({}, (err: any, docs: Task[] | PromiseLike<Task[]>) => {
				if (err) {
					reject(err);
				} else {
					resolve(docs);
				}
			});
		});
	},

	getOne: (id: string | number): Promise<Task | null> => {
		//  id может быть числом
		return new Promise((resolve, reject) => {
			nedb.findOne({ id }, (err, doc) => {
				// findOne возвращает один документ или null
				if (err) {
					reject(err);
				} else {
					resolve(doc);
				}
			});
		});
	},

	update: (
		id: string | number,
		updatedTask: Partial<Task>
	): Promise<number> => {
		return new Promise((resolve, reject) => {
			nedb.update({ id }, updatedTask, {}, (err, numAffected) => {
				if (err) {
					reject(err);
				} else {
					resolve(numAffected);
				}
			});
		});
	},

	delete: (id: string | number): Promise<number> => {
		return new Promise((resolve, reject) => {
			nedb.remove({ id }, {}, (err, numRemoved) => {
				if (err) {
					reject(err);
				} else {
					resolve(numRemoved);
				}
			});
		});
	},
};

export default db;
