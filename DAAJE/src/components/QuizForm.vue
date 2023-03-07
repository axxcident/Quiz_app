<template>
  <div>
    <div class="m-space">
      <AppButton
      @click="showForm = true"
        color="light"
        size="medium"
        width="full-width"
        fontWeight=""
        padding="p-large"
        >Create Quiz
      </AppButton>
    </div>
    <!-- <button @click="showForm = true">Create Quiz</button
    > --><!---Click event som triggar igång formen-->

    <form v-if="showForm" @submit.prevent="submitForm">
      <!---Submitprevent så den kan routas till egen backend-->
      <!---Gör en V-if som initialt gömmer formen som sen blir triggad av knappklicket-->
      <h2>Create Quiz</h2>
      <div v-for="(question, index) in questions" :key="index">
        <!---Loopar igenom varje question och använder index för att identifiera positionen i varje element-->
        <label :for="'question-' + index">Question {{ index + 1 }}</label>
        <input
          :id="'question-' + index"
          type="text"
          v-model="question.text"
          required
        /><!---Använder enkel V-model och binder den till question arrayen-->
        <label :for="'answer-' + index">Answer {{ index + 1 }}</label>
        <input
          :id="'answer-' + index"
          type="text"
          v-model="question.answer"
          required
        />
      </div>
      <div>
        <button type="button" @click="addQuestion">Add Question</button
        ><!---Enkelt clickevent för att lägga till råga-->
        <button type="submit">Create</button>
      </div>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      <!--Tanke om något error message ifall inte det går att skapa quizet, men behöver hjälp med backend konfig-->
    </form>
  </div>
    <div>
        <button @click="showForm = true">Create Quiz</button>
        <!---Click event som triggar igång formen-->
        <form v-if="showForm" @submit.prevent="submitForm">
            <!---Submitprevent så den kan routas till egen backend-->
            <!---Gör en V-if som initialt gömmer formen som sen blir triggad av knappklicket-->
            <h2>Create Quiz</h2>
            <div v-for="(question, index) in questions" :key="index">
                <!---Loopar igenom varje question och använder index för att identifiera positionen i varje element-->
                <label :for="'question-' + index"
                    >Question {{ index + 1 }}</label
                >
                <input
                    :id="'question-' + index"
                    type="text"
                    v-model="question.text"
                    required
                />
                <div
                    v-for="(option, optionIndex) in question.options"
                    :key="optionIndex"
                >
                    <label :for="'option-' + index + '-' + optionIndex"
                        >Option {{ optionIndex + 1 }}</label
                    >
                    <input
                        :id="'option-' + index + '-' + optionIndex"
                        type="text"
                        v-model="option.text"
                        required
                    /><!---Använder enkel V-model och binder den till question arrayen-->
                    <input
                        type="radio"
                        :id="'correct-' + index + '-' + optionIndex"
                        :name="'correct-' + index"
                        v-model="question.correctAnswer"
                        :value="option.id"
                    />
                    <label :for="'correct-' + index + '-' + optionIndex"
                        >Correct answer</label
                    >
                </div>
            </div>
            <div>
                <button type="button" @click="addQuestion">Add Question</button>
                <button type="submit">Create</button>
            </div>
            <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
        </form>
    </div>
</template>

<script>
import AppButton from "./AppButton.vue";

export default {
  data() {
    return {
      showForm: false,
      questions: [{ text: "", answer: "" }],
      createdQuiz: null,
      errorMessage: "", //Felmeddelande om inte quizet går att visas
    };
  },
  methods: {
    addQuestion() {
      this.questions.push({ text: "", answer: "" }); //Enkel funktion för att kunna lägga till obegränsat med frågor
    },
  },
  components: { AppButton },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 600px;
}
form input {
  margin-bottom: 10px;
}
.m-space {
    margin: 3rem 0;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
