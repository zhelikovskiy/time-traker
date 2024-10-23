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
			<TaskList v-if="currentTab === 'tasks'" />
			<p v-if="currentTab === 'statistics'">Statistics page</p>
		</div>
	</div>
</template>

<script>
import TaskList from './components/Task-List.vue';

export default {
	components: {
		TaskList,
	},
	data() {
		return {
			currentTab: 'tasks',
		};
	},
};
</script>
