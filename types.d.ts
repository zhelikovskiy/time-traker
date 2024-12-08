interface Window {
	electron: {
		getTasks: () => Promise<Task[]>;
		createTask: (data: CreateTaskData) => Promise<Task>;
		updateTask: (id: string, data: UpdateTaskData) => Promise<number>;
		deleteTask: (id: string) => Promise<void>;
	};
}

interface Task {
	id: string;
	title: string;
	description: string;
	status: TaskStatus;
	timeIntervals: { start: string; end: string }[];
	totalTrackedTime: number;
}

type CreateTaskData = {
	title: string;
	description?: string;
	startDate: Date;
	endDate?: Date;
};

type UpdateTaskData = {
	title?: string;
	description?: string;
	startDate?: Date;
	endDate?: Date;
	status?: TaskStatus;
};

type UpdateTaskStatusData = {
	status: TaskStatus;
};
