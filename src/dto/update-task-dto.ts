export interface UpdateTaskDto {
	name?: string;
	description?: string;
	status?: 'todo' | 'doing' | 'done';
	startDate?: Date;
	endDate?: Date;
}
