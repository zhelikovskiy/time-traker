<template>
	<li>
		<h2>{{ task.name }}</h2>
		<p>Start date: {{ task.startDate }}</p>
		<p v-if="task.endDate">End date: {{ task.endDate }}"></p>
		<RouterLink :to="`/task-info/${task.id}`">View Details</RouterLink>
	</li>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
	task: {
		type: Object,
		required: true,
	},
});
</script>
