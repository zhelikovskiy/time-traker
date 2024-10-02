import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronApi', {
	getProcessList: () => ipcRenderer.send('get-process-list'),
	onProcessList: (callback) =>
		ipcRenderer.on('process-list', (event, processList) =>
			callback(processList)
		),
});
