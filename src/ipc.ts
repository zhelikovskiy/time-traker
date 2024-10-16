import { ipcMain } from 'electron';

export const initIpcHandlers = () => {
	ipcMain.on('create-task', (event, task) => {
		console.log(task);
	});
};
