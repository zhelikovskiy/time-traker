<template>
	<ul class="task-list">
		<TaskListItem v-for="task in tasks" :key="task.id" :task="task" />
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
	},
	setup() {},
});
</script>

<style scoped>
.task-list {
	width: calc(
		100% - 40px
	); /*  Ширина почти на всё окно, с отступами по 20px слева и справа */
	padding: 0; /*  Убираем отступы по умолчанию у ul */
	margin: 20px; /*  Внешние отступы */
	border-radius: 8px; /*  Закругленные углы */
	list-style: none; /*  Убираем маркеры списка */
}

.task-list li {
	/*  Стили для элементов списка (TaskListItem) */
	margin-bottom: 5px; /*  Небольшой отступ между элементами */
}
</style>
