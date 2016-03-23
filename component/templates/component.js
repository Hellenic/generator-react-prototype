import { Component } from 'react';

class <%= _.classify(componentName) %> extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(nextProps, nextState) {

  }

  render() {

  }
}

<%= _.classify(componentName) %>.defaultProps = {

};

export default <%= _.classify(componentName) %>;
