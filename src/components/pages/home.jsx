import React, { Component } from "react";

import { Helmet } from "react-helmet";

import Styles from "../../styles/partials/_variables.scss";

class Home extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.skewName(
        Number.parseInt(Styles.nameskewdeg),
        Number.parseFloat(Styles.namescaleY)
      );

      let letters = [...this.refs.name.childNodes[0].childNodes].concat([
        ...this.refs.name.childNodes[1].childNodes
      ]);

      letters.forEach(letter => {
        letter.addEventListener("mouseover", () => {
          letter.style.transform =
            "skewX(0deg) scale(" + Number.parseFloat(Styles.namescale) + ")";
        });
        letter.addEventListener("mouseout", () => {
          this.skewName(
            Number.parseInt(Styles.nameskewdeg),
            Number.parseFloat(Styles.namescaleY)
          );
        });
      });
    }, 2500);
  }
  skewName = (degrees, scale) => {
    let letters = [...this.refs.name.childNodes[0].childNodes].concat([
      ...this.refs.name.childNodes[1].childNodes
    ]);
    letters.forEach((letter, index) => {
      let id = index;
      if (index >= letters.length / 2) {
        id = index + 1;
      }
      let deg = -degrees + id * (degrees / (letters.length / 2));
      letter.style.transform = "skewX(" + deg + "deg) scaleY(" + scale + ")";
    });
  };
  render() {
    return (
      <div className="home">
        <Helmet>
          <meta
            name="description"
            content="Aman Kumar, A Front End React Web Developer based in Hyderabad, India. Let me help you build your next project."
          />
          <title>Aman Kumar | Front End Web Developer</title>
        </Helmet>
        <h1 className="hello">Hello, my name is</h1>
        <h1 ref="name" className="name">
          <div className="fname">
            <div>A</div>
            <div>M</div>
            <div>A</div>
            <div>N</div>
            <div> </div>
          </div>
          <div className="lname">
            <div>K</div>
            <div>U</div>
            <div>M</div>
            <div>A</div>
            <div>R</div>
          </div>
        </h1>
        <div ref="title" className="title" />
        <button onClick={() => this.props.navigate("about", 1)}>
          Let's Begin
        </button>
        <h2>Or Instead</h2>
        <button onClick={this.props.playGame}>Play Atari Breakout</button>
      </div>
    );
  }
}

export default Home;
