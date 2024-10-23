<template>
	<li class="task-item">
		<div class="task-header">
			<h3 class="task-name">
				{{ task.name }}
				<span class="task-status" :class="statusClass">{{ task.status }}</span>
			</h3>
			<p class="task-desc">{{ truncatedDesc }}</p>
		</div>
		<div class="task-footer">
			<div class="task-timing">
				<span v-if="task.startDate" class="start-date"
					>Start: {{ task.startDate }}</span
				>
				<span v-if="task.endDate" class="end-date"
					>End: {{ task.endDate }}</span
				>
				<span class="today-tracking">Today: {{ task.todayTrackingTime }}</span>
			</div>
			<div class="task-actions">
				<button @click="toggleTracking" class="btn-action">
					{{ task.isTracking ? 'Pause' : 'Start' }}
				</button>
				<button @click="showMoreDetails" class="btn-action">More</button>
				<button @click="deleteTask" class="btn-action btn-delete">
					Delete
				</button>
			</div>
		</div>

		<div class="task-status-dropdown" v-if="isStatusDropdownVisible">
			<ul>
				<li @click="changeStatus('Not Started')">Not Started</li>
				<li @click="changeStatus('In Progress')">In Progress</li>
				<li @click="changeStatus('Completed')">Completed</li>
			</ul>
		</div>
	</li>
</template>

<script>
export default {
	props: {
		task: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			isStatusDropdownVisible: false,
		};
	},
	computed: {
		statusClass() {
			switch (this.task.status) {
				case 'Not Started':
					return 'status-not-started';
				case 'In Progress':
					return 'status-in-progress';
				case 'Completed':
					return 'status-completed';
			}
		},
		truncatedDesc() {
			return this.task.desc.length > 50
				? this.task.desc.substring(0, 50) + '...'
				: this.task.desc;
		},
	},
	methods: {
		toggleTracking() {
			// Логика для переключения состояния трекера
		},
		showMoreDetails() {
			// Логика для отображения дополнительных деталей
		},
		deleteTask() {
			// Логика для удаления задачи
		},
		changeStatus(status) {
			this.task.status = status;
			this.isStatusDropdownVisible = false;
		},
	},
};
</script>
