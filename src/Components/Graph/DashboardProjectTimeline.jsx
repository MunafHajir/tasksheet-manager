import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  credits: {
    enabled: false,
  },
  chart: {
    type: "bar",
    height: 600,
    spacingTop: 50,    
    spacingRight: 50,  
    spacingBottom: 50, 
    spacingLeft: 20,  
  },
  title: {
    text: null,
  },
  xAxis: {
    categories: [
      "Getcredit",
      "Klaxon",
      "Mendelics",
      "Franklin Templetion",
      "Fundsup",
      "Getcredit",
    ],
    labels: {
      style: {
        width: 15,
        color: "grey",
        fontSize: "12px",
        fontWeight: "bold",
      },
    },
  },
  yAxis: {
    visible: true,
    lineColor: "black",
    lineWidth: 0.7,
    gridLineDashStyle: "Dash",
    min: 0, 
    tickPositions: [0, 50, 100 , 150 ,200,250 ,300,350,400,450,500],
    title: {
      text: null,
    },
    labels: {
      formatter: function () {
        return this.value + "h";
      },
      style: {
        color: "grey",
        fontSize: "12px",
        fontWeight: "bold",
      },
    },
    opposite: true,
  },
  legend: {
    reversed: false,
    enabled: false,
  },
  tooltip: true,
  plotOptions: {
    series: {
      stacking: "normal",
      dataLabels: {
        enabled: false,
      },
      animation: false,
      enableMouseTracking: false,
      pointPadding: 0,
      groupPadding: 0.3,
      borderRadius: "8px",
    },
  },
  series: [
    {
      data: [
        {
          y: 180,
          color: "#0463D1",
        },
        {
          y: 110,
          color: "#0463D1",
        },
        {
          y: 280,
          color: "#0463D1",
        },
        {
          y: 40,
          color: "#0463D1",
        },
        {
          y: 170,
          color: "#219653",
        },
        {
          y: 110,
          color: "#EB5757",
        },
      ],
    },
    {
      data: [
        {
          y: 190,
          color: "#E5C85F",
        },
        {
          y: 340,
          color: "#E5C85F",
        },
        {
          y: 130,
          color: "#E5C85F",
        },
        {
          y: 270,
          color: "#E5C85F",
        },
        {
          y: 260,
          color: "#0463D1",
        },
        {
          y: 350,
          color: "#0463D1",
        },
      ],
    },
  ],
};

const DashboardProjectTimeline = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default DashboardProjectTimeline;
