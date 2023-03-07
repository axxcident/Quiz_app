import { defineStore } from "pinia";

export const useResultStore = defineStore("ResultStore", {
  state: () => {
    return {
      results: [],
      fetchedResults: [],
      // fetchedResults from backend to get median results from all students
    };
  },
  actions: {
    addResult(result) {
      this.results.push({ ...result });
    },
  },
  getters: {
    // get median answer from all students from fetchedResults
  },
});
