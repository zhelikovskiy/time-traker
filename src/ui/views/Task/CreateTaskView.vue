<template>
	<div class="task-form">
		<form @submit.prevent="onSubmit">
			<label for="name">Название:</label>
			<input type="text" id="name" v-model="form.name" required />
			<br />

			<label for="description">Описание:</label>
			<textarea id="description" v-model="form.description"></textarea>
			<br />

			<label for="startDate">Дата начала:</label>
			<input type="date" id="startDate" v-model="form.startDate" />
			<br />

			<label for="endDate">Дата конца:</label>
			<input type="date" id="endDate" v-model="form.endDate" />
			<br />

			<button type="submit">Создать</button>
		</form>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useTaskStore } from '../../store';
import { useRouter } from 'vue-router';

export default defineComponent({
	name: 'AddTaskView',
	setup() {
		const taskStore = useTaskStore();
		const router = useRouter();

		const form = ref({
			name: '',
			description: '',
			startDate: '',
			endDate: '',
		});

		const onSubmit = async () => {
			const newTask: CreateTaskData = {
				title: form.value.name,
				description: form.value.description,
				startDate: new Date(form.value.startDate),
				endDate: form.value.endDate ? new Date(form.value.endDate) : undefined,
			};

			await taskStore.createTask(newTask);
			router.push({ name: 'task-list' });
		};

		return {
			form,
			onSubmit,
		};
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
