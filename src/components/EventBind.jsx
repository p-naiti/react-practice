import { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  // clickHandler() {
  //   this.setState({
  //     message: "Goodbye",
  //   });
  // }

  clickHandler = () => {
    this.setState({
      message: "Goodbye",
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button
          onClick={() => {
            this.clickHandler();
          }}
        >
          click me
        </button> */}
        <button onClick={this.clickHandler}>click me</button>
      </div>
    );
  }
}
export default EventBind;
