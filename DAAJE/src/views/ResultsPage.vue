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
		const fetchedResultsShortened = [...fetchedResults[0].response.data.slice(1)];

		// Sort fetched result data

		// sum of results
		// 1) get total results data as object, DONE (line 26)
		// 2) look through each result object and find right/wrong for each question, DONE
		// 3) Store in a new array with quiz id, DONE
		// 4) set resultSummary to 0,
		// 5) set if student result is right, +1
		// 6) sum all correct answers in resultSummary
		// 7) divide with number of total quiz results
		// 8) show the average of total results for right/wrong

		let resultSumArray = [];
		console.log(fetchedResultsShortened)
		let index = 0;

		fetchedResultsShortened.forEach(elem => {

			while (index < fetchedResultsShortened[0].resultData.length) {
				let questionId = elem.resultData[index].question.id
				let question = elem.resultData[index].question.text
				let resultSummary = elem.resultData[index].option.isCorrect

				resultSumArray.push([[questionId], [question], [resultSummary]])

				index++;
			}


			// console.log(elem.resultData, Object.keys(elem.resultData))
			// resultSumArray.push([elem.resultData])

			// Getting students answer and checking if its correct
			// console.log(elem.option.isCorrect)

			// add this to resultSumArray as first element
			// console.log(elem.question.id, elem.question.text)

			// count this, elem.option.isCorrect and add +1 for each true
			// add as second element in resultSumArray.

			// example, 
			// [
			//   [Question, result],
			//   [Question, result],
			// ]

			// resultSumArray.push([elem.question.id, elem.question.text, elem.option.isCorrect])
		})
		console.log(resultSumArray)

		return { fetchedResults, fetchedResultsShortened }
	}
}
</script>

<template>
	<div class="row">
		<div class="col">
			<h1>Results page For Teacher</h1>
			<div v-for="(result, index) of fetchedResultsShortened">
				<p>{{ result }}</p>
				<!-- <h5>Fråga {{ index + 1 }}, {{ result[index].question.text }}</h5>
																																																																																																																					<p>{{ result[index].question.text }}</p>
																																																																																																																					<p>{{ result[index].question.text }}</p> -->
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