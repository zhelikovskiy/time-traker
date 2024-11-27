<template>
	<div id="tasks-view">
		<TaskList :tasks="taskStore.tasks" :onDelete="onDelete" />
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useTaskStore } from '../../store';
import TaskList from '../../components/Task/TaskList.vue';

export default defineComponent({
	name: 'TasksView',
	components: { TaskList },
	setup() {
		const taskStore = useTaskStore();

		onMounted(async () => {
			await taskStore.fetchTasks();
		});

		const onDelete = async (id: string) => {
			await taskStore.deleteTask(id);
		};

		return { taskStore, onDelete };
	},
});
</script>

<style scoped>
#tasks-view {
	display: flex; /* Используем flexbox */
	flex-direction: column; /*  Вертикальное расположение элементов */
	flex-grow: 1; /* tasks-view занимает все доступное пространство */
	padding: 10px; /*  Отступы */
}
</style>
