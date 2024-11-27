<template>
	<div class="create-task-view">
		<TaskForm @submit="onSubmit" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTaskStore } from '../../store';
import { useRouter } from 'vue-router';
import TaskForm from '../../components/Task/TaskForm.vue';

export default defineComponent({
	name: 'CreateTaskView',
	components: { TaskForm },

	setup() {
		const taskStore = useTaskStore();
		const router = useRouter();

		const onSubmit = async (data: any) => {
			if (data) {
				const newTask: CreateTaskData = {
					title: data.title,
					description: data.description,
					startDate: new Date(data.startDate),
					endDate: data.endDate ? new Date(data.endDate) : undefined,
				};

				try {
					await taskStore.createTask(newTask);
					router.push({ name: 'tasks' });
				} catch (error) {
					alert(error);
				}
			}
		};

		return {
			onSubmit,
		};
	},
});
</script>
