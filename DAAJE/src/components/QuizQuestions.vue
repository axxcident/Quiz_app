<template>
	<QuizCard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
</template>

<script setup>
// import questions from "../data/quizQuestions.json"



import QuizCard from "./QuizCard.vue";
import { ref } from 'vue'

const quizes = ref(questions);
</script>

<style scoped></style>