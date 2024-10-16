import { app, BrowserWindow } from 'electron';
import { initIpcHandlers } from './ipc';

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: __dirname + '/preload.js',
		},
	});

	win.loadFile('./index.html');

	initIpcHandlers();

	win.on('ready-to-show', () => win.show());
};

app.on('ready', createWindow);
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
