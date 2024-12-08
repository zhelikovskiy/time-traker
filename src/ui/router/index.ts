import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/HomeView.vue'),
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue'),
		},
		{
			path: '/task/:id',
			name: 'task',
			component: () => import('../views/Task/TaskView.vue'),
			props: true,
		},
		{
			path: '/task/create',
			name: 'create-task',
			component: () => import('../views/Task/CreateTaskView.vue'),
		},
		{
			path: '/task/update/:id',
			name: 'update-task',
			component: () => import('../views/Task/UpdateTaskView.vue'),
			props: true,
		},
		{
			path: '/task/list',
			name: 'tasks',
			component: () => import('../views/Task/TasksView.vue'),
		},
	],
});
