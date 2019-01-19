import React, { Component } from "react";
import BrainTemplatePath from "../../assets/images/brain-template.svg";

class BrainTemplate extends Component {
  render() {
    return (
      <img
        className="brain__template--svg"
        src={BrainTemplatePath}
        alt="brain-template"
      />
    );
  }
}

export default BrainTemplate;
