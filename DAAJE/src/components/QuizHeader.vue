<template>
	<header>
		<h5>Fråga 1/10</h5>
		<div class="progress">
			<div class="completion"></div>
		</div>
	</header>
</template>

<style scoped>
header {
	margin: 1rem 0;
}

.progress {
	width: 16rem;
	height: 2rem;
	border: 3px solid purple;
}

.completion {
	height: 100%;
	width: 66%;
	background-color: purple;
}
</style>
