import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    chart: {
        type: 'column'
    },

    title: {
        // text: 'Olympic Games all-time medal table, grouped by continent',
        align: 'left'
    },

    xAxis: {
        categories: ['Developers', 'Designers', 'QA']
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        max:6,
        title: {
            text: 'Count medals'
        }
    },

    tooltip: {
        format: '<b>{key}</b><br/>{series.name}: {y}<br/>' +
            'Total: {point.stackTotal}'
    },


    series: [{
        name: 'Norway',
        data: [5, 5, 5],
        stack: 'Europe'
    }, {
        name: 'Germany',
        data: [3, 3, 3],
        stack: 'Europe'
    }]
}

const HightChart = () => <div>
  <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
</div>

export default HightChart;
