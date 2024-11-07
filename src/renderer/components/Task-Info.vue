<template>
	<h1>Task Info</h1>
	<RouterLink :to="{ name: 'UpdateTask', params: { id: task.id } }"
		>Edit</RouterLink
	>
	<p>Name: {{ task.name }}</p>
	<P>Description: {{ task.description }}</P>
	<p>Status: {{ task.status }}</p>
	<p>Start Date: {{ task.startDate }}</p>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue';

const task = ref({});

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
});

onMounted(async () => {
	try {
		task.value = await window.ipc.getTaskInfo(props.id);
	} catch (error) {
		console.error('Error fetching task:', error);
	}
});
</script>
