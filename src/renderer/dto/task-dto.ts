export default interface Task {
	name: string;
	description?: string;
	status: 'todo' | 'doing' | 'done';
	startDate: Date;
	endDate?: Date;
	createdDate: Date;
}
