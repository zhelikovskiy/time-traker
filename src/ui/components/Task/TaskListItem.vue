<template>
	<li class="task-item">
		<h3 class="task-title">{{ task.title }}</h3>
		<p v-if="task.description" class="task-description">
			{{ task.description }}
		</p>
		<span class="task-status" :class="`status-${task.status.toLowerCase()}`"
			>={{ task.status }}</span
		>
	</li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	name: 'TaskListItem',
	props: {
		task: {
			type: Object as PropType<Task>,
			required: true,
		},
	},
	setup() {},
});
</script>

<style scoped>
.task-item {
	font-family: sans-serif;
	padding: 15px;
	margin-bottom: 10px;
	border: 1px solid #eee;
	border-radius: 5px;
	box-sizing: border-box;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	position: relative; /* Для позиционирования кнопки "More" */
}

.task-name {
	margin-top: 0; /* Убираем верхний отступ у заголовка */
}

.task-dates {
	font-size: 0.9em;
	color: #777; /* Более светлый цвет для дат */
	margin-bottom: 5px;
}

.task-status {
	font-weight: bold;
	margin-right: 10px; /* Отступ справа от статуса */
	padding: 3px 6px; /* Отступы внутри span */
	border-radius: 3px;
}

/* Стили для разных статусов */
.status-todo {
	background-color: #f0ad4e;
	color: white;
}
.status-doing {
	background-color: #42b983;
	color: white;
}
.status-done {
	background-color: #4caf50;
	color: white;
}

.task-item button {
	background-color: #4caf50;
	color: white;
	padding: 8px 12px;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	margin-right: 5px;
}

/* Позиционирование кнопки More */
.task-item button:last-of-type {
	position: absolute;
	top: 10px;
	right: 10px;
}

.more-details {
	margin-top: 10px; /* Отступ сверху для дополнительных деталей */
}
</style>
