import { ipcRenderer, contextBridge } from 'electron';
import { GetNewTaskDto } from './dto/get-new-task-dto';

declare global {
	interface Window {
		ipc: {
			CreateTask: (task: unknown) => void;
			onNewTaskCreated: (callback: (task: GetNewTaskDto) => void) => void;
		};
	}
}

contextBridge.exposeInMainWorld('ipc', {
	CreateTask: (task: unknown) => ipcRenderer.send('create-task', task),
	onNewTaskCreated: (callback: (task: GetNewTaskDto) => void) =>
		ipcRenderer.on('new-task-created', (event, task) => callback(task)),
});
