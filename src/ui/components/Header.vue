<template>
	<header>
		<nav>
			<ul>
				<li><router-link :to="{ name: 'home' }">Home</router-link></li>
				<li>
					<router-link :to="{ name: 'create-task' }">New task</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'tasks' }">Task List</router-link>
				</li>
				<li><router-link :to="{ name: 'task' }">Task</router-link></li>
				<li><router-link :to="{ name: 'about' }">About</router-link></li>
			</ul>
		</nav>
	</header>
</template>

<script lang="ts">
export default {
	name: 'Header',
};
</script>

<style scoped>
/* Стили для самого хедера */
header {
	background-color: #333;
	padding: 10px 0;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 10; /* Чтобы navbar был поверх других элементов */
}

nav ul {
	display: flex;
	justify-content: center; /* Центрируем навигационные ссылки */
	padding: 0;
	margin: 0;
	list-style: none;
}

nav li {
	margin: 0 15px; /* Отступы между ссылками */
}

nav a {
	color: white;
	text-decoration: none;
	font-size: 16px;
}

nav a:hover {
	text-decoration: underline;
}
</style>
