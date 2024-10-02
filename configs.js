import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const windowConfig = {
	width: 600,
	height: 400,
	resizable: true,
	webPreferences: {
		preload: path.join(process.cwd(), 'preload.js'),
		contextIsolation: true,
		enableRemoteModule: false,
		nodeIntegration: false,
	},
	title: 'Time Treker',
	autoHideMenuBar: true,
};

export default { __dirname, windowConfig };
