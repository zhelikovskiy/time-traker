<template>
	<li>
		<h2>{{ task.name }}</h2>
		<p>Start date: {{ task.startDate }}</p>
		<p v-if="task.endDate">End date: {{ task.endDate }}</p>
		<label>Time Tracked: {{ formattedTime }}</label>
		<button @click="toggleTimer">{{ isRunning ? 'Stop' : 'Start' }}</button>
		<button @click="deleteHandler(task.id)">Delete</button>
		<RouterLink :to="`/task-info/${task.id}`">View Details</RouterLink>
	</li>
</template>

<script setup>
import { defineProps, ref, computed, onUnmounted } from 'vue';

const props = defineProps({
	task: {
		type: Object,
		required: true,
	},
	deleteHandler: {
		type: Function,
		required: true,
	},
});

const isRunning = ref(false);
const timerValue = ref(0);
const starTime = ref(null);

const timeData = ref({
	startTime: null,
	endTime: null,
	timeSpent: 0,
});

let timerFrame;

const formattedTime = computed(() => {
	const hours = Math.floor(timerValue.value / 3600);
	const minutes = Math.floor((timerValue.value % 3600) / 60);
	const seconds = timerValue.value % 60;
	return `${hours}h ${minutes}m ${seconds}s`;
});

const startTimer = () => {
	starTime.value = Date.now() - timerValue.value * 1000;
	isRunning.value = true;
	timeData.value.startTime = Date.now();
	updateTimer();
};

const updateTimer = () => {
	if (starTime.value) {
		timerValue.value = Math.floor((Date.now() - starTime.value) / 1000);
		timerFrame = requestAnimationFrame(updateTimer);
	}
};

const stopTimer = async () => {
	isRunning.value = false;
	cancelAnimationFrame(timerFrame);

	timeData.value.endTime = Date.now();
	timeData.value.timeSpent = timeData.value.endTime - timeData.value.startTime;

	if (timeData.value.timeSpent > 3) {
		const intervalData = {
			taskId: props.task.id,
			startTime: new Date(timeData.value.startTime),
			endTime: new Date(timeData.value.endTime),
		};
		await window.ipc.saveTimeInterval(intervalData);
	}
};

const toggleTimer = () => {
	if (isRunning.value) {
		stopTimer();
	} else {
		startTimer();
	}
};

onUnmounted(() => {
	cancelAnimationFrame(timerFrame);
});
</script>
