<template>
	<div class="home">
		<p>{{ title }}</p>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
	name: 'HomeView',

	setup() {
		const title = ref(window.electron.getTasks());

		return { title };
	},
});
</script>
