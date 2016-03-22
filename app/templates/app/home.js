import { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Browserify',
        'Babel',
        'Semantic UI'
      ]
    };
  }

  render() {
    return (
      <div className="hero-unit">
        <h1>'Allo, 'Allo!</h1>
        <p>This is a React component.<br/>
           You now also have:</p>
        <ul>{this.state.items.map(this.renderItem)}</ul>
      </div>
    );
  }

  renderItem(item, index) {
    return <li key={index}>{item}</li>;
  }
}
