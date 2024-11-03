<template>
	<div class="task-list-container">
		<ul class="task-list">
			<TaskListItem v-for="task in tasks" :key="task.id" :task="task" />
		</ul>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import TaskListItem from './Task-List-Item.vue';

export default {
	name: 'TaskList',
	components: {
		TaskListItem,
	},
	setup() {
		const tasks = ref([]);

		const fetchTasks = async () => {
			try {
				tasks.value = await window.ipc.getTasks();
			} catch (error) {
				console.error('Error fetching tasks:', error);
			}
		};

		onMounted(() => {
			fetchTasks();
		});

		return { tasks };
	},
};
</script>
