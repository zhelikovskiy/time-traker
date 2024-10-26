<template>
	<div id="app-vue">
		<nav class="tabs">
			<RouterLink
				class="tab-btn"
				to="/task-list"
				:class="{ active: $route.path === '/task-list' }"
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
