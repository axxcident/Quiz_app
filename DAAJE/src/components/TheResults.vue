<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<h2>Medetal av svar från varje elev på Quiz</h2>
				<canvas id="myChart"></canvas>
				<h3>
					test av fetch:
				</h3>
				<p>{{ fetchedResultData }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import Chart from 'chart.js/auto'
import planetChartData from '../results-data';

export default {
	name: 'TheResults',
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