let Highcharts = require('highcharts');

export default function showGraph(id, x, y, duration = 1000) {
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
        plotOptions: {
            series: {
                animation: {
                    duration: duration,
                },
            },
        },
        series: [{
            data: y,
            lineWidth: 0.5,
            name: undefined,
            // type: 'line',

        }]
    });
}