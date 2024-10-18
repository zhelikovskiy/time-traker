export interface GetNewTaskDto {
	id: string;
	name: string;
	description?: string;
	status: 'todo' | 'doing' | 'done';
	startDate: Date;
	endDate?: Date;
}
