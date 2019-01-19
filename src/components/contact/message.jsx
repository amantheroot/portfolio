import React, { Component } from "react";

class Message extends Component {
  render() {
    switch (this.props.msg) {
      case "greet":
        return (
          <div className="greet">
            <code>
              <h1>PRETTY COOL HUH?!</h1>
            </code>
          </div>
        );
      case "gw":
        return (
          <div className="gw">
            <code>
              <div className="heading">
                <h1>You Won!</h1>
                <p>Now You Have One More Thing To Be Proud Of</p>
              </div>

              <div className="buttons">
                <button onClick={this.props.onplayagain}>
                  <code>Play Again</code>
                </button>
                <button onClick={this.props.onreturn}>
                  <code>Return To Form</code>
                </button>
              </div>
            </code>
          </div>
        );
      case "go":
        return (
          <div className="go">
            <code>
              <div className="heading">
                <h1>Game Over</h1>
                <p>Wanna Know How To Beat This Game? Learn Javascript :)</p>
                <p>Your Score: {this.props.score}</p>
              </div>

              <div className="buttons">
                <button onClick={this.props.onplayagain}>
                  <code>Play Again</code>
                </button>
                <button onClick={this.props.onreturn}>
                  <code>Return To Form</code>
                </button>
              </div>
            </code>
          </div>
        );
      default:
        return null;
    }
  }
}

export default Message;
