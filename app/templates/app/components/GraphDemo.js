import { Component } from 'react';
import Fatigue from './Fatigue';
import Environment from './Environment';

class GraphDemo extends Component {
  render() {
    return (

      <div className="ui grid">
        <div className="row">

          <div className="eight wide column">
            <Fatigue />
          </div>
          <div className="eight wide column">
            <Environment />
          </div>

        </div>
      </div>
    );
  }
}

export default GraphDemo;
