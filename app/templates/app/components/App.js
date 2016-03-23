import { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import Clock from './Common/Clock';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends Component {

  render() {
    return (
      <div>
        <div className="ui pointing seven large item menu">
          <IndexLink to="/" className="item" activeClassName="active">Main</IndexLink>
          <Link to="/graphs" className="item" activeClassName="active">Graphs</Link>
          <Link to="/ws" className="item" activeClassName="active">Websockets</Link>
          <Link to="/about" className="item" activeClassName="active">About</Link>
        </div>
        <div>
          <ReactCSSTransitionGroup component="div" transitionName="fly" transitionAppear={true}
            transitionEnterTimeout={1000} transitionLeaveTimeout={1000} transitionAppearTimeout={1000}>

              {React.cloneElement(this.props.children, {
                key: this.props.location.pathname
              })}

          </ReactCSSTransitionGroup>
        </div>
        <div style={{ position: 'absolute', top: '5px', right: '70px' }}>
          <Clock />
        </div>
      </div>
    );
  }

}

export default App;
