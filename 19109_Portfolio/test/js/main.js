var isLocalStorageSupported = true;
var startEmail;
try {
    startEmail = localStorage.getItem('startEmail') || "aalebedev_6@miem.hse.ru";
} catch (e) {
    isLocalStorageSupported = false;
}


class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            email: startEmail
        };
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        
    }

    edit() {
        this.setState({ edit: true });
    }

    save() {
        var value = this.refs.newEmail.value;
        this.setState({
            edit: false,
            email: value
        });
        if (isLocalStorageSupported) {
            localStorage.setItem('startEmail', this.state.email);
        }
    }


    rendEdit() {
        return <div>
            <input ref="newEmail" type="text" defaultValue={this.state.email} className="editArea"/>
            <button className="btn save" onClick={this.save}>Сохранить</button>
        </div>
    }

    rendNorm() {
        showDiagram(this.state.email);
        return <div>
            <h2 className="email-show">Почта: {this.state.email}</h2>
            <button className="btn edit" onClick={this.edit}>Редактировать</button>
        </div>
    }

    render() {
        if (this.state.edit) {
            return this.rendEdit();
        } else {
            return this.rendNorm();
        }
    }
}
var InputTarget = document.getElementById('input');
ReactDOM.render(<Input />, InputTarget);


function showDiagram(email) {
    var url = 'https://portfolio.miem.hse.ru/api/zulip';
    var method = 'POST';
    const headers = { 'Content-Type': 'application/json' }
    var body = {
        studEmail: email,
        beginDate: "2020-09-01",
        endDate: "2021-08-31"
    }

    var data;
    var x = fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    })
        .then(resp => { return resp.json() })
        .then(ans => {
            data = ans.stats;
            var categories = [];
            var messages = [];
            var mentions = [];
            var streams = [];

            if (typeof (data) == 'object') {

                data.forEach(elem => {
                    categories.push(elem.beginDate.split(' ')[1] + ' ' + elem.beginDate.split(' ')[3]);
                    mentions.push(elem.mentionCount);
                    messages.push(elem.messageCount);
                    streams.push(elem.streams);
                });
            }
            paintMainGraph('container', categories, mentions, messages, streams);

        });
}


function paintMainGraph(id, categories, mentions, messages, streams) {
    Highcharts.chart(id, {
        chart: {type: 'column'},
        title: {text: 'Статистика Zulip'},
        subtitle: {
            text: 'Для получения более подробной информации нажмите на столбец диаграммы и прокрутите вниз'
        },
        xAxis: {
            categories: categories,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {text: 'Количество'}
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.1,
                borderWidth: 0
            },
            series: {
                trackByArea: true,
                point: {
                    events: {
                        click: function (e) {

                            var dataMention = [];
                            streams[this.index].forEach(element => {
                                dataMention.push({
                                    name: element.name,
                                    y: element.mentionCount
                                });
                            });
                            var title = 'Упоминаний за ' + getRusDate(this.category);
                            paintPieDiagram('mentions', title, dataMention);

                            var dataMessage = [];
                            streams[this.index].forEach(element => {
                                dataMessage.push({
                                    name: element.name,
                                    y: element.messageCount
                                });
                            });
                            title = 'Сообщений за ' + getRusDate(this.category);
                            paintPieDiagram('messages', title, dataMessage);

                    }
                    }
                }
            }
        },
        series: [{
                name: 'Упоминания',
                data: mentions

            }, {
                name: 'Сообщения',
                data: messages
            }],
        navigation: {
            annotationsOptions: {
                visible: false
            },
            buttonOptions: {
                enabled: false
            }
 
        }
    });
}


function paintPieDiagram(id, title, data) {
    // Build the chart

    Highcharts.chart(id, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: title,
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}</b>'
        },
       
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>',
                    connectorColor: 'silver'
                },
                size: 200
            }
        },
        series: [{
            name: title.split(' ')[0],
            data: data 
        }],
        navigation: {
            buttonOptions: {
                enabled: false
            }
        }
    });
}

function getRusDate(text) {
    var month = text.split(' ')[0];

    switch (month) {
        case 'Jan': return 'январь ' + text.split(' ')[1];
        case 'Feb': return 'февраль ' + text.split(' ')[1];
        case 'Mar': return 'март ' + text.split(' ')[1];
        case 'Apr': return 'апрель ' + text.split(' ')[1];
        case 'May': return 'май ' + text.split(' ')[1];
        case 'Jun': return 'июнь ' + text.split(' ')[1];
        case 'Jul': return 'июль ' + text.split(' ')[1];
        case 'Aug': return 'август ' + text.split(' ')[1];
        case 'Sep': return 'сентябрь ' + text.split(' ')[1];
        case 'Oct': return 'октябрь ' + text.split(' ')[1];
        case 'Nov': return 'ноябрь ' + text.split(' ')[1];
        case 'Dec': return 'декабрь ' + text.split(' ')[1];

    }
}