import Interval from './Interval';

interface Task {
	id: string;
	name: string;
	description?: string;
	status: 'todo' | 'doing' | 'done';
	startDate: Date;
	endDate?: Date;
	intervals: Interval[];
	createdAt: Date;
}

export default Task;
