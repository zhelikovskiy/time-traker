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
			path: '/task',
			name: 'task',
			component: () => import('../views/Task/TaskView.vue'),
		},
		{
			path: '/task/create',
			name: 'create-task',
			component: () => import('../views/Task/CreateTaskView.vue'),
		},
		{
			path: '/task/list',
			name: 'task-list',
			component: () => import('../views/Task/TaskListView.vue'),
		},
	],
});
