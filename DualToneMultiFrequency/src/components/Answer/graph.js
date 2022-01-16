function graph(value, animationDuration = 400) {
    let freq = {
        0: [941, 1336],
        1: [697, 1209],
        2: [697, 1336],
        3: [697, 1477],
        4: [770, 1209],
        5: [770, 1336],
        6: [770, 1477],
        7: [852, 1209],
        8: [852, 1336],
        9: [852, 1477],
    };

    let currentFreq = freq[value];  // получение массива частот для текущего элемента
    let minFreq = Math.min(...currentFreq); // нахождение минимальной частоты
    let maxTime = 1 / minFreq * 5;      // будем отоьражать 5 периодов сигнала

    let time = getTimeZones(maxTime);

    let signal = [];    
    for (let i = 0; i < time.length; i++) {
        signal.push(Math.sin(2*Math.PI*currentFreq[0]*time[i]) + Math.sin(2*Math.PI*currentFreq[1]*time[i]));
    }

    let signal1 = [];    
    for (let i = 0; i < time.length; i++) {
        signal1.push(Math.sin(2*Math.PI*currentFreq[0]*time[i]));
    }

    let signal2 = [];    
    for (let i = 0; i < time.length; i++) {
        signal2.push(Math.sin(2*Math.PI*currentFreq[1]*time[i]));
    }

    Highcharts.chart('graph', {
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'График соответствующего введённой цифре сигнала в виде суммы двух синусоид'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0
            },
            series: {
                animation: {
                    duration: animationDuration
                }
            }
        },
        xAxis: {
            categories: time
        },
        series: [{
            name: 'Сигнал при символе: ' + value,
            data: signal,
            zIndex: 10,
            lineWidth: 5,
            color: "#000",
        },{
            name: currentFreq[0] + " Гц",
            data: signal1,
            color: "#aaf",
        },{
            name: currentFreq[1] + " Гц",
            data: signal2,
            color: "#afa",
        }]
    });
}

export default graph;

function getTimeZones(max) {
    let numOfSteps = 1000
    let step = max / (numOfSteps - 1);
    let time = [];

    for (let i = 0; i < numOfSteps; i++) {
        time.push(i * step);
    }

    return time;
}