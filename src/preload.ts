import { ipcRenderer, contextBridge } from 'electron';
import Task from './models/Task';

declare global {
	interface Window {
		ipc: {};
	}
}
