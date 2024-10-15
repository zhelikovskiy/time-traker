export default interface CreateTaskDto {
	name: string;
	description?: string;
	startDate?: Date | null;
	endDate?: Date | null;
}
