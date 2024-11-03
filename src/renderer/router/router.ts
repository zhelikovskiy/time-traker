import TaskList from '../components/task-list/Task-List.vue';
import Statistics from '../components/Statistics.vue';
import TaskInfo from '../components/task/Task-Info.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/task-list',
		name: 'TaskList',
		component: TaskList,
	},
	{
		path: '/statistics',
		name: 'Statistics',
		component: Statistics,
	},
	{
		path: '/task-info/:id',
		component: TaskInfo,
		name: 'TaskInfo',
		props: true,
	},
	{
		path: '/',
		redirect: '/task-list',
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
