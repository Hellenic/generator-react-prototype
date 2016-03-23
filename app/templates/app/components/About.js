import { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="ui two column centered grid">
        <div className="column">

          <div className="ui center aligned segment">
            <h1 className="ui header">About</h1>
            <p>This has been hacked together by TINDI <span className="hackteam">#hackteam</span></p>
          </div>

        </div>
      </div>
    );
  }
}

export default About;
