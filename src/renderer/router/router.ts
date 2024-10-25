import TaskList from '../components/Task-List.vue';
import Statistics from '../components/Statistics.vue';
import TaskInfo from '../components/Task-Info.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/tasks',
		name: 'TaskList',
		component: TaskList,
	},
	{
		path: '/statistics',
		name: 'Statistics',
		component: Statistics,
	},
	{
		path: '/task/:id',
		component: TaskInfo,
		name: 'TaskInfo',
	},
	{
		path: '/',
		redirect: '/tasks',
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
