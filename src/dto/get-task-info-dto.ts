export interface GetTaskInfoDto {
	id: string;
	name: string;
	description?: string;
	status: 'todo' | 'doing' | 'done';
	startDate: Date;
	endDate?: Date;
	createdAt: Date;
}
