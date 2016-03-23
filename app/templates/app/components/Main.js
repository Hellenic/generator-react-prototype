import { Component } from 'react';

class Main extends Component {

  render() {
    return (
      <div className="ui two column centered grid">
        <div className="column">

          <div className="ui center aligned segment">
            <h1 class="ui header">React Prototype</h1>
            <p>
              This project should help you get started quickly when building
              demos, prototypes or quick proof of concept work around area of
              industrial internet.
            </p>
            <p>
              It contains only the very necessary: Tools for creating quick and
              nice looking UI. Tools to load data from different APIs and
              visualize it with Highcharts. No tests, no linting whatsoever.
            </p>
          </div>

        </div>
      </div>
    );
  }

}

export default Main;
