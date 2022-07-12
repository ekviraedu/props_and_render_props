import React from "react";

class RenderPropsDemo extends React.Component {
  render() {
    const cursorPos = this.props.pos;
    return (
      <div>
        <h1>This is RenderPropsDemo Component</h1>
        <p>
          Current cursor position is ({cursorPos.x}, {cursorPos.y})
        </p>
      </div>
    );
  }
}

export default class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseEventHndl = this.handleMouseUserEvent.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseUserEvent(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseEventHndl}>
        <h1>Move the cursor in your browser</h1>
        <p>
          Current cursor position is ({this.state.x}, {this.state.y})
        </p>

        <RenderPropsDemo pos={this.state} />
      </div>
    );
  }
}
