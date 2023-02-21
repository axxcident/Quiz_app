<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<h2>Medetal av svar från varje elev på Quiz</h2>
				<canvas id="myChart"></canvas>
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
			planetChartData: planetChartData
		}
	},
	mounted() {
		const ctx = document.getElementById('myChart');
		new Chart(ctx, this.planetChartData)
	}
}

</script>