import Highcharts from 'highcharts';
// require('highcharts/es-modules/Series/Heatmap/HeatmapSeries')(Highcharts);  
require('highcharts/modules/heatmap');
import highchartsMore from 'highcharts/highcharts-more';
import heatmap from 'highcharts/modules/heatmap';

heatmap(Highcharts);

function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}

export default function show3D(containerId, dataSeries) {

    console.log(dataSeries);
    let seriesData = [];
    for (let i = 0; i < dataSeries.length; i++) {
        seriesData.push([dataSeries[i].xValue, dataSeries[i].yValue, dataSeries[i].value])
    }
    console.log(seriesData);

    Highcharts.chart(containerId, {

        chart: {
            type: 'heatmap',
            plotBorderWidth: 1
        },


        title: {
            text: ''
        },

        colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: '#ff0000',
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.point.value + '</b>';
            }
        },

        series: [{
            data: seriesData,
        }],

    })
};