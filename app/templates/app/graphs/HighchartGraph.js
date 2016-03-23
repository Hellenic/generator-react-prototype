import React from 'react';
import Highcharts from 'highcharts';

// Version: 16.3.2016
class HighchartsGraph extends React.Component {

  componentDidMount() {
    // Extend Highcharts with modules
    if (this.props.modules) {
      this.props.modules.forEach(function (module) {
        module(Highcharts);
      });
    }

    // Set container which the chart should render to.
    this.chart = Highcharts[this.props.type || 'chart'](this.props.container, this.props.options);
  }

  componentWillUpdate(nextProps, nextState) {
    // Re-set all of the series data from options, so that it can be re-drawn
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
    this.chart.destroy();
  }

  render() {
    return React.createElement('div', { id: this.props.container });
  }

}

export default HighchartsGraph;
