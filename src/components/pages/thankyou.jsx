import React, { Component } from "react";

import { Helmet } from "react-helmet";

import Panda from "../../assets/images/panda.jpg";

import Footer from "../layout/footer";

class ThankYou extends Component {
  render() {
    return (
      <div className="thankyou">
        <Helmet>
          <meta
            name="description"
            content="Thank You From Aman Kumar, A Front End React Web Developer based in Hyderabad, India."
          />
          <title>Thank You | Aman Kumar</title>
        </Helmet>
        <h1>Thank You!</h1>
        <p>
          I really appreciate you taking your time to contact me. I'll try to
          reply to your message as soon as possible :)
        </p>
        <div className="picture">
          <h2>Here is a picture of a panda</h2>
          <img src={Panda} alt="panda" />
        </div>
        <div className="thankyou__footer">
          <div>
            <h1>Miss Me Already?</h1>
            <button onClick={() => this.props.navigate("home", 0)}>
              Go Back To The Site!
            </button>
          </div>
          <div>
            <h1>Bored?</h1>
            <button onClick={this.props.playGame}>Play Atari Breakout</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ThankYou;
