import React from 'react';
import Highcharts from 'highcharts';

// Version: 2016-04-06
class HighchartsGraph extends React.Component {

  componentDidMount() {
    // Extend Highcharts with modules
    if (this.props.modules) {
      this.props.modules.forEach(function (module) {
        module(Highcharts);
      });
    }

    // Set container which the chart should render to.
    this.chart = new Highcharts[this.props.type || 'chart'](this.props.container, this.props.options);
  }

  componentWillUpdate(nextProps, nextState) {
    // Re-set all of the series data, so that it can be re-drawn
    for (let i=0; i< nextProps.options.series.length; i++)
    {
      if (this.chart.series[i]) {
        this.chart.series[i].setData(nextProps.options.series[i].data, true, false);
      }
      else {
        this.chart.addSeries(nextProps.options.series[i], true, true);
      }
    }
  }

  componentWillUnmount() {
    // TODO Data still doesn't disappear
    this.chart.series.forEach(series => {
      series.remove();
    });
    this.chart.series = [];
    this.chart.destroy();
  }

  render() {
    return React.createElement('div', { id: this.props.container });
  }

}

export default HighchartsGraph;
