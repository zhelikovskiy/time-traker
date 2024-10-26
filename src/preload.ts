import { ipcRenderer, contextBridge } from 'electron';
import { GetNewTaskDto } from './dto/get-new-task-dto';
import { GetTasksDto } from './dto/get-tasks-dto';
import { GetTaskInfoDto } from './dto/get-task-info-dto';

declare global {
	interface Window {
		ipc: {
			getTasks: () => GetTasksDto[];
			getTaskInfo: (id: string) => GetTaskInfoDto;
		};
	}
}

contextBridge.exposeInMainWorld('ipc', {
	getTasks: () => ipcRenderer.invoke('get-tasks'),
	getTaskInfo: (id: string) => ipcRenderer.invoke('get-task-info', id),
});
