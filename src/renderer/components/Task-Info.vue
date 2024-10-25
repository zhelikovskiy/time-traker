<template>
	<div class="task-info">
		<h1 class="task-title">{{ task.name }}</h1>
		<p class="task-desc">{{ task.desc }}</p>

		<div class="task-details">
			<div class="task-status">
				<span>Status: </span>
				<span class="task-status-indicator" :class="statusClass">{{
					task.status
				}}</span>
			</div>

			<div class="task-dates">
				<p><strong>Start Date:</strong> {{ task.startDate || 'N/A' }}</p>
				<p><strong>End Date:</strong> {{ task.endDate || 'N/A' }}</p>
			</div>
		</div>

		<div class="task-tracker">
			<p>
				<strong>Today’s Tracking Time:</strong> {{ task.todayTrackingTime }}
			</p>
			<button @click="toggleTracking" class="btn-action">
				{{ task.isTracking ? 'Pause' : 'Start' }}
			</button>
		</div>

		<div class="task-actions">
			<button @click="deleteTask" class="btn-action btn-delete">
				Delete Task
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['task'],
	computed: {
		statusClass() {
			switch (this.task.status) {
				case 'todo':
					return 'status-not-started';
				case 'doing':
					return 'status-in-progress';
				case 'done':
					return 'status-completed';
			}
		},
	},
	methods: {
		toggleTracking() {
			// Логика для переключения трекера времени
		},
		deleteTask() {
			// Логика для удаления задачи
		},
	},
};
</script>
