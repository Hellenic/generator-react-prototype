import { Component } from 'react';
import Graph from './HighchartGraph';
import TrelabAPI from '../api/Trelab';

class TrelabGraph extends Component {

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

      TrelabAPI.getMeasurement(graph.tagId, '3 days', graph.type, graph.subtype).then(response => {

        options.series.push(TrelabAPI.convert2series(graph.name, graph.chartType, graph.yAxis, response.data));

        this.setState({
          options: options,
          loaded: true
        });

      });

    });
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

TrelabGraph.defaultProps = {
  containerName: '',
  options: {},
  graphs: []
};

export default TrelabGraph;
