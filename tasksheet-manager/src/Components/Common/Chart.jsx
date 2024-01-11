import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { createUseStyles } from 'react-jss'

const options = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Weekly progress'
    },
    xAxis:{
    
    },
    // xAxis: {
    //     categories: ['2020/21', '2019/20', '2018/19', '2017/18', '2016/17']
    // },
    yAxis: {
        min: 0,
        title: {
            text: 'Goals'
        }
    },
    legend: {
        reversed: true
    },
    series: [{
        name: 'Work timeline',
        data: [12]
    }, {
        name: 'Work progress',
        data: [5]
    }, ]

}

const useStyles =createUseStyles({
    ".highcharts-credits":{
display:"none"
    }
})

export const Charts = () => 
{
    const classes =useStyles();
    return(

<div>
  <HighchartsReact
    highcharts={Highcharts}
    options={options}
    className={classes['.highcharts-credits']}
    containerProps={{ classsName : classes['.highcharts-credits']}}
  />
</div>
)
}

// render(<App />, document.getElementById('root'))