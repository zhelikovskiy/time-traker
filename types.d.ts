interface Window {
	electron: {
		getTasks: () => Promise<Task[]>;
		createTask: (data: CreateTaskData) => Promise<Task>;
		deleteTask: (id: string) => Promise<void>;
	};
}

interface Task {
	id: string;
	title: string;
	description: string;
	status: 'todo' | 'in-progress' | 'done';
	timeIntervals: { start: string; end: string }[];
	totalTrackedTime: number;
}

type TaskStatus = 'TODO' | 'DOING' | 'DONE';

type CreateTaskData = {
	title: string;
	description?: string;
	startDate: Date;
	endDate?: Date;
};
