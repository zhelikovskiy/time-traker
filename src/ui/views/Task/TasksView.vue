<template>
	<div class="tasks-view">
		<TaskList :tasks="taskStore.tasks" />
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

		return { taskStore };
	},
});
</script>

<style scoped>
.tasks-view {
	padding: 20px;
	box-sizing: border-box;
}
</style>
