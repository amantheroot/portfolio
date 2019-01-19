import React, { Component } from "react";

import { Helmet } from "react-helmet";

import Form from "../contact/form";

import Styles from "../../styles/partials/_variables.scss";

import Footer from "../layout/footer";

class Contact extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  handleResize = () => {
    if (this.props.navigated) {
      let togglegame = this.refs.contact.childNodes[1].childNodes[1];
      let toptobe =
        (Number.parseFloat(Styles.dummynavheight.split("vw")[0]) / 100) *
          window.innerWidth +
        window.scrollY;
      togglegame.style.top = toptobe + "px";
      if (
        window.innerWidth <=
        Number.parseInt(Styles.BreakingPoint.split("px")[0])
      ) {
        togglegame.style.top =
          Number.parseFloat(Styles.dummynavheightMobile.split("px")[0]) +
          window.scrollY +
          "px";
      }
    }
  };
  gameToggle = toggled => {
    this.props.gameToggled(toggled);
    let heading = this.refs.contact.childNodes[0];
    let contact = this.refs.contact;
    let contactFooter = this.refs.contact.childNodes[2];
    if (toggled) {
      contact.classList.add("contactgt");
      heading.classList.add("headinggt");
      contactFooter.classList.add("contact__emptyfootergt");
    } else {
      contact.classList.remove("contactgt");
      heading.classList.remove("headinggt");
      contactFooter.classList.remove("contact__emptyfootergt");
    }
  };
  render() {
    return (
      <div ref="contact" className="contact">
        <Helmet>
          <meta
            name="description"
            content="Contact Aman Kumar, A Front End React Web Developer based in Hyderabad, India. Let's Talk or you can also play atari breakout game online."
          />
          <title>Let's Talk | Aman Kumar | Front End Web Developer</title>
        </Helmet>
        <h1>Let's Talk</h1>
        <Form ongameToggled={this.gameToggle} />
        <div className="contact__emptyfooter" />
        <Footer />
      </div>
    );
  }
}

export default Contact;
