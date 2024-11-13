<template>
	<div>
		<h1>Task List</h1>
		<RouterLink :to="{ name: 'CreateTask' }">Create Task</RouterLink>
		<ul>
			<TaskListItem
				v-for="task in tasks"
				:key="task.id"
				:task="task"
				:deleteHandler="deleteTask"
			/>
		</ul>
	</div>
</template>

<script setup>
import TaskListItem from './Task-List-Item.vue';
import { ref, onMounted } from 'vue';

const tasks = ref([]);

const deleteTask = async (id) => {
	try {
		await window.ipc.deleteTask(id);

		tasks.value = tasks.value.filter((task) => task.id !== id);
	} catch (error) {
		console.error('Error deleting task:', error);
	}
};

onMounted(async () => {
	try {
		tasks.value = await window.ipc.getTasks();
	} catch (error) {
		console.error('Error fetching tasks:', error);
	}
});
</script>
