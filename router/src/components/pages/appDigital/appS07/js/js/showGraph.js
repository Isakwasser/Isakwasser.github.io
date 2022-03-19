let Highcharts = require('highcharts');

export default function showGraph(id, x, y) {
    Highcharts.chart(id, {
        // chart: {
        //     zoomType: 'x'
        // },
        title: {
            text: undefined,
        },
        xAxis: {
            // type: 'numeric',
            categories: x,
            // tickAmount: 5,
            // softMax: 3,
            min: 0,
            // startOnTick: false,
        },
        series: [{
            data: y,
            lineWidth: 0.5,
            name: undefined,
            // type: 'line',
            
        }]
    });
}