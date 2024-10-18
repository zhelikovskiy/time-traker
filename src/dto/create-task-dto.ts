export interface CreateTaskDto {
	name: string;
	description?: string;
	startDate: Date;
	endDate?: Date;
}
