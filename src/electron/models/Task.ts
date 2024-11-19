interface Task {
	id: number;
	title: string;
	description: string;
	status: 'todo' | 'in-progress' | 'done';
	timeIntervals: [{ start: string; end: string }];
	totalTrackedTime: number;
}
