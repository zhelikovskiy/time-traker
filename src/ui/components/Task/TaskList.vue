<template>
	<ul class="task-list">
		<TaskListItem
			v-for="task in tasks"
			:key="task.id"
			:task="task"
			:onDelete="onDelete"
		/>
	</ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskListItem from './TaskListItem.vue';

export default defineComponent({
	name: 'TaskList',
	components: { TaskListItem },
	props: {
		tasks: {
			type: Array<Task>,
			required: true,
		},
		onDelete: {
			type: Function,
			required: true,
		},
	},
	setup() {},
});
</script>

<style scoped>
.task-list {
	width: 100%; /* Список занимает всю ширину */
	margin: 10px 0; /*  Отступы сверху и снизу */
	padding: 0; /*  Убираем отступы по умолчанию у ul */
	list-style: none; /* Убираем маркеры списка */
}
</style>
