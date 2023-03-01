<template>
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
                    v-for="(answer, answerIndex) in question.answers"
                    :key="answerIndex"
                >
                    <label :for="'answer-' + index + '-' + answerIndex"
                        >Answer {{ answerIndex + 1 }}</label
                    >
                    <input
                        :id="'answer-' + index + '-' + answerIndex"
                        type="text"
                        v-model="answer.text"
                        required
                    /><!---Använder enkel V-model och binder den till question arrayen, även en radiobutton som låter skaparen välja vilket av svaren som är rätt-->
                    <input
                        :id="'correct-answer-' + index"
                        type="radio"
                        :value="answerIndex"
                        v-model="question.correctAnswer"
                        required
                    />
                    <label :for="'correct-answer-' + index"
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
<!--Tanke om något error message ifall inte det går att skapa quizet, men behöver hjälp med backend konfig-->
<script>
    export default {
        data() {
            return {
                showForm: false, //False initialt, tills användarinteraktion och då dyker det upp
                questions: [
                    {
                        text: '',
                        answers: [
                            { text: '' },
                            { text: '' },
                            { text: '' },
                            { text: '' }
                        ],
                        correctAnswer: 0 //Flera svarsalternativ och den som har correctanswer intryckt blir räknas
                    }
                ],
                createdQuiz: null,
                errorMessage: ''
            }
        },
        methods: {
            addQuestion() {
                this.questions.push({
                    text: '',
                    answers: [
                        { text: '' },
                        { text: '' },
                        { text: '' },
                        { text: '' }
                    ],
                    correctAnswer: 0
                })
            },
            async submitForm() {
                //Async fetch till backenden, får gärna kika om de är till rätt host
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
                            answers: [
                                { text: '' },
                                { text: '' },
                                { text: '' },
                                { text: '' }
                            ],
                            correctAnswer: 0
                        }
                    ]
                } catch (error) {
                    //Enkel catch
                    console.error(error)
                    this.errorMessage = 'Could not create quiz'
                }
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
