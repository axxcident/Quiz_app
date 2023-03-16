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
		// 3) Store in a new array with quiz id
		// 3) divide with number of total quiz results
		// 4) show the average of total results for right/wrong
		// 5)

		fetchedResultsShortened.forEach(elem => {
			console.log(elem.resultData)
			elem.resultData.forEach(elem => {
				// Getting students answer and checking if its correct
				console.log(elem.option.isCorrect)
				console.log(elem.question.id)
			})
		})

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