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

		let resultSumArray = [];
		let totalCorrectAnswers = 0;
		let totalAmountQuestions = 0;
		let index = 0;

		// Sort fetched result data
		// looping through the entire list of answers in all quiz results
		fetchedResultsShortened.forEach(elem => {

			while (index < fetchedResultsShortened[0].resultData.length) {
				let resultSummary = 0;
				let questionId = elem.resultData[index].question.id
				let question = elem.resultData[index].question.text

				resultSumArray.push({ questionId, question, resultSummary, totalAmountQuestions })

				index++;
			}
		})

		// for loop to count each correct answer in each quiz result
		// and add total right for each individual question.
		for (let i = 0; i < fetchedResultsShortened.length; i++) {
			for (let j = 0; j < fetchedResultsShortened[i].resultData.length; j++) {
				const studentAnswer = fetchedResultsShortened[i].resultData[j].option.isCorrect;
				totalAmountQuestions++;

				if (studentAnswer) {
					resultSumArray[j]['resultSummary']++;
					totalCorrectAnswers++
				}
			}
		}

		return { fetchedResults, fetchedResultsShortened, resultSumArray, totalCorrectAnswers, totalAmountQuestions }
	},

}
</script>

<template>
	<div class="row">
		<div class="col">
			<h1>Results page For Teacher</h1> {{ totalCorrectAnswers }} / {{ totalAmountQuestions }}
			<p>-- Visa chart js här för överblick av hur det gick --</p>
			<div v-for="(result, index) in resultSumArray">
				<h5>{{ result.questionId }}: {{ result.question }}</h5>
				<p class="mb-4">Elevers svar: {{ result.resultSummary }} rätt av {{
					fetchedResultsShortened.length }} inkomna svar.</p>
			</div>
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