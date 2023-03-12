<script setup>
import QuizForm from "../components/QuizForm.vue";
import QuizQuestions from "../components/QuizQuestions.vue";
</script>

<template>
  <Suspense>
    <div class="wrapper">
      <div class="hero-text">
        <h1>Welcome to your favorite Quiz App</h1>
        <h4>Select a category to start the quiz!</h4>
      </div>
      <main class="main-content">
        <div class="quiz-container">
          <QuizQuestions />
          <QuizForm />
        </div>
      </main>
    </div>
  </Suspense>
</template>

<style scoped>
.wrapper {
  height: 100%;
}
.hero-text {
  padding: 3rem 0.3rem;
  color: #d9d7d7;
}

.main-content {
  height: inherit;
  margin: 0 -20px;
  padding: 120px 20px 0 20px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;

  background: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(9px);
  backdrop-filter: blur(9px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.quiz-container {
  display: flex;
  flex-direction: column;
}
</style>
