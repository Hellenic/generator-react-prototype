import { Component } from 'react';
import CumulocityGraph from '../../graphs/CumulocityGraph';

class Fatigue extends Component {

  render() {
    return (
      <div className="ui segment">
        <div className="ui top attached huge blue label">
          <i className="marker icon"></i> Highcharts + Cumulocity
        </div>
        <CumulocityGraph containerName="fatigue-graph" options={this.props.config} graphs={this.props.graphs} />
      </div>
    );
  }

}

Fatigue.defaultProps = {
  config: require('./fatigue-config').default,
  graphs: [
    { sourceId: 658592, name: 'Fatigue', type: 'Blink', fromAgo: '2 days', chartType: 'spline', yAxis: 0 }
  ]
};

export default Fatigue;
