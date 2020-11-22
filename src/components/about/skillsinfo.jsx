import React, { Component } from "react";

import Styles from "../../styles/partials/_variables.scss";

class SkillsInfo extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.drawInfo();
      window.addEventListener("resize", this.handleResize);
      [...this.refs.info.childNodes]
        .filter((v, id) => id > 2)
        .forEach((inf, id) => {
          inf.addEventListener("mouseover", () => {
            this.props.onMouseOver(id, true);
          });
          inf.addEventListener("mouseout", () => {
            this.props.onMouseOut(id, true);
          });
        });
    }, 1000);
  }
  handleResize = () => {
    if (this.props.brainloaded) {
      this.drawInfo();
      let opac = 1;
      if (
        window.innerWidth >=
        Number.parseInt(Styles.BrainBreakingPoint.split("px")[0])
      ) {
        opac = 0.3;
      }
      [...this.refs.info.childNodes]
        .filter((val, id) => id > 2)
        .forEach((inf) => (inf.style.opacity = opac));
    }
  };
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  drawInfo = () => {
    let canvas = this.refs.info__canvas;
    canvas.width = this.refs.info.offsetWidth;
    canvas.height = this.refs.info.offsetHeight;
    let ctx = canvas.getContext("2d");

    let canvastop = canvas.getClientRects()[0].top;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let infos = [...this.refs.info.childNodes]
      .filter((val, id) => id > 2)
      .map((inf) => inf.getClientRects()[0]);

    let centres = [...[...this.refs.info.childNodes][0].childNodes]
      .filter((v, id) => id < 6)
      .map((ctr) => ctr.getClientRects()[0]);

    let pseudocentres = [...[...this.refs.info.childNodes][0].childNodes]
      .filter((v, id) => id > 5)
      .map((ctr) => ctr.getClientRects()[0]);

    let ow = 10;

    if (
      window.innerWidth <=
      Number.parseInt(Styles.BrainFinalFinalBreakingPoint.split("px")[0])
    ) {
      ow = 0;
    }

    infos.forEach((inf, id) => {
      let infotop = inf.y - canvastop;
      let infoleft = inf.left;
      let inforight = inf.right;
      let pcntrx = pseudocentres[id].x;
      let pcntry = pseudocentres[id].y - canvastop;
      let cntrx = centres[id].x;
      let cntry = centres[id].y - canvastop;

      ctx.beginPath();
      ctx.strokeStyle = "#393e46";
      ctx.lineWidth = 2;
      if (
        window.innerWidth >
        Number.parseInt(Styles.BrainBreakingPoint.split("px")[0])
      ) {
        if (id % 2 === 0) {
          ctx.moveTo(infoleft - ow, infotop);
          ctx.lineTo(inforight + ow, infotop);
        } else {
          ctx.moveTo(inforight + ow, infotop);
          ctx.lineTo(infoleft - ow, infotop);
        }
      } else {
        if (id % 2 === 0) {
          ctx.moveTo(inforight + ow, infotop);
          ctx.lineTo(infoleft - ow, infotop);
        } else {
          ctx.moveTo(infoleft - ow, infotop);
          ctx.lineTo(inforight + ow, infotop);
        }
        ctx.lineTo(pcntrx, pcntry);
      }
      ctx.lineTo(cntrx, cntry);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cntrx, cntry, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.arc(cntrx, cntry, 8, 0, Math.PI * 2);
      ctx.stroke();
    });
  };
  render() {
    return (
      <div ref="info" className="info">
        <div className="info__centres">
          <div className="info__centre--lt" />
          <div className="info__centre--rt" />
          <div className="info__centre--lm" />
          <div className="info__centre--rm" />
          <div className="info__centre--lb" />
          <div className="info__centre--rb" />
          <div className="info__pseudocentre--lt" />
          <div className="info__pseudocentre--rt" />
          <div className="info__pseudocentre--lm" />
          <div className="info__pseudocentre--rm" />
          <div className="info__pseudocentre--lb" />
          <div className="info__pseudocentre--rb" />
        </div>
        <canvas ref="info__canvas" className="info__canvas" />
        <div className="info__empty" />
        <div className="info__bp1">
          <h1>React/Angular</h1>
          <p>
            Javascript libraries/frameworks every front end dev can't live
            without. Nowadays, you just can't build awesome web applications
            without these.
          </p>
          <h2>SKILL LEVEL - 75%</h2>
        </div>
        <div className="info__bp2">
          <h1>Next.js</h1>
          <p>
            The best react framework out there, that helps me build robust
            static PWAs with ease. Really great for developer experience &amp;
            performance of the web application.
          </p>
          <h2>SKILL LEVEL - 85%</h2>
        </div>
        <div className="info__bp3">
          <h1>Node.js</h1>
          <p>
            One of the most versatile &amp; reliable back end languages that
            every back end dev should know about. My choice for building agile
            &amp; robust API services.
          </p>
          <h2>SKILL LEVEL - 90%</h2>
        </div>
        <div className="info__bp4">
          <h1>MongoDB</h1>
          <p>
            A very popular database management system for storing, managing
            &amp; maintaining the precious data of any application. Really
            versatile &amp; convenient in it's development experience.
          </p>
          <h2>SKILL LEVEL - 80%</h2>
        </div>
        <div className="info__bp5">
          <h1>RESTful APIs</h1>
          <p>
            A software architectural style for building interoperable API
            Services. A must follow for building any kind of full stack
            application.
          </p>
          <h2>SKILL LEVEL - 95%</h2>
        </div>
        <div className="info__bp6">
          <h1>Typescript</h1>
          <p>
            A superset of javascript for making your apps strongly typed &amp;
            less prone to bugs. My go-to solution for debugging when working on
            any project.
          </p>
          <h2>SKILL LEVEL - 90%</h2>
        </div>
      </div>
    );
  }
}

export default SkillsInfo;
