<template>
	<div>
		<h3>{{ quiz.name }}</h3>
		<img :src="quiz.img" alt="">
		<p>{{ quiz.questions.length }}st frågor</p>
		<button>Start Quiz!</button>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';

const { quiz } = defineProps(['quiz']);

</script>

<style scoped>
div {
	border: 1px solid black;
	border-radius: 1rem;
	padding: .5rem;
}

img {
	widows: 150px;
	height: 150px;
}
</style>