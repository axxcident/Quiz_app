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

		// sum of results
		// 1) get total results data as object, DONE (line 26)
		// 2) look through each result object and find right/wrong for each question
		// 3) divide with number of total quiz results
		// 4) show the average of total results for right/wrong
		// 5)

		return { sumOfResults }
	}
}
</script>

<template>
	<div class="row">
		<div class="col">
			<h1>Results page For Teacher</h1>
			<p v-for="result of sumOfResults">{{ result[19] }}</p>

			<!-- går det att återanvända den här komponnent? -->
			<TheResults :teacher="teacher" />
		</div>
	</div>
</template>

<style scoped>
h1,
p {
	color: white;
}
</style>