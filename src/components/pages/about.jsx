import React, { Component } from "react";

import { Helmet } from "react-helmet";

import Skills from "../about/skills";

import Me from "../../assets/images/me.jpg";

import Styles from "../../styles/partials/_variables.scss";

import Footer from "../layout/footer";

import { connect } from "react-redux";

import { BrainLoaded } from "../../store/actions/aboutactions";

const mapStateToProps = state => {
  return {
    store: state.about
  };
};

class ToConnectAbout extends Component {
  componentDidMount() {
    if (this.refs.about.offsetHeight <= window.innerHeight) {
      this.brainIntro();
      document.removeEventListener("scroll", this.handleScroll);
    }
    document.addEventListener("scroll", this.handleScroll);
    document.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("resize", this.handleResize);
  }
  handleResize = () => {
    if (!this.props.store.brainloaded) {
      if (this.refs.about.offsetHeight <= window.innerHeight) {
        this.brainIntro();
        document.removeEventListener("scroll", this.handleScroll);
      }
    }
  };
  handleScroll = () => {
    if (
      window.scrollY >=
        this.refs.about.childNodes[2].offsetTop -
          this.refs.about.childNodes[2].offsetHeight / 4 ||
      window.innerHeight + window.scrollY >=
        this.refs.about.offsetHeight - 10 ||
      this.refs.about.offsetHeight <= window.innerHeight
    ) {
      this.brainIntro();
      document.removeEventListener("scroll", this.handleScroll);
    }
  };
  brainIntro = () => {
    let braintemplate = this.refs.about.childNodes[2].childNodes[0]
      .childNodes[0];
    let brainparts = this.refs.about.childNodes[2].childNodes[0].childNodes[1];

    braintemplate.style.top = Styles.top;
    brainparts.style.top = Styles.top;

    braintemplate.style.transform = "scale(1)";
    brainparts.style.transform = "scale(1)";

    let infotransTime = 350;

    let infoBps = [
      ...this.refs.about.childNodes[2].childNodes[0].childNodes[2].childNodes[0]
        .childNodes
    ].filter((v, id) => id > 2);

    infoBps.forEach((inf, index) => {
      setTimeout(() => {
        if (
          window.innerWidth >=
          Number.parseInt(Styles.BrainBreakingPoint.split("px")[0])
        ) {
          inf.style.opacity = "0.3";
        } else {
          inf.style.opacity = 1;
        }
      }, 1000 + index * infotransTime);
    });

    let infoCanvas = this.refs.about.childNodes[2].childNodes[0].childNodes[2]
      .childNodes[0].childNodes[1];

    setTimeout(() => {
      brainparts.style.zIndex = 1;
      infoBps.forEach(info => {
        info.style.zIndex = 1;
      });
      infoCanvas.style.opacity = 1;
      setTimeout(() => {
        this.props.dispatch(BrainLoaded());
      }, 1000);
    }, 1000 + infotransTime * infoBps.length);
  };
  render() {
    return (
      <div ref="about" className="about">
        <Helmet>
          <meta
            name="description"
            content="About Aman Kumar, A Front End React Web Developer based in Hyderabad, India."
          />
          <title>About Me | Aman Kumar | Front End Web Developer</title>
        </Helmet>
        <div className="about__me">
          <h1>ABOUT ME</h1>

          <div className="my__pic">
            <img src={Me} alt="me" />
          </div>

          <h2>Who Am I?</h2>
          <p>
            Unless you've directly landed here skipping the homepage my name is
            Aman Kumar (Pronounced <strong>"Aam-un Koo-maar"</strong>).
            <br />I am a Front End Web Developer based in{" "}
            <em>Hyderabad, India.</em> I am addicted to programming, it's fun to
            come up with new and creative ideas to build awesome web apps for my
            clients. But I am not stopping there, I aim to become a full stack
            developer and also learn machine learning (wish me luck).
            <br />
            <span className="tac">
              As a result I am contantly learning new things every single day.
            </span>
            That's also one of the reasons why I love web development, I love
            learning new stuff. The field is changing rapidly with new
            libraries, frameworks, build tools, etc. So, whenever I am not
            coding, I'll be watching tutorials on new technologies to improve my
            skills.
            <br />
            <br />I spend roughly 12 hours a day on my computer, 8 hours to
            code, 2 hours to browse reddit and the rest to play video games. You
            can call me a workaholic. My main sources of energy are my
            willpower, commitment to the project, a little bit of stubbornness{" "}
            and a lot of coffee.
          </p>

          <h2>So What Exactly Do I Do?</h2>
          <p>
            We already know that I'm a web developer, I build websites and web
            applications, but does a filmmaker just shoot vidoes? does a painter
            just apply colors on a canvas?
            <br />
            I'm passionate about my work and I can only rest when my clients are
            fully satisfied. My work is 50% communication to ensure you are
            getting what you asked for. I like my websites <strong>Fast</strong>
            , <strong>Responsive</strong>, <strong>Dynamic</strong>,{" "}
            <strong>Compatible</strong> and <strong>Up To Date</strong> with the
            technologies.
            <br />
            <strong className="tac">
              I don't just build websites, I build Experiences.
            </strong>
          </p>

          {/* <h2>I Like My Websites...</h2>
          <div className="ilmw">
            <div className="ilmw--item">
              <h3>Fast</h3>
              <p>Every Millisecond Counts.</p>
            </div>
            <div className="ilmw--item">
              <h3>Responsive</h3>
              <p>Desktop, Mobile, Tablet, 65 inch TV, etc...</p>
            </div>
            <div className="ilmw--item">
              <h3>Dynamic</h3>
              <p>Nobody Likes Their Website To Be Static.</p>
            </div>
            <div className="ilmw--item">
              <h3>Up To Date</h3>
              <p>Only The Latest And Best Technologies Used.</p>
            </div>
            <div className="ilmw--item">
              <h3>Compatible</h3>
              <p>Supported By Almost All Browsers. No One Left Behind.</p>
            </div>
          </div> */}
        </div>

        <h2>Technologies I Use...</h2>
        <Skills brainloaded={this.props.store.brainloaded} />
        <div className="about__footer">
          <div className="about__footer--contact">
            <h1>Convinced?</h1>
            <button onClick={() => this.props.navigate("contact", 3)}>
              Contact Me
            </button>
          </div>
          <div className="about__footer--portfolio">
            <h1>Not Yet?</h1>
            <button onClick={() => this.props.navigate("portfolio", 2)}>
              See My Projects
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const About = connect(mapStateToProps)(ToConnectAbout);

export default About;
