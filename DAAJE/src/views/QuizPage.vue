<script setup>
import QuizForm from '../components/QuizForm.vue'
import QuizQuestions from '../components/QuizQuestions.vue';
</script>

<template>
    <div class="row">
        <div class="col">
            <h1>Quiz page view</h1>
            <div class="quiz-container">
                <QuizQuestions />
                <QuizForm />
            </div>
        </div>
    </div>
</template>

<style scoped>
.quiz-container {
    display: flex;
}
</style>
