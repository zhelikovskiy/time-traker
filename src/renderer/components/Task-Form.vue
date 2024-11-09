<template>
	<div>
		<h2>{{ id ? 'Edit task' : 'Create task' }}</h2>

		<form @submit.prevent="submit">
			<div>
				<label for="name">Name:</label>
				<input type="text" id="name" v-model="task.name" />
			</div>

			<div>
				<label for="description">Description:</label>
				<textarea id="description" v-model="task.description"></textarea>
			</div>

			<div>
				<label for="startDate">Start Date:</label>
				<input
					type="datetime-local"
					id="startDate"
					v-model="task.startDate"
					:min="new Date().toISOString().slice(0, 16)"
					required
				/>
			</div>

			<div>
				<label for="endDate">End Date:</label>
				<input type="date" id="endDate" v-model="task.endDate" />
			</div>

			<div v-if="id">
				<label for="status">Status:</label>
				<select id="status" v-model="task.status">
					<option value="todo">To Do</option>
					<option value="doing">Doing</option>
					<option value="done">Done</option>
				</select>
			</div>

			<button type="submit">{{ id ? 'Update' : 'Create' }}</button>
		</form>
	</div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue';

const props = defineProps({
	id: {
		type: String,
		required: false,
	},
});

const task = ref({
	name: '',
	description: '',
	status: 'todo',
	startDate: '',
	endDate: null,
});

onMounted(async () => {
	try {
		if (props.id) {
			const response = await window.ipc.getTaskInfo(props.id);

			task.value = response;
			if (response.endDate) task.value.endDate = toOnlyDate(response.endDate);
		} else {
			task.value.startDate = new Date().toISOString().slice(0, 16);
		}
	} catch (error) {
		console.error('Error fetching task:', error);
	}
});

const submit = async () => {
	try {
		if (props.id) {
			console.log(task.value);
		} else {
			const taskData = {
				name: task.value.name,
				description: task.value.description,
				status: task.value.status,
				startDate: new Date(task.value.startDate),
				endDate: task.value.endDate
					? new Date(task.value.endDate)
					: task.value.endDate,
			};

			await window.ipc.createTask(taskData);
		}
	} catch (error) {
		console.error('Error saving task:', error);
	}
};
</script>
