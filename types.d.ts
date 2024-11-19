interface Window {
	electron: {
		getTasks: () => Promise<Task[]>;
		createTask: (data: CreateTaskData) => Promise<Task>;
	};
}

type Task = {
	id: string;
	title: string;
	description: string;
	status: 'todo' | 'in-progress' | 'done';
	timeIntervals: { start: string; end: string }[];
	totalTrackedTime: number;
};

type CreateTaskData = {
	name: string;
	description?: string;
	startDate: Date;
	endDate?: Date;
};
