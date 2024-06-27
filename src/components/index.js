document.addEventListener('DOMContentLoaded'),()=>{
  Highcharts.chart('container', {
    chart: {
      zooming: {
        type: 'x',
      },
    },
    title: {
      text: 'Implement a Charting Library in React.js',
      align: 'left',
    },
    subtitle: {
      text:
        document.ontouchstart === undefined
          ? 'Click and drag in the plot area to zoom in'
          : 'Pinch the chart to zoom in',
      align: 'left',
    },
    xAxis: {
      type: 'timestamp',
    },
    yAxis: {
      title: {
        text: 'Values',
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [
              1,
              Highcharts.color(Highcharts.getOptions().colors[0])
                .setOpacity(0)
                .get('rgba'),
            ],
          ],
        },
        marker: {
          radius: 2,
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        threshold: null,
      },
    },

    series: [
      {
        type: 'area',
        name: 'USD to EUR',
        data: data,
      },
    ],
  })
}