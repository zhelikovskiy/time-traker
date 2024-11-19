interface Window {
	electron: {
		getTasks: () => void;
	};
}

type CreateTaskData = {
	name: string;
	description?: string;
	startDate: Date;
	endDate?: Date;
};
