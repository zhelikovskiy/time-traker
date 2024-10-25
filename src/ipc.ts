import { ipcMain } from 'electron';
import taskService from './services/task-service';

export const initIpcHandlers = () => {
	ipcMain.handle('get-tasks', async () => {
		const response = taskService.getMany();

		return response;
	});
};
