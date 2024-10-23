<template>
	<div class="task-list-container">
		<ul class="task-list">
			<TaskListItem v-for="task in tasks" :key="task.id" :task="task" />
		</ul>
	</div>
</template>

<script>
import TaskListItem from './Task-List-Item.vue';

export default {
	components: {
		TaskListItem,
	},
	data() {
		return {
			tasks: [
				{
					id: 1,
					name: 'Task 1',
					desc: 'This is a description for task 1. It might be very long so we need to truncate it.',
					status: 'Not Started',
					isTracking: false,
					startDate: '2024-10-21',
					endDate: null,
					todayTrackingTime: '00:45:00',
				},
				{
					id: 2,
					name: 'Task 2',
					desc: 'Another description that is shorter.',
					status: 'In Progress',
					isTracking: true,
					startDate: '2024-10-19',
					endDate: null,
					todayTrackingTime: '02:15:00',
				},
				{
					id: 3,
					name: 'Task 3',
					desc: 'Completed task with a short description.',
					status: 'Completed',
					isTracking: false,
					startDate: '2024-10-15',
					endDate: '2024-10-20',
					todayTrackingTime: '00:00:00',
				},
			],
		};
	},
};
</script>
