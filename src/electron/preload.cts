const electron = require('electron');

electron.contextBridge.exposeInMainWorld('electron', {
	getTasks: (): Promise<Task[]> => {
		return electron.ipcRenderer.invoke('get-tasks');
	},
	createTask: (data: CreateTaskData): Promise<Task> => {
		return electron.ipcRenderer.invoke('create-task', data);
	},
} satisfies Window['electron']);
