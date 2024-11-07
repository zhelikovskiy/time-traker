import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		redirect: '/task-list',
	},
	{
		path: '/task-list',
		name: 'TaskList',
		component: () => import('./components/Task-List.vue'),
	},
	{
		path: '/task-info/:id',
		name: 'TaskInfo',
		component: () => import('./components/Task-Info.vue'),
		props: true,
	},
	{
		path: '/create-task',
		name: 'CreateTask',
		component: () => import('./components/Task-Form.vue'),
	},
	{
		path: '/update-task/:id',
		name: 'UpdateTask',
		component: () => import('./components/Task-Form.vue'),
		props: true,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
