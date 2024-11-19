export default interface Task {
	id: string;
	title: string;
	description: string;
	status: 'todo' | 'in-progress' | 'done';
	timeIntervals: { start: string; end: string }[];
	totalTrackedTime: number;
}
