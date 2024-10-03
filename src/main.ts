import { app, BrowserWindow } from 'electron';
import path from 'path';

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			contextIsolation: true,
			sandbox: false,
			preload: path.join(__dirname, '/src/preload.mjs'),
		},
		autoHideMenuBar: true,
	});

	win.loadFile(path.join(__dirname, '/public/index.html'));

	//win.webContents.openDevTools();
};

app.whenReady().then(() => {
	createWindow();
});
