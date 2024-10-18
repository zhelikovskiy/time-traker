import handleCreateTaskForm from './components/create-task-form';
import taskList from './components/task-list';

window.ipc.onNewTaskCreated(taskList.handleAddNewTask);

document
	.getElementById('create-task-form')
	?.addEventListener('submit', handleCreateTaskForm);
