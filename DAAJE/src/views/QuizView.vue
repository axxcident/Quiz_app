<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import TheQuestion from '../components/TheQuestion.vue';
import QuizHeader from '../components/QuizHeader.vue';
import axios from 'axios';

const currentQuestionIndex = ref(0);

const route = useRoute();
const quizId = parseInt(route.params.id);

const result = await axios.get('http://localhost:8080/quiz_questions')
const quizes = ref(result.data);

const quizToShow = quizes.value.find(quiz => quiz.id === quizId)

</script>

<template>
	<div>
		<QuizHeader />
		<div>
			<TheQuestion :question="quizToShow.questions[currentQuestionIndex]" />
		</div>
	</div>
</template>