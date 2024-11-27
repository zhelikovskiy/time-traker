<template>
	<div class="task-form">
		<form @submit.prevent="onSubmit">
			<label for="title">Title:</label>
			<input type="text" id="title" v-model="form.title" required />
			<br />

			<label for="description">Description:</label>
			<textarea id="description" v-model="form.description"></textarea>
			<br />

			<label for="startDate">Start date:</label>
			<input type="date" id="startDate" v-model="form.startDate" />
			<br />

			<label for="endDate">End date:</label>
			<input type="date" id="endDate" v-model="form.endDate" />
			<br />

			<button type="submit">{{ task ? 'Update' : 'Create' }}</button>
		</form>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch, toRaw } from 'vue';

export default defineComponent({
	name: 'TaskForm',
	props: {
		task: {
			type: Object as PropType<Task>,
			required: false,
		},
		onSubmit: {
			type: Function,
			required: true,
		},
	},
	setup(props) {
		const form = ref({
			title: '',
			description: '',
			startDate: '',
			endDate: '',
		});

		watch(
			() => props.task,
			(newTask) => {
				if (newTask) {
					form.value.title = newTask.title || '';
					form.value.description = newTask.description || '';
				}
			}
		);

		const onSubmit = () => {
			props.onSubmit(toRaw(form.value));
		};

		return { form, onSubmit };
	},
});
</script>

<style scoped>
.task-form {
	width: 100%; /* Ширина формы */
	max-width: 500px; /* Максимальная ширина формы */
	padding: 20px;
	border: 1px solid #ddd; /*  Легкая рамка */
	border-radius: 8px; /*  Скругленные углы */
	background-color: white; /*  Белый фон */
	box-sizing: border-box;
}

.task-form label {
	display: block; /* Лейблы занимают всю ширину */
	margin-bottom: 5px; /*  Отступ снизу */
	font-weight: bold;
}

.task-form input,
.task-form textarea {
	width: calc(100% - 18px); /*  Поля ввода занимают всю доступную ширину */
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	margin-bottom: 10px;
}

.task-form textarea {
	min-height: 100px; /*  Минимальная высота textarea */
	resize: vertical; /*  Разрешаем изменять размер только по вертикали */
}

.task-form button {
	background-color: #4caf50; /*  Зеленый цвет кнопки */
	color: white;
	padding: 10px 15px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}
</style>
