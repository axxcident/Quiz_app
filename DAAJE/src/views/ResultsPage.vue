<script>
import { useResultStore } from "../stores/resultStore"
import Chart from 'chart.js/auto'

export default {
	data() {
		return {
			teacher: true
		}
	},
	setup() {
		const resultStore = useResultStore();
		const fetchedResults = resultStore.fetchedResults;
		// guard clause for empty result array
		if (fetchedResults.length > 0) {
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

					// adding total count of questions from all quizzes and questions within.
					totalAmountQuestions++;

					if (studentAnswer) {
						resultSumArray[j]['resultSummary']++;
						totalCorrectAnswers++
					}
				}
			}

			return { fetchedResults, fetchedResultsShortened, resultSumArray, totalCorrectAnswers, totalAmountQuestions }

		} else { // do this if no results are in the store
			console.log("Error: No results in store");
			window.location.href = "/";
			alert("Sorry, no results are in yet!");
		}
	},
	mounted() {
		const ctx = document.getElementById('myChart');
		const MyChart = new Chart(ctx, {
			type: "pie",
			data: {
				labels: ["Rätt svar", "Fel svar"],
				datasets: [
					{
						label: "Resultat av Quiz",
						data: [this.totalCorrectAnswers, (this.totalAmountQuestions - this.totalCorrectAnswers)],
						// backgroundColor: "rgba(54,73,93,.5)",
						// borderColor: "#36495d",
						borderWidth: 3,
					},
				],
			},
		})
		MyChart;
	}
}
</script>

<template>
	<div class="row">
		<div class="col">
			<h1 class="mb-2 mt-2">Results page For Teacher</h1>
			<h3 class="mb-3">Total results for this quiz</h3>
			<h4 class="mb-4"> Totalt {{ totalCorrectAnswers }} rätt, från {{ totalAmountQuestions }} frågor med,
				{{ fetchedResultsShortened.length }} inlämande quizzes</h4>

			<canvas id="myChart"></canvas>

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
h4,
h5,
p {
	color: white;
}

h3 {
	color: gray;
}
</style>