<template>
	<li class="task-item">
		<div>
			<h3>{{ task.name }}</h3>
		</div>
		<div>
			<RouterLink :to="{ name: 'TaskInfo', params: { id: task.id } }"
				>More {{ task.id }}</RouterLink
			>
		</div>
	</li>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'TaskListItem',
	props: {
		task: {
			type: Object,
			required: true,
		},
	},
});
</script>
