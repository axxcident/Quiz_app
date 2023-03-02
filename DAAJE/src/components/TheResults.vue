<script>
import Chart from 'chart.js/auto'
import planetChartData from '../results-data';

export default {
	name: 'TheResults',
	props: {
		quizLength: Number,
		numberOfCorrectAnswers: Number
	},
	data() {
		return {
			planetChartData: planetChartData,
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
		const ctx = document.getElementById('myChart');
		new Chart(ctx, this.planetChartData);
		this.fetchResults();
	}
}

</script>

<template>
	<div class="container">
		<div class="row">
			<div class="col-8">
				<h3>Resultat av ditt quiz!</h3>
				<p>{{ numberOfCorrectAnswers }} / {{ quizLength }}</p>
				<canvas id="myChart"></canvas>
			</div>
			<div class="col-4">
				<h3>
					Enskilda svar av frågor:
				</h3>
				<!-- <p v-for="(data, index) in fetchedResultData" :key="data.id">{{ index + 1 }}, {{ data.name }}</p> -->
			</div>
		</div>
	</div>
</template>
