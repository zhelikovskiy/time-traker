<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="name">Name:</label>
			<input v-model="task.name" type="text" id="name" name="name" required />
		</div>
		<div>
			<label for="description">Description:</label>
			<input
				v-model="task.description"
				type="text"
				id="description"
				name="description"
			/>
		</div>
		<div>
			<label for="startDate">Start Date:</label>
			<input
				v-model="task.startDate"
				type="date"
				id="startDate"
				name="startDate"
				required
			/>
		</div>
		<div>
			<label for="endDate">End Date:</label>
			<input v-model="task.endDate" type="date" id="endDate" name="endDate" />
		</div>
		<div>
			<label for="status">Status:</label>
			<select id="status" v-model="task.status" required>
				<option value="pending">Pending</option>

				<option value="in-progress">In Progress</option>

				<option value="completed">Completed</option>
			</select>
		</div>
		<button type="submit">Create Task</button>
	</form>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue';

const props = defineProps({
	id: {
		type: Object,
		required: false,
	},
});

const task = ref({});

onMounted(async () => {
	try {
		if (props.id) {
			console.log(task.value);
			task.value = await window.ipc.getTaskInfo(props.id);
		}
	} catch (error) {}
});

const submitForm = async () => {
	try {
		if (props.id) {
			//await window.ipc.updateTask(props.id, task.value);
			alert('Task updated successfully');
		} else {
			//await window.ipc.createTask(task.value);
			alert('Task created successfully');
		}
	} catch (error) {
		console.error('Error creating task:', error);
	}
};
</script>
