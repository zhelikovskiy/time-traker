import { ipcMain, IpcMainInvokeEvent } from 'electron';
import taskService from './services/task-service';
import { UpdateTaskDto } from './dto/update-task-dto';
import { CreateTaskDto } from './dto/create-task-dto';

export const initIpcHandlers = () => {
	ipcMain.handle('get-tasks', async () => {
		const response = taskService.getMany();

		return response;
	});

	ipcMain.handle(
		'get-task-info',
		async (event: IpcMainInvokeEvent, id: string) => {
			const response = taskService.getOneById(id);

			return response;
		}
	);

	ipcMain.handle(
		'create-task',
		async (event: IpcMainInvokeEvent, task: CreateTaskDto) => {
			taskService.create(task);
		}
	);

	ipcMain.handle(
		'update-task',
		async (
			event: IpcMainInvokeEvent,
			id: string,
			updatedData: UpdateTaskDto
		) => {
			const response = taskService.update(id, updatedData);

			return response;
		}
	);
};
