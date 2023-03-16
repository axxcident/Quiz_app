<script setup>
import { useRoute } from "vue-router";
import { useResultStore } from "../stores/ResultStore"
import { ref, computed } from "vue";
import TheQuestion from "../components/TheQuestion.vue";
import TheResults from "../components/TheResults.vue";
import axios from "axios";
import ProgressBar from "../components/ProgressBar.vue";
import UserAvatar from "../components/UserAvatar.vue";
import TimerComponent from "../components/TimerComponent.vue";

const currentQuestionIndex = ref(0);
const sumOfCorrectAnswers = ref(0);
const studentId = ref(0);
const showResults = ref(false);
let fetchedStudentResults = [];

const route = useRoute();
const paramsId = parseInt(route.params.id);

const resultStore = useResultStore();

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

    // POST results to backend
    // när showResults.value = true, är quizzet klart och skicka in
    // värdet att skicka, resultStore.results
    const resultData = resultStore.results
    console.log(resultData)

    // send resultData to pinia just to keep working
    resultStore.addResultSum({ ...resultData })
    // **relative pathing will result in the request being made to 127.0.0.1**
    //   The request needs to go to "http://localhost:8080". Proxying only changes
    //   the origin header, not the request path. **

    axios.post('http://localhost:8080/post/result?id=01', {
      resultData
    })
      .then(response => {
        useResultStore.fetchedResults = response
        console.log(fetchedStudentResults);
      })
      .catch(error => {
        console.log(error);
      });

    resultStore.results = [];

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
      <ProgressBar :currentQuestion="currentQuestionIndex + 1" :quizToShow="quizToShow" />
      <div>
        <TheQuestion v-if="!showResults" :question="quizToShow.questions[currentQuestionIndex]"
          @selectChoice="onChoiceSelected" @addToResult="resultStore.addResult($event, { question, choice })" />

        <TheResults v-else :studentId="studentId" :quizLength="quizToShow.questions.length"
          :sumOfCorrectAnswers="sumOfCorrectAnswers" />
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
