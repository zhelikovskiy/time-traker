import { app } from 'electron';
import path from 'path';

export function isDev(): boolean {
	return process.env.NODE_ENV === 'development';
}

export function getPreloadPath(): string {
	return path.join(app.getAppPath(), '/dist-electron/preload.cjs');
}
