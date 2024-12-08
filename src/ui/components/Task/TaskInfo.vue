<template>
	<div class="task-info" v-if="task">
		<h2 class="task-title">{{ task.title }}</h2>
		<p class="task-description">{{ task.description }}</p>
		<span class="task-status" :class="`status-${task.status.toLowerCase()}`">{{
			task.status
		}}</span>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	name: 'TaskInfo',
	props: {
		task: {
			type: Object as PropType<Task>,
			required: false,
		},
	},
});
</script>

<style scoped>
.task-info {
	padding: 20px;
	border: 1px solid #eee;
	border-radius: 8px;
	background-color: #fff;
	margin-bottom: 15px; /*  Отступ снизу */
}

.task-title {
	margin-top: 0; /*  Убираем верхний отступ */
	margin-bottom: 10px; /*  Отступ снизу */
}

.task-description {
	margin-bottom: 10px; /*  Отступ снизу */
}

.task-status {
	font-weight: bold;
	padding: 4px 8px;
	border-radius: 4px;
}

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
</style>
