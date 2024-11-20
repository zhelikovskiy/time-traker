import { app, BrowserWindow, ipcMain, IpcMainInvokeEvent } from 'electron';
import path from 'path';
import { isDev, getPreloadPath } from './util.js';
import taskService from './services/task-service.js';

app.on('ready', () => {
	const mainWindow = new BrowserWindow({
		webPreferences: {
			preload: getPreloadPath(),
		},
	});

	if (isDev()) {
		mainWindow.loadURL('http://localhost:5123');
	} else {
		mainWindow.loadFile(path.join(app.getAppPath(), '/dist-vue/index.html'));
	}
});

ipcMain.handle(
	'create-task',
	(event: IpcMainInvokeEvent, data: CreateTaskData): Promise<Task> => {
		return taskService.createOne(data);
	}
);

ipcMain.handle('get-tasks', (): Promise<Task[]> => {
	return taskService.getAll();
});
