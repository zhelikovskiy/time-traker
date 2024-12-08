<template>
	<div id="task-view">
		<TaskInfo :task="task" />
	</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import TaskInfo from '../../components/Task/TaskInfo.vue';
import { useTaskStore } from '../../store';

export default defineComponent({
	name: 'TaskView',
	components: { TaskInfo },
	props: {
		id: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		const taskStore = useTaskStore();

		const task = ref(taskStore.getTaskById(props.id));

		return { task };
	},
});
</script>
