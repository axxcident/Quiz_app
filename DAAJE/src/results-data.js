export const planetChartData = {
  type: "pie",
  data: {
    labels: ["Rätt", "Fel"],
    datasets: [
      {
        label: "Medeltal av rätt & fel på Quiz",
        data: [21, 8],
        // backgroundColor: "rgba(54,73,93,.5)",
        // borderColor: "#36495d",
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    lineTension: 1,
  },
};

export default planetChartData;
