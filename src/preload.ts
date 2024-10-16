import { ipcRenderer, contextBridge } from 'electron';

declare global {
	interface Window {
		ipc: {
			CreateTask: (task: unknown) => void;
		};
	}
}

contextBridge.exposeInMainWorld('ipc', {
	CreateTask: (task: unknown) => ipcRenderer.send('create-task', task),
});
