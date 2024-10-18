import { ipcMain } from 'electron';
import taskService from './services/task-service';

export const initIpcHandlers = () => {
	ipcMain.handle('create-task', (event, task) => {
		const response = taskService.create(task);
		return response;
	});
};
