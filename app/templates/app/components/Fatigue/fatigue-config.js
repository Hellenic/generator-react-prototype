import Highcharts from 'highcharts';

let options = {
  chart: {
    height: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    plotBorderWidth: 1
  },
  colors: ['#f45b5b', '#f7941d', '#7cb5ec', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#91e8e1'],
  title: {
    text:  null
  },
  xAxis: [{
    type: 'datetime'
  }],
  yAxis: [{ // Primary yAxis
    labels: {
      format: '{value}',
      style: {
        color: '#f7941d'
      }
    },
    title: {
      text: 'Fatigue',
      style: {
        color: '#f7941d'
      }
    },
    minorGridLineWidth: 0,
    gridLineWidth: 0,
    alternateGridColor: null,
    plotBands: [{
        from: 0,
        to: 200,
        color: 'rgba(0, 0, 0, 0)',
        label: {
            text: 'Energetic',
            style: {
                color: '#606060'
            }
        }
    }, {
        from: 200,
        to: 400,
        color: 'rgba(107, 224, 107, 0.15)',
        label: {
            text: 'Refreshed',
            style: {
                color: '#606060'
            }
        }
    }, {
        from: 400,
        to: 500,
        color: 'rgba(247, 203, 45, 0.15)',
        label: {
            text: 'Normal',
            style: {
                color: '#606060'
            }
        }
    }, {
        from: 500,
        to: 600,
        color: 'rgba(247, 141, 45, 0.15)',
        label: {
            text: 'Fatigued',
            style: {
                color: '#606060'
            }
        }
    }, {
        from: 600,
        to: 1000,
        color: 'rgba(247, 45, 45, 0.15)',
        label: {
            text: 'Sleepy',
            style: {
                color: '#606060'
            }
        }
    }]
  }, { // Secondary yAxis
    title: {
      text: 'Heartbeat',
      style: {
        color: '#f45b5b'
      }
    },
    labels: {
      format: '{value} bpm',
      style: {
        color: '#f45b5b'
      }
    },
    min: 60,
    max: 100,
    opposite: true
  }],
  tooltip: {
    shared: true
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    x: 150,
    verticalAlign: 'top',
    y: 30,
    floating: true,
    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
  },
  series: [{
      name: 'Heartbeat',
      type: 'spline',
      data: [
        [Date.UTC(2016, 2, 19, 12, 10), 77],
        [Date.UTC(2016, 2, 19, 12, 20), 75],
        [Date.UTC(2016, 2, 19, 12, 30), 75],
        [Date.UTC(2016, 2, 19, 12, 40), 78],
        [Date.UTC(2016, 2, 19, 12, 50), 85],
        [Date.UTC(2016, 2, 19, 13, 0), 80],
        [Date.UTC(2016, 2, 19, 13, 10), 72],
        [Date.UTC(2016, 2, 19, 13, 20), 85],
        [Date.UTC(2016, 2, 19, 13, 30), 92],
        [Date.UTC(2016, 2, 19, 13, 40), 95],
        [Date.UTC(2016, 2, 19, 13, 50), 90],
        [Date.UTC(2016, 2, 19, 14, 0), 87],
        [Date.UTC(2016, 2, 19, 14, 10), 85],
        [Date.UTC(2016, 2, 19, 14, 20), 87],
        [Date.UTC(2016, 2, 19, 14, 30), 85],
        [Date.UTC(2016, 2, 19, 14, 40), 87],
        [Date.UTC(2016, 2, 19, 14, 50), 85],
        [Date.UTC(2016, 2, 19, 15, 0), 82],
        [Date.UTC(2016, 2, 19, 15, 10), 80],
        [Date.UTC(2016, 2, 19, 15, 20), 79],
        [Date.UTC(2016, 2, 19, 15, 30), 80],
        [Date.UTC(2016, 2, 19, 15, 40), 83]
      ],
      yAxis: 1,
      tooltip: {
          valueSuffix: ' bpm'
      }
  }]
};

export default options;
