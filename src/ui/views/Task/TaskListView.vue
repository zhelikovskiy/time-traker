<template>
	<ul>
		<li v-for="task in taskStore.tasks" :key="task.id">
			{{ task.title }}
		</li>
	</ul>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useTaskStore } from '../../store';

export default defineComponent({
	name: 'task-list',
	setup() {
		const taskStore = useTaskStore();

		onMounted(async () => {
			await taskStore.fetchTasks();
		});

		return { taskStore };
	},
});
</script>
