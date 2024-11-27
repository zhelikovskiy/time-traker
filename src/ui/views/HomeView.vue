<template>
	<div class="home">
		<p>{{ title }}</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'HomeView',

	setup() {
		const title = `It's a home page of my application. Named: Time-Tracker.`;

		return { title };
	},
});
</script>
