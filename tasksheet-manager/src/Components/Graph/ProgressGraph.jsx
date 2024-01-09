import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  credits: {
    enabled: false,
  },
  chart: {
    type: "bar",
    animation: false,
  },
  title: {
    text: null,
  },
  xAxis: {
    visible: true,
   
  },
  yAxis: {
    visible: true,
    lineColor: 'black', 
    lineWidth: 0.7,
    min: 0,
    title: {
      text: "Time in hours",
      margin: 50,
    },
    labels: {
      formatter: function () {
        return this.value + "H";
      },
      style: {
        color: "grey",
        fontSize: "12px",
        fontWeight: "bold",
      },
    },
  },
  legend: {
    reversed: true,
    enabled: false,
  },
  tooltip: false,
  plotOptions: {
    bar:{
        pointPadding:0.2,
        borderRadius:8,
        groupPadding:0.3
    },
    series: {
      animation: false,
      dataLabels: {
        enabled: false,
      },
      enableMouseTracking: false,
    },
  },
  colors: ["#142E56", "#9FC4FF"],
  series: [
    {
      data: [180],
    },
    {
      data: [115],
    },
  ],
};

const ProgressGraph = () => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default ProgressGraph;
