import { ipcRenderer, contextBridge } from 'electron';
import { GetNewTaskDto } from './dto/get-new-task-dto';
import { GetTasksDto } from './dto/get-tasks-dto';

declare global {
	interface Window {
		ipc: {
			getTasks: () => GetTasksDto[];
		};
	}
}

contextBridge.exposeInMainWorld('ipc', {
	getTasks: () => ipcRenderer.invoke('get-tasks'),
});
