import React, { Component } from "react";

class WorkCard extends Component {
  render() {
    return (
      <div className="workcard">
        <div className="cover">
          <img src={this.props.cover} alt="rentastico" />
        </div>
        <div className="content">
          <div className="header">
            <strong>{this.props.company}</strong>
            <strong>
              <em>{this.props.duration}</em>
            </strong>
          </div>
          <div className="main">{this.props.description}</div>
        </div>
      </div>
    );
  }
}

export default WorkCard;
