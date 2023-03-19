<template>
    <div class="m-space"></div>
    <div>
        <button @click="showForm = true">Create Quiz</button>
        <!---Click event som triggar igång formen-->
        <form v-if="showForm" @submit.prevent="submitForm" >
            <!---Submitprevent så den kan routas till egen backend-->
            <!---Gör en V-if som initialt gömmer formen som sen blir triggad av knappklicket-->
            <h2>Create Quiz</h2>
            <!---Quizname label, låter användaren namnge quiz-->
            <div class="full-width">
                <label class="full-width" for="quiz-name">Quiz Name:</label>
                <input id="quiz-name" type="text" v-model="quizName" required />
            </div>
            <!---Quizcategory label, låter användaren kategorisera-->
            <div>
                <label for="quiz-category">Quiz Category:</label>
                <select id="quiz-category" v-model="quizCategory">
                    <option v-for="category in categories" :value="category">
                        {{ category }}
                    </option>
                </select>
            </div>
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
            <!---Quizspråk, låter användaren välja språk -->
            <div>
                <label for="language-select">Language:</label>
                <select id="language-select" v-model="selectedLanguage">
                    <option
                        v-for="language in languages"
                        :value="language"
                        :key="language"
                    >
                        {{ language }}
                    </option>
                </select>
            </div>
            <div>
                <button type="button" @click="addQuestion">Add Question</button>
                <button type="submit">Create</button>
            </div>
            <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
        </form>
        <button @click="getQuiz">Get Quiz</button>
        <ul v-if="quiz">
            <li v-for="(question, index) in quiz.questions" :key="index">
                <h3>{{ question.text }}</h3>
                <ul>
                    <li
                        v-for="(option, optionIndex) in question.options"
                        :key="optionIndex"
                    >
                        {{ option }}
                    </li>
                </ul>
            </li>
        </ul>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </div>
</template>

<script>
    import AppButton from './AppButton.vue'
    export default {
        data() {
            return {
                showForm: false, //False initialt, tills användarinteraktion och då dyker det upp
                questions: [
                    //Array där texten kommer från användaren, flerval
                    {
                        text: '',
                        options: [
                            { id: 1, text: '', label: 'A', isCorrect: false },
                            { id: 2, text: '', label: 'B',  isCorrect: false },
                            { id: 3, text: '', label: 'C',  isCorrect: false },
                            { id: 4, text: '', label: 'D',  isCorrect: false }
                        ],
                        correctAnswer: null
                    }
                ],
                quiz: null,
                errorMessage: null, //Felmeddelande om inte quizet går att visas
                quizName: '',
                languages: [
                    'Svenska',
                    'English',
                    'Deutsch',
                    'Español',
                    'Français'
                ],
                selectedLanguage: '',
                categories: ['Vue', 'React', 'JavaScript', 'Node', 'Other']
            }
        },
        methods: {
            setTrue() {
                const correctIndex = this.questions[this.questions.length - 1].correctAnswer - 1;
                console.log(correctIndex);
                this.questions[this.questions.length - 1].options[correctIndex].isCorrect = true;
            },
            addQuestion() {
                this.setTrue()
                this.questions.push({
                    text: '',
                    options: [
                        { id: 1, text: '', label: 'A',  isCorrect: false },
                        { id: 2, text: '', label: 'B',  isCorrect: false },
                        { id: 3, text: '', label: 'C',  isCorrect: false },
                        { id: 4, text: '', label: 'D',  isCorrect: false }
                    ],
                    correctAnswer: null
                })
                
            },
            async submitForm() {
                this.setTrue()  //must be called here for the last index "isCorrect" to be set.
                // variabel som sammanställer frågorna som skapats i samma format som quizQuestions.json.
                // **Glöm inte att ändra propertyn "name" till en variabel för userns eget input **
                const postBody = [
                    {
                        id: '',
                        img: '',
                        name: this.quizName,
                        questions: this.questions,
                        category: this.quizCategory
                    }
                ]
                if (this.selectedLanguage) {
                    postBody[0].language = this.selectedLanguage
                } /*Om det finns ett valt språk, så lägger denna till det som det första elementet i postBody arrayen. */
                try {
                    const response = await fetch(
                        //hotfixed request path 8/3 /E.N
                        'http://localhost:8080/post/create_quiz',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(postBody)
                        }
                    ).then(location.reload()) //added reload page after posting new quiz
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
        getQuiz() {
            this.errorMessage = null //Klickfunktion för att kalla på rätt quiz
            this.quiz = this.generateQuiz()
        },
        generateQuiz() {
            //Skapar en quiz baserat på användarens inmatning
            const quiz = {
                questions: this.questions.map((question) => ({
                    text: question.text,
                    options: question.options.map((option) => option.text),
                    correctAnswer: question.correctAnswer
                }))
            }
            console.log(quiz) //Loggar den och sparar den i var quiz
            return quiz
        },

        components: { AppButton }
    }
</script>

<style>
  .full-width {
    width: 100%;
    
  }
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
