<template>
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
                showForm: false, //False initialt, tills användarinteraktion och då dyker det upp
                questions: [
                    //Array där texten kommer från användaren, flerval
                    {
                        text: '',
                        options: [
                            { id: 1, text: '', isCorrect: false },
                            { id: 2, text: '', isCorrect: false },
                            { id: 3, text: '', isCorrect: false },
                            { id: 4, text: '', isCorrect: false }
                        ],
                        correctAnswer: null
                    }
                ],
                createdQuiz: null, //Felmeddelande om inte quizet går att visas
                errorMessage: ''
            }
        },
        methods: {
            addQuestion() {
                this.questions.push({
                    text: '',
                    options: [
                        { id: 1, text: '', isCorrect: false },
                        { id: 2, text: '', isCorrect: false },
                        { id: 3, text: '', isCorrect: false },
                        { id: 4, text: '', isCorrect: false }
                    ],
                    correctAnswer: null
                })
            },
            async submitForm() {
                try {
                    const response = await fetch(
                        'http://localhost:8080/createquiz',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(this.questions)
                        }
                    )
                    const data = await response.json()
                    console.log(data)
                    this.showForm = false
                    this.questions = [
                        {
                            text: '',
                            options: [
                                { id: 1, text: '', isCorrect: false },
                                { id: 2, text: '', isCorrect: false },
                                { id: 3, text: '', isCorrect: false },
                                { id: 4, text: '', isCorrect: false }
                            ],
                            correctAnswer: null
                        }
                    ]
                } catch (error) {
                    console.error(error)
                    this.errorMessage = 'Could not create quiz'
                }
            }
        },
	components: { AppButton },
    }
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
