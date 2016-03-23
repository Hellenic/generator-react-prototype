import Highcharts from 'highcharts';

let options = {
  chart: {
    height: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    plotBorderWidth: 1
  },
  colors: ['#7cb5ec', '#f7941d', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],
  title: {
    text:  null
  },
  xAxis: [{
    type: 'datetime'
  }],
  yAxis: [{ // Primary yAxis
    labels: {
      format: '{value}°C',
      style: {
        color: '#f7941d'
      }
    },
    title: {
      text: 'Temperature',
      style: {
        color: '#f7941d'
      }
    }
  }, { // Secondary yAxis
    title: {
      text: 'Illuminance',
      style: {
        color: '#7cb5ec'
      }
    },
    labels: {
      format: '{value} lux',
      style: {
        color: '#7cb5ec'
      }
    },
    opposite: true
  }],
  tooltip: {
    shared: true
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    x: 120,
    verticalAlign: 'top',
    y: 100,
    floating: true,
    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
  },
  series: []
};

export default options;
