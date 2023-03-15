<script>
import TheResults from '../components/TheResults.vue';
import { useResultStore } from "../stores/resultStore"

export default {
	components: { TheResults },
	data() {
		return {
			teacher: true
		}
	},
	setup() {
		const resultStore = useResultStore();
		const sumOfResults = resultStore.fetchedResults;
		// console.log(sumOfResults)

		// const sumOfResultsQuestionsArr = sumOfResults.forEach(elem => elem.question.options.filter(option => option.isCorrect === true)[0].text)

		// result.question.options.filter(option => option.isCorrect === true)[0].text


		// sum of results
		// 1) get total results data as object, DONE (line 26)
		// 2) look through each result object and find right/wrong for each question
		// 3) divide with number of total quiz results
		// 4) show the average of total results for right/wrong
		// 5)


		// kod från TheResults för att visa rätt svar
		// <p>Rätt svar: {{ 
		// result.question.options.filter(option => option.isCorrect === true)[0].label
		// result.question.options.filter(option => option.isCorrect === true)[0].text

		// Det jag vill gör nu är att sammla svars längd (mängd frågor), och antal rätt, 
		// för att kunna räkna ut ett medeltal. 


		// får ut datan med rätt svars alternativ på frågan i console.log
		const sumOfResultsQuestionsArr = sumOfResults.forEach(elem => {
			console.log(elem[0]['question']['options'].filter(option => option.isCorrect === true)[0].text)
		});



		return { sumOfResults, sumOfResultsQuestionsArr }
	}
}
</script>

<template>
	<div class="row">
		<div class="col">
			<h1>Results page For Teacher</h1>
			<p>{{ sumOfResultsQuestionsArr }}</p>
			<div v-for="(result, index) of sumOfResults">
				<h5>Fråga {{ index + 1 }}, {{ result[index].question.text }}</h5>
				<p>{{ result[index].question.text }}</p>
				<p>{{ result[index].question.text }}</p>
			</div>

			<!-- går det att återanvända den här komponnent? -->
			<TheResults :teacher="teacher" />
		</div>
	</div>
</template>

<style scoped>
h1,
h5,
p {
	color: white;
}
</style>