<template>
	<div>
		<form @submit.prevent="onSubmit">
			<label
				>Название:
				<input type="text" v-model="form.name" />
			</label>
			<br />
			<label
				>Описание:
				<textarea v-model="form.description"></textarea>
			</label>
			<br />
			<label
				>Дата начала:
				<input type="date" v-model="form.startDate" />
			</label>
			<br />
			<label
				>Дата конца:
				<input type="date" v-model="form.endDate" />
			</label>
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
	name: 'create-task',
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
				name: form.value.name,
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
label {
	display: block;
	margin: 1em 0;
}

input,
textarea {
	display: block;
	margin: 0.5em 0;
}
</style>
