import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  credits: {
    enabled: false,
  },
  chart: {
    type: "column",
  },
  xAxis: {
      categories: ["Developers", "Designers", "QA"],
      dashStyle: "Dash",
  },
  title: {
    text: null,
  },
  yAxis: {
    allowDecimals: false,
    min: 0,
    gridLineDashStyle: "Dash",
    title: {
      text: "Number of hours",
      margin: 30,      
    },
  },
  colors: ["#0463D1", "#E5C85F"],
  legend: {
    enabled: false,
  },
  plotOptions: {
    column: {
      borderRadius: "5px",
      pointPadding:0,
      groupPadding:0.37
    },
  },
  series: [
    {
      data: [5, 5, 5],
    },
    {
      data: [3.2, 3.2, 3.2],
    },
  ],
};

const ProjectTimelineGraph = () => {
  const handleChart = (chart) => {
    console.log(chart);
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      callback={handleChart}
    />
  );
};

export default ProjectTimelineGraph;
