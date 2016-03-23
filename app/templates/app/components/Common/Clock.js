import React from 'react'
import moment from 'moment'

class Clock extends React.Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      time: moment()
    }
  }

  componentWillMount() {
    setInterval(() => {
      this.setState({
        time: moment()
      })
    }, 1000);
  }
  componentWillUnmount() {
    // clearInterval(this.props.interval)
  }

  render() {
    return (
      <div className="ui">
        <h1>
          <small>{this.state.time.format('dddd D. MMMM')}</small> <span>{this.state.time.format('HH:mm:ss')}</span>
        </h1>
      </div>
    )
  }
}

export default Clock
