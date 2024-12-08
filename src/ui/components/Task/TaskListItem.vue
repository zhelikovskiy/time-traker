<template>
	<li class="task-item">
		<h3 class="task-title">{{ task.title }}</h3>
		<p v-if="task.description" class="task-description">
			{{ task.description }}
		</p>
		<span class="task-status" :class="`status-${task.status.toLowerCase()}`">{{
			task.status
		}}</span>
		<button class="more-button" @click="onMore()">More</button>
		<button class="delete-button" @click="onDelete(task.id)">Delete</button>
	</li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
	name: 'TaskListItem',
	props: {
		task: {
			type: Object as PropType<Task>,
			required: true,
		},
		onDelete: {
			type: Function,
			required: true,
		},
	},
	setup(props) {
		const router = useRouter();

		const onDelete = async (id: string) => {
			await props.onDelete(id);
		};

		const onMore = () => {
			router.push({ name: 'task', params: { id: props.task.id } });
		};

		return { onDelete, onMore };
	},
});
</script>

<style scoped>
.task-item {
	display: flex;
	align-items: center; /*  Выравнивание элементов по вертикали */
	justify-content: space-between; /* Распределяем элементы по ширине */
	padding: 10px;
	margin-bottom: 8px; /* Отступ между элементами списка */
	border: 1px solid #eee; /*  Рамка */
	border-radius: 5px; /*  Скругленные углы */
	background-color: white; /* Фон */
	box-sizing: border-box;
}

.task-title {
	margin: 0; /* Убираем отступ у заголовка */
	flex-grow: 1; /* Заголовок занимает доступное пространство */
}

.task-description {
	margin: 5px 0; /*  Отступы сверху и снизу */
	padding: 0 10px 0 10px;
}

.task-status {
	font-weight: bold;
	padding: 3px 6px;
	border-radius: 3px;
	white-space: nowrap; /*  Текст статуса не переносится */
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

.more-button {
	background-color: #89dd94; /* Красный цвет */
	color: white;
	padding: 8px 12px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	margin-left: 10px;
}

.delete-button {
	background-color: #dc3545; /* Красный цвет */
	color: white;
	padding: 8px 12px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	margin-left: 10px;
}
</style>
