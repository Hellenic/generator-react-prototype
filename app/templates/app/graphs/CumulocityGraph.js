import { Component } from 'react';
import Graph from './HighchartGraph';
import CumulocityAPI from '../api/Cumulocity';

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

    this.props.graphs.forEach(graph => {
      CumulocityAPI.getMeasurementSeries(graph.sourceId, graph.fromAgo, graph.type).then(response => {

        let series = CumulocityAPI.convertSeries2series(graph.name, graph.chartType, graph.yAxis, response.data);
        options.series.push(CumulocityAPI.aggregate(series, 32));

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
  graphs: []
};

export default CumulocityGraph;
