<script setup>
import { useRoute } from 'vue-router';
import { ref, watch, computed } from 'vue';
import TheQuestion from '../components/TheQuestion.vue';
import QuizHeader from '../components/QuizHeader.vue';
import axios from 'axios';

const currentQuestionIndex = ref(0);

const route = useRoute();
const paramsId = parseInt(route.params.id);

const result = await axios.get('http://localhost:8080/quiz_questions');
const quizes = ref(result.data);

const quizToShow = quizes.value.find(quiz => quiz.id === paramsId);
const quizStatus = computed(() => `${currentQuestionIndex.value}/${quizToShow.questions.length}`)

</script>

<template>
	<div>
		<QuizHeader :quizStatus="quizStatus" />
		<div>
			<TheQuestion :question="quizToShow.questions[currentQuestionIndex]" />
		</div>
		<button @click="currentQuestionIndex++">Nästa fråga</button>
	</div>
</template>