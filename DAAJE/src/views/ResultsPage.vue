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
		const fetchedResults = resultStore.fetchedResults;
		// console.log(fetchedResults)

		// const fetchedResultsQuestionsArr = fetchedResults.forEach(elem => elem.question.options.filter(option => option.isCorrect === true)[0].text)

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

		const fetchedResultsQuestionsRESULTS = [];
		// får ut datan med rätt svars alternativ på frågan i console.log

		console.log(fetchedResults)
		// fetchedResults.forEach(elem => {
		// 	console.log(elem)
		// })

		for (let i = 0; i < fetchedResults.length; i++) {
			console.log(fetchedResults[i][j]['option']['isCorrect'])
			for (let j = 0; j < fetchedResults[0][0]['option']['isCorrect'].length; j++) {

			}
		}

		// console.log(fetchedResults[1][0]['option']['isCorrect'])
		// console.log(fetchedResults[0][0]['option']['isCorrect'])

		// for (let i = 0; i < fetchedResults.length; i++) {
		// 	console.log(fetchedResults[i][1])
		// 	console.log(fetchedResults[i][0]['option']['isCorrect'])
		// 	for (let j = 0; j < fetchedResults[i].length; j++) {
		// 		console.log(fetchedResults[i][j])
		// 	}
		// }


		// const fetchedResultsQuestionsArr = fetchedResults.forEach(elem => {

		// 	elem.forEach(subElem => {

		// 		if (elem[0]['option']['isCorrect'] === true) {
		// 			fetchedResultsQuestionsRESULTS.push(true)
		// 		} else {
		// 			fetchedResultsQuestionsRESULTS.push(false)
		// 		}
		// 		console.log(elem[0]['question']['options'].filter(option => option.isCorrect === true)[0].text)
		// 		console.log(elem[0]['option']['isCorrect'])
		// 		console.log(fetchedResults.length)
		// 		console.log(fetchedResultsQuestionsRESULTS)
		// 	})
		// });



		return { fetchedResults }
	}
}
</script>

<template>
	<div class="row">
		<div class="col">
			<h1>Results page For Teacher</h1>
			<p>{{ fetchedResultsQuestionsArr }}</p>
			<div v-for="(result, index) of fetchedResults">
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