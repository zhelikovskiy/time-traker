<template>
	<div>
		<h1>Task List</h1>
		<RouterLink :to="{ name: 'CreateTask' }">Create Task</RouterLink>
		<ul>
			<TaskListItem v-for="task in tasks" :key="task.id" :task="task" />
		</ul>
	</div>
</template>

<script setup>
import TaskListItem from './Task-List-Item.vue';
import { ref, onMounted } from 'vue';

const tasks = ref([]);

onMounted(async () => {
	try {
		tasks.value = await window.ipc.getTasks();
	} catch (error) {
		console.error('Error fetching tasks:', error);
	}
});
</script>
