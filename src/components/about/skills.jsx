import React, { Component } from "react";
import BrainTemplate from "./braintemplate";
import BrainParts from "./brainparts";
import SkillsInfo from "./skillsinfo";

import Styles from "../../styles/partials/_variables.scss";

import { connect } from "react-redux";
import { SetSize } from "../../store/actions/aboutactions";

const mapStateToProps = state => {
  return {
    store: state.about
  };
};

class ToConnectSkills extends Component {
  componentDidMount() {
    setTimeout(() => {
      let size = this.refs.skills.childNodes[0].childNodes[0].childNodes[0]
        .offsetHeight;
      this.props.dispatch(SetSize(size));
      this.refs.skills.childNodes[0].childNodes[0].classList.add(
        "brain__updown"
      );
      this.refs.skills.childNodes[0].childNodes[1].classList.add(
        "brain__updown"
      );
    }, 1000);
    window.addEventListener("resize", this.handleWindowResize);
  }
  handleWindowResize = () => {
    if (
      window.innerWidth <=
      Number.parseInt(Styles.BrainFinalFinalBreakingPoint.split("px")[0])
    ) {
      this.props.dispatch(
        SetSize(Number.parseInt(Styles.breakbreaksize.split("px")[0]))
      );
    } else if (
      window.innerWidth <=
      Number.parseInt(Styles.BrainFinalBreakingPoint.split("px")[0])
    ) {
      this.props.dispatch(
        SetSize(Number.parseInt(Styles.breaksize.split("px")[0]))
      );
    } else {
      this.props.dispatch(SetSize(Number.parseInt(Styles.size.split("px")[0])));
    }
  };
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }
  handleMouseOver = (id, frominfo) => {
    if (this.props.brainloaded) {
      let infos = [
        ...this.refs.skills.childNodes[0].childNodes[2].childNodes[0].childNodes
      ].filter((v, id) => id > 2);

      let brainparts = [
        ...this.refs.skills.childNodes[0].childNodes[1].childNodes[0]
          .childNodes[0].childNodes
      ];

      let index = id;
      if (id === 0 || id === 1) {
        index = id + 4;
      } else if (id === 4 || id === 5) {
        index = id - 4;
      }
      if (frominfo) {
        infos[id].style.opacity = 1;
        brainparts[index].style.fillOpacity = 0.7;
      } else {
        infos[index].style.opacity = 1;
        brainparts[id].style.fillOpacity = 0.7;
        this.ShiftBrain(id);
      }
    }
  };
  handleMouseOut = (id, frominfo) => {
    if (this.props.brainloaded) {
      let infos = [
        ...this.refs.skills.childNodes[0].childNodes[2].childNodes[0].childNodes
      ].filter((v, id) => id > 2);

      let brainparts = [
        ...this.refs.skills.childNodes[0].childNodes[1].childNodes[0]
          .childNodes[0].childNodes
      ];

      let index = id;
      if (id === 0 || id === 1) {
        index = id + 4;
      } else if (id === 4 || id === 5) {
        index = id - 4;
      } else {
        index = id;
      }
      if (frominfo) {
        if (window.innerWidth >= 1250) {
          infos[id].style.opacity = 0.3;
        } else {
          infos[id].style.opacity = 1;
        }
        brainparts[index].style.fillOpacity = 0;
      } else {
        if (window.innerWidth >= 1250) {
          infos[index].style.opacity = 0.3;
        } else {
          infos[index].style.opacity = 1;
        }
        brainparts[id].style.fillOpacity = 0;
        this.ShiftBrainBack();
      }
    }
  };
  ShiftBrain = id => {
    let braintemplate = this.refs.skills.childNodes[0].childNodes[0];
    let brainparts = this.refs.skills.childNodes[0].childNodes[1];

    clearTimeout(window.getclassback);
    braintemplate.classList.remove("brain__updown");
    brainparts.classList.remove("brain__updown");

    let mt = 0;
    let ml = 0;
    let m = 5;
    switch (id) {
      case 0:
        mt = -m;
        ml = m;
        break;
      case 1:
        mt = -m;
        ml = -m;
        break;
      case 2:
        ml = m;
        break;
      case 3:
        ml = -m;
        break;
      case 4:
        mt = m;
        ml = m;
        break;
      case 5:
        mt = m;
        ml = -m;
        break;
      default:
        break;
    }
    braintemplate.style.marginTop = mt + "px";
    braintemplate.style.marginLeft = ml + "px";

    brainparts.style.marginTop = mt + "px";
    brainparts.style.marginLeft = ml + "px";
  };
  ShiftBrainBack = () => {
    let braintemplate = this.refs.skills.childNodes[0].childNodes[0];
    let brainparts = this.refs.skills.childNodes[0].childNodes[1];

    braintemplate.style.marginTop = 0 + "px";
    braintemplate.style.marginLeft = 0 + "px";

    brainparts.style.marginTop = 0 + "px";
    brainparts.style.marginLeft = 0 + "px";

    window.getclassback = setTimeout(() => {
      braintemplate.classList.add("brain__updown");
      brainparts.classList.add("brain__updown");
    }, 500);
  };
  render() {
    return (
      <div ref="skills" className="skills">
        <div className="brain">
          <div className="brain__template">
            <BrainTemplate />
          </div>
          <div className="brain__parts">
            <BrainParts
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
              size={this.props.store.size}
            />
          </div>
          <div className="skills__info">
            <SkillsInfo
              brainloaded={this.props.brainloaded}
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
            />
          </div>
        </div>
      </div>
    );
  }
}

const Skills = connect(mapStateToProps)(ToConnectSkills);

export default Skills;
