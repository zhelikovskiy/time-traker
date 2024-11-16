import { ipcRenderer, contextBridge } from 'electron';
import { GetTasksDto } from './dto/get-tasks-dto';
import { GetTaskInfoDto } from './dto/get-task-info-dto';
import { UpdateTaskDto } from './dto/update-task-dto';
import { CreateTaskDto } from './dto/create-task-dto';
import { SaveTimeIntervalDto } from './dto/save-time-interval-dto';

declare global {
	interface Window {
		ipc: {
			getTasks: () => GetTasksDto[];
			getTaskInfo: (id: string) => GetTaskInfoDto;
			createTask: (task: CreateTaskDto) => void;
			updateTask: (id: string, updatedData: UpdateTaskDto) => GetTaskInfoDto;
			deleteTask: (id: string) => void;
			saveTimeInterval: (intervalData: SaveTimeIntervalDto) => void;
		};
	}
}

contextBridge.exposeInMainWorld('ipc', {
	getTasks: () => ipcRenderer.invoke('get-tasks'),
	getTaskInfo: (id: string) => ipcRenderer.invoke('get-task-info', id),
	createTask: (task: CreateTaskDto) => ipcRenderer.invoke('create-task', task),
	updateTask: (id: string, updatedData: UpdateTaskDto) =>
		ipcRenderer.invoke('update-task', id, updatedData),
	deleteTask: (id: string) => ipcRenderer.invoke('delete-task', id),
	saveTimeInterval: (intervalData: SaveTimeIntervalDto) =>
		ipcRenderer.invoke('save-time', intervalData),
});
