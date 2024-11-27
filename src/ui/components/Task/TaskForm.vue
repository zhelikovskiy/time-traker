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
	font-family: sans-serif; /*  Базовый шрифт */
	padding: 20px;
	border: 1px solid #eee; /* Легкая рамка */
	border-radius: 5px; /* Скругленные углы */
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Тень */
}

.task-form label {
	display: block; /* Занимать всю ширину */
	margin-bottom: 5px; /* Отступ снизу */
	font-weight: bold; /* Жирный текст */
}

.task-form input,
.task-form textarea {
	width: calc(100% - 22px); /*  Занимать всю ширину с учетом padding */
	padding: 8px; /* Внутренние отступы */
	border: 1px solid #ccc; /* Рамка */
	border-radius: 3px; /* Скругленные углы */
	box-sizing: border-box; /*  Учитывать padding и border в ширине */
	margin-bottom: 10px;
}

.task-form button {
	background-color: #4caf50; /* Зеленый цвет */
	color: white; /* Белый текст */
	padding: 10px 15px; /* Отступы */
	border: none; /* Без рамки */
	border-radius: 3px; /* Скругленные углы */
	cursor: pointer; /* Курсор-указатель */
}

.task-form button:hover {
	background-color: #45a049; /*  Более темный зеленый при наведении */
}
</style>
