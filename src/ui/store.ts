import { defineStore } from 'pinia';

export const useTaskStore = defineStore('tasks', {
	state: () => {
		return {
			tasks: [] as Task[],
		};
	},
	getters: {},
	actions: {
		async fetchTasks() {
			try {
				const tasks = await window.electron.getTasks();
				this.tasks = tasks;
			} catch (error) {
				console.error('Error fetching tasks:', error);
			}
		},
		async createTask(data: CreateTaskData) {
			try {
				const resp = await window.electron.createTask(data);
				this.tasks.push(resp);
			} catch (error) {
				console.error('Error creating task:', error);
			}
		},

		async deleteTask(id: string) {
			try {
				await window.electron.deleteTask(id);
				this.tasks = this.tasks.filter((task) => task.id !== id);
			} catch (error) {
				console.error('Error deleting task:', error);
			}
		},
	},
});
