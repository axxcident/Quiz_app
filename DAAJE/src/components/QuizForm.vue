<template>
    <div>
        <button @click="showForm = true">Create Quiz</button
        ><!---Click event som triggar igång formen-->

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
</template>

<script>
    export default {
        data() {
            return {
                showForm: false, //False initialt, tills användarinteraktion och då dyker det upp
                questions: [{ text: '', answer: '' }], //Array där texten kommer från användaren
                createdQuiz: null, //Null initialt måste hitta en lösning på hur det skapas ett quiz via backend
                errorMessage: '' //Felmeddelande om inte quizet går att visas
            }
        },
        methods: {
            addQuestion() {
                this.questions.push({ text: '', answer: '' }) //Enkel funktion för att kunna lägga till obegränsat med frågor
            }
        }
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
    .error {
        color: red;
        margin-top: 10px;
    }
</style>
