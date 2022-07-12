import React from "react";

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src={require("./cat.jpg")}
        style={{ position: "absolute", left: mouse.x, top: mouse.y }}
      />
    );
  }
}

class AnotherCat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src={require("./cat.jpg")}
        style={{ position: "absolute", left: mouse.x, top: mouse.y }}
      />
    );
  }
}

class SomeOtherCat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src={require("./cat.jpg")}
        style={{ position: "absolute", left: mouse.x, top: mouse.y }}
      />
    );
  }
}

class GenericMouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {/*<Cat mouse={this.state} />*/}
        {/*<AnotherCat mouse={this.state} />*/}
        {/*<SomeOtherCat mouse={this.state} />*/}
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default class RenderPropsComp extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <GenericMouse render={(mouse) => <AnotherCat mouse={mouse} />} />
      </div>
    );
  }
}
