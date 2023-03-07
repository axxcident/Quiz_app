<script setup>
import { useRoute } from "vue-router";
import { useResultStore } from "../stores/resultStore"
import { ref, computed } from "vue";
import TheQuestion from "../components/TheQuestion.vue";
import TheResults from "../components/TheResults.vue";
import QuizHeader from "../components/QuizHeader.vue";
import axios from "axios";
import ProgressBar from "../components/ProgressBar.vue";
import UserAvatar from "../components/UserAvatar.vue";
import TimerComponent from "../components/TimerComponent.vue";

const currentQuestionIndex = ref(0);
const sumOfCorrectAnswers = ref(0);
const showResults = ref(false);

const route = useRoute();
const paramsId = parseInt(route.params.id);

const resultStore = useResultStore();

resultStore;

const result = await axios.get("http://localhost:8080/quiz_questions");
const quizes = ref(result.data);

const quizToShow = quizes.value.find((quiz) => quiz.id === paramsId);
const quizStatus = computed(
  () => `${currentQuestionIndex.value}/${quizToShow.questions.length}`
);
const completionPercentage = computed(
  () => `${(currentQuestionIndex.value / quizToShow.questions.length) * 100}%`
);

const onChoiceSelected = (isCorrect) => {
  if (isCorrect) {
    sumOfCorrectAnswers.value++;
  }

  if (quizToShow.questions.length - 1 === currentQuestionIndex.value) {
    showResults.value = true;
  }

  currentQuestionIndex.value++;
};
</script>

<template>
  <div>
    <section class="pt-medium">
      <UserAvatar :userName="userName" :userRole="userRole" />
      <div class="hero-section">
        <h1>Vue.js Quiz</h1>
        <TimerComponent />
      </div>
    </section>
    <main class="main-content">
      <QuizHeader :quizStatus="quizStatus" :completionPercentage="completionPercentage" />
      <ProgressBar :currentQuestion="currentQuestionIndex + 1" />
      <div>
        <TheQuestion v-if="!showResults" :question="quizToShow.questions[currentQuestionIndex]"
          @selectChoice="onChoiceSelected" />

        <TheResults v-else :quizLength="quizToShow.questions.length" :sumOfCorrectAnswers="sumOfCorrectAnswers" />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  components: {
    UserAvatar,
    ProgressBar,
    TimerComponent,
  },
  data() {
    return {
      currentQuestion: 1,
      userName: "Richard",
      userRole: "JavaScript Educator",
    };
  },
};
</script>

<style scoped>
.pt-medium {
  padding-top: 20px;
}

.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
</style>
