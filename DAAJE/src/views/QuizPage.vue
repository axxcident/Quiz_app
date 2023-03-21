<script setup>
import QuizForm from "../components/QuizForm.vue";
import UserAvatar from "../components/UserAvatar.vue";
import QuizQuestions from "../components/QuizQuestions.vue";

const props = defineProps({
  userName: String,
  userRole: String
})

</script>

<template>
  <Suspense>
    <div class="wrapper">
      <section class="pt-medium">
        <UserAvatar :userName="userName" :userRole="userRole" />
        <div class="hero-text">
          <h1>Welcome to your favorite Quiz App</h1>
          <h4>Select a category to start the quiz!</h4>
        </div>
      </section>
      <main class="main-content">
        <div class="quiz-container">
          <QuizQuestions />
          <!-- created a specific page instead, the card "Create Quiz" on homepage navigates to the page  -->
          <!-- <QuizForm /> -->
        </div>
      </main>
    </div>
  </Suspense>
</template>

<style scoped>
.pt-medium {
  padding-top: 20px;
}

.hero-text {
  padding: 3rem 0.3rem;
  color: #d9d7d7;
}

.main-content {
  height: 100vh;
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
