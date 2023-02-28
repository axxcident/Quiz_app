<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import TheQuestion from '../components/TheQuestion.vue';
import QuizHeader from '../components/QuizHeader.vue';

const currentQuestionIndex = ref(0);

const route = useRoute();
const quizId = parseInt(route.params.id);
</script>

<template>
	<div>
		<QuizHeader />
		<div>
			<TheQuestion />
		</div>
	</div>
</template>