import React, { Component } from 'react';
import Graph from './HighchartGraph';
import CumulocityAPI from '../api/Cumulocity';

// Version: 2016-04-06
class CumulocityGraph extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
      loaded: false
    };
  }

  componentWillMount() {

    let options = this.state.options;

    // For each defined graph, make a call to Cumulocity for data
    this.props.graphs.forEach(graph => {
      CumulocityAPI.getMeasurementSeries(graph.sourceId, graph.fromAgo, graph.type, graph.aggregationType).then(response => {

        // Convert data for Highcharts
        let series = CumulocityAPI.convertSeries2series(graph.name, graph.chartType, graph.yAxis, graph.type, response.data);

        // Send received data to parent for other purposes
        this.props.onData({ sourceId: graph.sourceId, name: graph.name, series: series });

        if (graph.aggregate)
        {
          series = CumulocityAPI.aggregate(series, 12);
        }

        options.series.push(series);

        this.setState({
          options: options,
          loaded: true
        });

      });

    });

    if (this.props.graphs.length == 0)
    {
      this.setState({
        loaded: true
      })
    }
  }

  render() {
    return (
      <div>
        {(this.state.loaded) ?
          (<Graph container={this.props.containerName} options={this.state.options}></Graph>) :
          (<div className="ui active inverted dimmer"><div className="ui text loader">Loading...</div></div>)
        }
      </div>
    );
  }
}

CumulocityGraph.defaultProps = {
  containerName: '',
  options: {},
  graphs: [],
  onData: () => {}
};

export default CumulocityGraph;
