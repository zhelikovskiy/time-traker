<template>
	<div id="app-vue">
		<nav class="tabs">
			<RouterLink
				class="tab-btn"
				to="/"
				:class="{ active: $route.path === '/' }"
				>Tasks</RouterLink
			>
			<RouterLink
				class="tab-btn"
				to="/statistics"
				:class="{ active: $route.path === '/statistics' }"
				>Statistics</RouterLink
			>
		</nav>

		<div class="main-container">
			<RouterView />
		</div>
	</div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
	setup() {
		const route = useRoute();

		const isActive = (path) => {
			return route.path === path;
		};

		return {
			isActive,
		};
	},
};
</script>
