import { CreateTaskFormHandler } from './components/task-form';

document
	.getElementById('task-form')
	?.addEventListener('submit', CreateTaskFormHandler);
