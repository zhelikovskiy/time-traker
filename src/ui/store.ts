import { defineStore } from 'pinia';

export const useTaskStore = defineStore('tasks', {
	state: () => {
		return {
			tasks: [] as Task[],
		};
	},
	getters: {
		getTaskById:
			(state) =>
			(id: string): Task | undefined => {
				return state.tasks.find((task) => task.id === id);
			},
	},
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

		async updateTask(id: string, data: UpdateTaskData) {
			try {
				const resp = await window.electron.updateTask(id, data);
				console.log('Update response:', resp);
				//this.tasks = this.tasks.map((task) => (task.id == id ? resp : task));
			} catch (error) {
				console.error('Error updating task:', error);
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
