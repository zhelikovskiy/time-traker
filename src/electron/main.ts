import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { isDev, getPreloadPath } from './util.js';

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

	ipcMain.handle('get-tasks', () => {
		console.log('Get tasks method Server');
	});
});
