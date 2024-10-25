<template>
	<div id="app-vue">
		<nav class="tabs">
			<RouterLink
				class="tab-btn"
				to="/tasks"
				:class="{ active: $route.path === '/tasks' }"
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
export default {};
</script>
