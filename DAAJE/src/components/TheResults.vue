<script>
import Chart from 'chart.js/auto'
import { useResultStore } from "../stores/resultStore"

export default {
	name: 'TheResults',
	props: {
		quizLength: Number,
		sumOfCorrectAnswers: Number
	},
	setup() {
		const resultStore = useResultStore();

		const question = resultStore.results.question
		const answers = resultStore.results.option
		const results = resultStore.results
		return { question, answers, results }
	},
	data() {
		return {
			fetchedResultData: [],
		}
	},
	methods: {
		fetchResults() {
			fetch('https://avancera.app/cities/')
				.then((response) => response.json())
				.then((result) => {
					this.fetchedResultData = result
				})
		}
	},
	mounted() {
		this.fetchResults();
		const ctx = document.getElementById('myChart');
		const MyChart = new Chart(ctx, {
			type: "pie",
			data: {
				labels: ["Rätt svar", "Totala frågor"],
				datasets: [
					{
						label: "Resultat av Quiz",
						data: [this.sumOfCorrectAnswers, this.quizLength],
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
	<div class="container">
		<div class="row">
			<div class="col-lg-8">
				<h3>Resultat av ditt quiz!</h3>
				<canvas id="myChart"></canvas>
			</div>
			<div class="col-lg-4">
				<h3>
					Enskilda resultat av frågor:
				</h3>
				<div v-for="(result) in results">
					<h5>{{ result.question.text }}</h5>
					<p>Rätt svar, {{ result.question.options }}</p>
					<!-- skapa ett computed property på vilket svar som är rätt
															för att visa enskilt result.question === isCorrect -->
					<p>Du valde, {{ result.option.text }}</p>
					<p></p>
				</div>
				<!-- <p v-for="(data, index) in fetchedResultData" :key="data.id">{{ index + 1 }}, {{ data.name }}</p> -->
			</div>
		</div>
	</div>
</template>
