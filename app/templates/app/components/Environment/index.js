import { Component } from 'react';
import TrelabGraph from '../../graphs/TrelabGraph';

class Environment extends Component {

  render() {
    return (
      <div className="ui segment">
        <div className="ui top attached huge green label">
          <i className="marker icon"></i> Highcharts + Trelab
        </div>
        <TrelabGraph containerName="environment-graph" options={this.props.config} graphs={this.props.graphs} />
      </div>
    );
  }

}

Environment.defaultProps = {
  config: require('./environment-config').default,
  graphs: [
    { tagId: 690, name: 'Temperature', type: 'temperature', subtype: null, chartType: 'spline', yAxis: 0 },
    { tagId: 690, name: 'Illuminance', type: 'illuminance', subtype: null, chartType: 'column', yAxis: 1 }
  ]
};

export default Environment;
