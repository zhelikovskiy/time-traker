<template>
	<div id="update-task-view">
		<TaskForm @submit="onSubmit" :task="task" />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useTaskStore } from '../../store';
import { useRouter } from 'vue-router';
import TaskForm from '../../components/Task/TaskForm.vue';

export default defineComponent({
	name: 'UpdateTaskView',
	components: { TaskForm },
	props: {
		id: {
			type: String,
			required: true,
		},
	},

	setup(props) {
		const taskStore = useTaskStore();
		const router = useRouter();

		const task = ref(taskStore.getTaskById(props.id));

		const onSubmit = async (data: any) => {
			if (data) {
				const updatedTask: UpdateTaskData = {
					title: data.title,
					description: data.description,
					startDate: new Date(data.startDate),
					endDate: data.endDate ? new Date(data.endDate) : undefined,
				};

				await taskStore.updateTask(props.id, updatedTask);
				router.push({ name: 'tasks' });
			}
		};

		return {
			onSubmit,
			task,
		};
	},
});
</script>

<style scoped>
#update-task-view {
	display: flex;
	justify-content: center; /* Центрируем форму по горизонтали */
	align-items: center; /* Центрируем форму по вертикали */
	flex-grow: 1; /*  Занимаем всё доступное пространство */
}
</style>
