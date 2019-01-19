import React, { Component } from "react";
import { connect } from "react-redux";

import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import Navigation from "./components/layout/navigation";

import Home from "./components/pages/home";
import About from "./components/pages/about";
import Portfolio from "./components/pages/portfolio";
import Contact from "./components/pages/contact";
import ThankYou from "./components/pages/thankyou";
import Error from "./components/pages/errorpage";

import { PageTurn, Navigated } from "./store/actions/pageactions";
import { ResetStore, ResetBricks } from "./store/actions/formactions";

import Styles from "./styles/partials/_variables.scss";

const mapStateToProps = state => {
  return {
    store: state
  };
};

const RoutedNavigation = withRouter(props => <Navigation {...props} />);

class ToConnectApp extends Component {
  componentDidMount() {
    this.refs.display.style.top = 0;
  }
  navigate = (page, index) => {
    if (this.props.store.page.page !== page) {
      if (
        this.props.store.page.page === "contact" &&
        (this.props.store.form.game || this.props.store.form.infoprovided)
      ) {
        let gameConfirmed = true;
        let formConfirmed = true;

        if (this.props.store.form.game) {
          gameConfirmed = window.confirm(
            `Are You Sure You Want To Exit The Game?`
          );
        }
        if (
          (this.props.store.form.infoprovided && !this.props.store.form.game) ||
          (this.props.store.form.infoprovided &&
            this.props.store.form.game &&
            gameConfirmed)
        ) {
          formConfirmed = window.confirm(
            `If You Continue, All Your Inputs Will Be Erased.\nIs That OK?`
          );
        }

        if (gameConfirmed && formConfirmed) {
          this.pageturn(page, index);
        }
      } else {
        this.pageturn(page, index);
      }
    }
  };
  pageturn = (page, index) => {
    var killId = setTimeout(function() {
      for (var i = killId; i > 0; i--) clearInterval(i);
    }, 12);

    let navcon = this.refs.display.childNodes[0].childNodes[0].childNodes[1];
    let menutoggle = this.refs.display.childNodes[0].childNodes[0]
      .childNodes[2];

    if (navcon.classList.value.indexOf("linkstoggled") !== -1) {
      this.refs.display.style.height = "100vh";
      this.refs.display.style.overflow = "hidden";
      setTimeout(() => {
        this.refs.display.style.height = "auto";
        this.refs.display.style.overflow = "";
      }, 2000);
    }

    let buttons = [
      ...this.refs.display.childNodes[0].childNodes[0].childNodes[1]
        .childNodes[0].childNodes
    ].map(btncon => btncon.childNodes[0]);
    buttons.forEach(btn => (btn.disabled = true));

    let links = this.refs.display.childNodes[0].childNodes[1].childNodes;
    links.forEach(link => link.classList.remove("active"));

    document.getElementsByTagName("body")[0].style.overflow = "hidden";

    let pageHeight = this.refs.display.childNodes[1].offsetHeight;

    let upHeight =
      pageHeight > window.innerHeight ? pageHeight : window.innerHeight;
    upHeight += "px";

    this.refs.display.style.transform =
      "scale(" + Styles.displaysquishscale + ")";
    setTimeout(() => {
      this.refs.display.style.top = "-" + upHeight;
    }, 500);

    window.pagegoup = setTimeout(() => {
      this.props.dispatch(PageTurn(page));
      links[index].classList.add("active");
      links[index].click();

      buttons.forEach(btn => btn.classList.remove("active"));
      buttons[index].classList.add("active");

      this.refs.display.classList.add("pagegoingdownfor");
      window.pagegodown = setTimeout(() => {
        this.refs.display.classList.remove("pagegoingdownfor");

        this.refs.display.style.transform = "scale(1)";
        this.refs.display.style.top = "0";

        document.getElementsByTagName("body")[0].style.overflow = "";

        this.props.dispatch(ResetStore());
        this.props.dispatch(ResetBricks());

        buttons.forEach(btn => (btn.disabled = false));

        navcon.classList.remove("linkstoggled");
        menutoggle.classList.remove("toggled");

        window.removeEventListener("scroll", this.handleScroll);
        window.addEventListener("scroll", this.handleScroll);
        this.props.dispatch(Navigated());
      }, 1000);
    }, 1000);
  };
  playGame = () => {
    this.navigate("contact", 3);
    setTimeout(() => {
      let toggleGameBtn = this.refs.display.childNodes[1].childNodes[1]
        .childNodes[1].childNodes[0];
      toggleGameBtn.click();
    }, 3000);
  };
  handleScroll = () => {
    let nav = this.refs.display.childNodes[0];
    nav.style.top = window.scrollY + "px";
    if (
      window.innerWidth <= Number.parseInt(Styles.BreakingPoint.split("px")[0])
    ) {
      nav.childNodes[0].childNodes[1].style.top =
        window.scrollY - window.innerHeight + "px";
    }
    if (this.props.store.page.page === "contact") {
      let togglegame = this.refs.display.childNodes[1].childNodes[1]
        .childNodes[1];
      let toptobe = nav.offsetHeight + window.scrollY;
      toptobe = (toptobe / window.innerWidth) * 100;
      togglegame.style.top = toptobe + "vw";
      if (
        window.innerWidth <=
        Number.parseInt(Styles.BreakingPoint.split("px")[0])
      ) {
        togglegame.style.top =
          Number.parseInt(Styles.dummynavheightMobile.split("px")[0]) +
          window.scrollY +
          "px";
      }
    }
  };
  gameToggled = toggled => {
    let nav = this.refs.display.childNodes[0].childNodes[0];
    let navtitle = nav.childNodes[0];
    let navcon = nav.childNodes[1];
    let navmenutoggle = nav.childNodes[2];
    let footer = this.refs.display.childNodes[1].childNodes[3];
    if (toggled) {
      navtitle.classList.add("nav__titlegt");
      nav.classList.add("navgt");
      this.refs.display.classList.add("displaygt");
      footer.classList.add("footergt");
      navcon.style.opacity = 0;
      navmenutoggle.style.opacity = 0;
      setTimeout(() => {
        this.toggleNavLinks(false);
      }, 1000);
    } else {
      navtitle.classList.remove("nav__titlegt");
      nav.classList.remove("navgt");
      this.refs.display.classList.remove("displaygt");
      footer.classList.remove("footergt");
      this.toggleNavLinks(true);
      navcon.style.opacity = 1;
      navmenutoggle.style.opacity = 1;
    }
  };
  toggleNavLinks = active => {
    let nav = this.refs.display.childNodes[0].childNodes[0];
    let navcon = nav.childNodes[1];
    let navmenutoggle = nav.childNodes[2];

    let links = [
      ...[...navcon.childNodes[0].childNodes].map(btn => btn.childNodes[0]),
      ...navcon.childNodes[1].childNodes,
      navmenutoggle
    ];
    if (active) {
      links.forEach(link => {
        link.style.cursor = "pointer";
        link.style.pointerEvents = "auto";
      });
    } else {
      links.forEach(link => {
        link.style.cursor = "default";
        link.style.pointerEvents = "none";
      });
    }
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div ref="display" className="display">
            <RoutedNavigation navigate={this.navigate} />
            <Switch>
              <Route
                path="/"
                render={() => (
                  <Home navigate={this.navigate} playGame={this.playGame} />
                )}
                exact
              />
              <Route
                path="/about"
                render={() => <About navigate={this.navigate} />}
              />
              <Route
                path="/portfolio"
                render={() => <Portfolio navigate={this.navigate} />}
              />
              <Route
                path="/contact"
                render={() => (
                  <Contact
                    navigated={this.props.store.page.navigated}
                    gameToggled={this.gameToggled}
                  />
                )}
              />
              <Route
                path="/thankyou"
                render={() => (
                  <ThankYou navigate={this.navigate} playGame={this.playGame} />
                )}
              />
              <Route
                render={() => (
                  <Error
                    navigate={this.navigate}
                    page={this.props.store.page.page}
                  />
                )}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const App = connect(mapStateToProps)(ToConnectApp);

export default App;
