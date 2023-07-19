import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const ColumnChart = (props) => {
  const data = {
    labels: props.labels,
    datasets: [
      {
        label: "Value",
        data: props.data,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Column Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ColumnChart;
