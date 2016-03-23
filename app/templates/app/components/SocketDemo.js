import { Component } from 'react';
// import WebSocket from 'ws';

class SocketDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: []
    };

    let ws = this.props.ws;
    ws.onopen = (evt) => {
      ws.send('Socket connection opened!');
    };
    ws.onmessage = (evt) => {
      let texts = this.state.texts;
      texts.push(evt.data);
      this.setState({
        texts: texts
      });
    };
    ws.onclose = function(evt) { console.log('Websocket closed.', evt); };
    ws.onerror = function(evt) { console.log('Websocket error', evt); };
  }

  doSend(evt) {
    let input = document.querySelector('input[type="text"]');
    this.props.ws.send(input.value);
  }

  render() {
    return (
      <div className="ui two column centered grid">
        <div className="column">

          <div className="ui center aligned segment">
            <h1 className="ui header">Websocket example</h1>
              <div className="ui fluid action input">
                <input type="text" placeholder="Send to socket..." />
                <div className="ui button" onClick={(evt) => this.doSend(evt)}>Send</div>
              </div>
              <div className="ui text content">
                {
                  this.state.texts.map((text, index) => {
                    return (<p key={index}>{text}</p>);
                  })
                }
              </div>
          </div>

        </div>
      </div>
    );
  }
}

SocketDemo.defaultProps = {
  ws: new WebSocket('ws://echo.websocket.org/')
}

export default SocketDemo;
