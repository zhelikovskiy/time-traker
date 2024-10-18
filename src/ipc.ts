import { ipcMain } from 'electron';
import taskService from './services/task-service';

export const initIpcHandlers = () => {
	ipcMain.on('create-task', (event, task) => {
		const response = taskService.create(task);

		event.reply('new-task-created', response);
	});
};
