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

		return { sumOfResults }
	}
}
</script>

<style scoped>
h1,
p {
	color: white;
}
</style>