import { ipcMain } from 'electron';
import taskService from './services/task-service';
import { UpdateTaskDto } from './dto/update-task-dto';

export const initIpcHandlers = () => {
	ipcMain.handle('get-tasks', async () => {
		const response = taskService.getMany();

		return response;
	});

	ipcMain.handle('get-task-info', async (event, id: string) => {
		const response = taskService.getOneById(id);

		return response;
	});

	ipcMain.handle(
		'update-task',
		async (event, id: string, updatedData: UpdateTaskDto) => {
			const response = taskService.update(id, updatedData);

			return response;
		}
	);
};
