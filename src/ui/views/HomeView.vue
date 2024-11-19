<template>
	<div class="home">
		<p>Home page</p>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
	name: 'HomeView',
	setup() {
		onMounted(() => {
			window.electron.getTasks();
		});
	},
});
</script>
