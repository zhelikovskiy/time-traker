import TaskList from '../components/Task-List.vue';
import Statistics from '../components/Statistics.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: TaskList,
	},
	{
		path: '/statistics',
		component: Statistics,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
