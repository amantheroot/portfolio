import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { PageTurn, FirstPageLoaded } from "../../store/actions/pageactions";

import Styles from "../../styles/partials/_variables.scss";

const mapStateToProps = state => {
  return {
    store: state
  };
};

class ToConnectNavigation extends Component {
  componentDidMount() {
    if (!this.props.store.page.firstpageloaded) {
      let pages = ["home", "about", "portfolio", "contact"];
      let firstpage = this.props.location.pathname.split("/")[1];

      if (firstpage === "") {
        firstpage = "home";
      }
      this.props.dispatch(PageTurn(firstpage));
      this.props.dispatch(FirstPageLoaded());

      if (pages.indexOf(firstpage) !== -1) {
        this.refs.buttons.childNodes[
          pages.indexOf(firstpage)
        ].childNodes[0].classList.add("active");
      }
    }
    window.addEventListener("resize", this.windowResize);
  }
  windowResize = () => {
    let menutoggle = this.refs.nav.childNodes[2];
    let navcon = this.refs.nav.childNodes[1];
    if (
      window.innerWidth > Number.parseInt(Styles.BreakingPoint.split("px")[0])
    ) {
      menutoggle.classList.remove("toggled");
      navcon.classList.remove("linkstoggled");
    }
  };
  ontoggleClick = () => {
    let menutoggle = this.refs.nav.childNodes[2];
    let navcon = this.refs.nav.childNodes[1];

    if (menutoggle.classList.value.indexOf("toggled") === -1) {
      menutoggle.classList.add("toggled");
      navcon.classList.add("linkstoggled");
    } else {
      menutoggle.classList.remove("toggled");
      navcon.classList.remove("linkstoggled");
    }
  };
  render() {
    return (
      <div className="navigation">
        <nav ref="nav">
          <div className="nav__title">
            <h1>AMAN KUMAR</h1>
          </div>
          <div className="nav__container">
            <div ref="buttons" className="nav__buttons">
              <div className="button">
                <button
                  onClick={() => {
                    this.props.navigate("home", 0);
                  }}
                >
                  Home
                </button>
              </div>
              <div className="button">
                <button
                  onClick={() => {
                    this.props.navigate("about", 1);
                  }}
                >
                  About Me
                </button>
              </div>
              <div className="button">
                <button
                  onClick={() => {
                    this.props.navigate("portfolio", 2);
                  }}
                >
                  My Work
                </button>
              </div>
              <div className="button">
                <button
                  onClick={() => {
                    this.props.navigate("contact", 3);
                  }}
                >
                  Contact
                </button>
              </div>
            </div>
            <div className="social__links">
              <a
                href="https://www.linkedin.com/in/aman-kumar-183035162/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                href="https://www.twitter.com/amantheroot"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://www.github.com/amantheroot"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="mailto:amantheroot@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Mail Me"
              >
                <i className="fa fa-envelope" />
              </a>
            </div>
          </div>
          <div className="nav__menutoggle" onClick={this.ontoggleClick}>
            <div className="nav__menubar" />
          </div>
        </nav>

        <div className="links">
          <NavLink to="/" />
          <NavLink to="/about" />
          <NavLink to="/portfolio" />
          <NavLink to="/contact" />
        </div>
      </div>
    );
  }
}

const Navigation = connect(mapStateToProps)(ToConnectNavigation);

export default Navigation;
