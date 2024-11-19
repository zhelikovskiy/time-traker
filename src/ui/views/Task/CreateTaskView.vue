<template>
	<div>
		<form @submit.prevent="onSubmit">
			<label
				>Название:
				<input type="text" v-model="form.name" />
			</label>
			<br />
			<label
				>Описание:
				<textarea v-model="form.description"></textarea>
			</label>
			<br />
			<label
				>Дата начала:
				<input type="date" v-model="form.startDate" />
			</label>
			<br />
			<label
				>Дата конца:
				<input type="date" v-model="form.endDate" />
			</label>
			<br />
			<button type="submit">Создать</button>
		</form>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
	name: 'create-task',
	setup() {
		const form = ref({
			name: '',
			description: '',
			startDate: '',
			endDate: '',
		});

		const onSubmit = async () => {
			console.log(form.value);
		};

		return {
			form,
			onSubmit,
		};
	},
});
</script>

<style scoped>
label {
	display: block;
	margin: 1em 0;
}

input,
textarea {
	display: block;
	margin: 0.5em 0;
}
</style>
