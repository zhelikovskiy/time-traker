import { app, BrowserWindow } from 'electron';
import path from 'path';
import ipcHandler from './src/ipc-handlers.mjs';

const createMainWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			contextIsolation: true,
			sandbox: false,
			// eslint-disable-next-line no-undef
			preload: path.join(process.cwd(), '/src/preload.mjs'),
		},
		autoHideMenuBar: true,
	});

	win.webContents.openDevTools();

	win.loadFile('./public/index.html');

	return win;
};

// const createAddAppWindow = (mainWindow) => {
// 	const addAppWindow = new BrowserWindow({
// 		width: 600,
// 		height: 400,
// 		parent: mainWindow,
// 		webPreferences: {
// 			nodeIntegration: true,
// 			contextIsolation: false,
// 		},
// 	});

// 	addAppWindow.loadFile('./public/add-app.html');
// };

app.whenReady().then(() => {
	createMainWindow();
	ipcHandler.setupIpcHandlers();
});
