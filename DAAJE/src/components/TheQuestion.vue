<script setup>
import { defineProps } from 'vue';
const { question } = defineProps(['question']);
</script>

<template>
	<div class="question-container">
		<h3 class="question">
			{{ question.text }}
		</h3>
	</div>
	<div class="options-container">
		<div v-for="option in question.options" class="option">
			<p class="option-label">{{ option.label }}</p>
			<div class="option-value">
				{{ option.text }}
			</div>
		</div>
	</div>
</template>

<style scoped>
.question-container {
	margin: 1rem 0;
}

.question {
	margin-bottom: 1rem;
}

.option {
	display: flex;
	margin-bottom: 1rem;
	cursor: pointer;
}

.option-label {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(128, 0, 128, 0.60);
	width: 2rem;
	height: 2rem;
}

.option-value {
	background-color: lightgrey;
	width: 100%;
	padding: 0 1rem;
	height: 2rem;
}
</style>