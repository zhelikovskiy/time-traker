import { app, BrowserWindow, ipcMain, IpcMainEvent } from 'electron';
import Task from './models/Task';
import { v4 as uuidv4 } from 'uuid';

const taskList: Task[] = [];

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: __dirname + '/preload.js',
		},
	});

	win.loadFile('./index.html');
	win.on('ready-to-show', () => win.show());
};

app.on('ready', createWindow);
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
