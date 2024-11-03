<template>
	<div class="task-info">
		<h3>
			{{ task.name }}<spam>{{ task.status }}</spam>
		</h3>
		<p class="task-desc">{{ task.description }}</p>
	</div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
});

const task = ref({});

onMounted(async () => {
	try {
		task.value = await window.ipc.getTaskInfo(props.id);
	} catch (error) {
		console.error('Error fetching task:', error);
	}
});
</script>
