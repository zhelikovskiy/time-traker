<template>
	<div id="app-vue">
		<div class="tabs">
			<button
				@click="currentTab = 'tasks'"
				:class="{ active: currentTab === 'tasks' }"
			>
				Tasks
			</button>
			<button
				@click="currentTab = 'statistics'"
				:class="{ active: currentTab === 'statistics' }"
			>
				Statistics
			</button>
		</div>

		<div class="main-container">
			<p v-if="currentTab === 'tasks'">Tasks page</p>
			<p v-if="currentTab === 'statistics'">Statistics page</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentTab: 'tasks',
		};
	},
};
</script>
