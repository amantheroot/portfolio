import React, { Component } from "react";
import { connect } from "react-redux";

import TotalInitialState from "../../store/initialState";

import {
  toggleGameplay,
  toggleBarReady,
  ChangeVel,
  ChangeYVel,
  ChangeXVel,
  ChangeLife,
  ChangeScore,
  BrickHit,
  ResetBricks,
  SetMessage,
  ToggleInfoProvided,
  ToggleAudio
} from "../../store/actions/formactions";

import Message from "./message";

import fsh from "../../assets/formsubmissionhandler";

import Styles from "../../styles/partials/_variables.scss";

import Bricks from "../../assets/sounds/bricks.ogg";
import Bar from "../../assets/sounds/bar.ogg";
import Wall from "../../assets/sounds/wall.ogg";

const InitialState = TotalInitialState.form;

const mapStateToProps = state => {
  return {
    store: state.form
  };
};

class ToConnectForm extends Component {
  componentDidMount() {
    fsh();
    this.refs.game.addEventListener("mousemove", e => {
      this.handleMouseMove(e);
    });
    this.refs.game.addEventListener("touchmove", e => {
      this.handleTouchMove(e);
    });
    this.props.dispatch(
      ChangeVel((InitialState.ballvel / 1280) * window.innerWidth)
    );
  }
  vwtpx = vw =>
    (Number.parseFloat(vw.split("vw")[0]) / 100) * window.innerWidth;
  HideBehindBar = () => {
    this.refs.ball.style.left = this.refs.game.offsetWidth / 2 + "px";
    this.refs.ball.style.top =
      this.refs.game.offsetHeight -
      (this.vwtpx(Styles.barBottom) + this.vwtpx(Styles.barHeight) / 2) +
      "px";
  };
  handleTouchMove = e => {
    this.handleMouseMove(e.touches[0]);
  };
  handleMouseMove = e => {
    if (this.props.store.barReady) {
      if (
        e.clientX >= this.vwtpx(Styles.barWidth) / 2 &&
        e.clientX <=
          this.refs.game.offsetWidth - this.vwtpx(Styles.barWidth) / 2
      ) {
        this.refs.bar.style.left = e.clientX + "px";
      } else if (e.clientX < this.vwtpx(Styles.barWidth) / 2) {
        this.refs.bar.style.left = this.vwtpx(Styles.barWidth) / 2 + "px";
      } else if (
        e.clientX >
        this.refs.game.offsetWidth - this.vwtpx(Styles.barWidth) / 2
      ) {
        this.refs.bar.style.left =
          this.refs.game.offsetWidth - this.vwtpx(Styles.barWidth) / 2 + "px";
      }
    }
  };
  toggleGameplay = () => {
    if (!this.props.store.game) {
      this.refs.form.childNodes[1].childNodes[4].childNodes[1].disabled = true;

      this.props.ongameToggled(true);
      this.refs.game.style.height = "100vh";
      this.props.dispatch(toggleGameplay());
      this.refs.toggleGame.disabled = true;
      this.props.dispatch(SetMessage("greet"));
      this.refs.stats.style.display = "block";

      let tobemargintop =
        -(Number.parseFloat(Styles.thewidthValue) * 12) -
        Number.parseFloat(Styles.inputsmargintop.split("vw")[0]) +
        "vw";
      let tobetop =
        Number.parseFloat(Styles.thewidthValue) * 2 +
        Number.parseFloat(Styles.inputsmargintop.split("vw")[0]) +
        "vw";

      this.refs.form.childNodes[1].style.marginTop = tobemargintop;
      this.refs.form.childNodes[1].childNodes[0].style.top = tobetop;

      setTimeout(() => {
        this.HideBehindBar();
        this.refs.stats.style.opacity = "1";
        this.refs.ball.style.opacity = "1";
        this.refs.ball.style.transition = "top 1.5s";
        this.refs.ball.style.top =
          this.refs.game.offsetHeight -
          (this.vwtpx(Styles.barBottom) +
            this.vwtpx(Styles.barHeight) +
            this.vwtpx(Styles.ballWidth) / 2) +
          "px";
        setTimeout(() => {
          this.refs.ball.style.zIndex = "1";
          this.refs.ball.style.transition = "";
          this.refs.block.style.backgroundColor = "black";
          this.refs.msg.style.opacity = "1";
          setTimeout(() => {
            this.props.dispatch(toggleBarReady());

            window.moving = setInterval(this.ballMove, 1000 / 60);
            this.PlayAudio(1);
            setTimeout(() => {
              this.refs.msg.style.opacity = "0";
              this.refs.toggleGame.disabled = false;
            }, 1000);
          }, 1000);
        }, 3000);
      }, 1000);
    } else {
      this.props.ongameToggled(false);
      clearInterval(window.moving);
      clearTimeout(window.godown);
      clearTimeout(window.godowntomove);
      clearTimeout(window.brickhitmoving);
      this.refs.ball.style.transition = "top 0.75s, left 0.75s";
      this.HideBehindBar();

      this.props.dispatch(toggleBarReady());

      this.refs.bar.style.transition = "opacity 1s, left 1s";
      this.refs.bar.style.left = this.refs.game.offsetWidth / 2 + "px";

      this.refs.block.style.backgroundColor = "white";

      this.refs.block.childNodes.forEach(brick => {
        brick.classList.add("bricktrans");
      });

      this.refs.toggleGame.disabled = true;

      this.refs.msg.style.opacity = "0";
      this.refs.stats.style.opacity = "0";

      setTimeout(() => {
        this.refs.form.childNodes[1].childNodes[4].childNodes[1].disabled = false;

        this.refs.stats.style.display = "none";
        this.refs.ball.style.zIndex = "0";
        this.refs.ball.style.transition = "";
        this.refs.ball.style.opacity = "0";
        this.refs.bar.style.transition = "opacity 1s";
        this.refs.block.childNodes.forEach(brick => {
          brick.classList.remove("bricktrans");
        });

        this.props.dispatch(toggleGameplay());
        this.props.dispatch(SetMessage(InitialState.msg));
        this.props.dispatch(ChangeLife(InitialState.lives));
        this.props.dispatch(ChangeScore(InitialState.score));
        this.props.dispatch(ResetBricks());
        this.props.dispatch(
          ChangeVel((InitialState.ballvel / 1280) * window.innerWidth)
        );
        let bxv = Math.random() < 0.5 ? -1 : 1;
        this.props.dispatch(ChangeXVel(bxv));
        this.props.dispatch(ChangeYVel(InitialState.ballyvel));
        this.refs.toggleGame.disabled = false;

        this.refs.form.childNodes[1].childNodes[0].style.top = 0;
        this.refs.form.childNodes[1].style.marginTop = 0;

        setTimeout(() => {
          this.refs.game.style.height = "auto";
        }, 1000);
      }, 1000);
    }
  };
  ballMove = () => {
    let width = this.vwtpx(Styles.ballWidth) / 2;
    let wh = this.refs.game.offsetHeight;
    let ww = this.refs.game.offsetWidth;

    //
    let btop = Number.parseInt(this.refs.ball.style.top.split("px")[0]);
    let bleft = Number.parseInt(this.refs.ball.style.left.split("px")[0]);

    let bt = btop - width;
    let br = bleft + width;
    let bb = btop + width;
    let bl = bleft - width;

    let rd = ww - br;
    let dd = wh - bb;

    //
    let bar = this.refs.bar.getClientRects()[0];
    let bricks = [...this.refs.block.childNodes]
      .map(brick => brick.getClientRects()[0])
      .filter((brick, index) => this.props.store.bricks[index].alive);
    let actbricks = this.props.store.bricks.filter(brick => brick.alive);

    let bbtd = bar.top - bb;
    let bbrd = bl - bar.right;
    let bbbd = bt - bar.bottom;
    let bbld = bar.left - br;

    let bv = this.props.store.ballvel;
    let bxv = this.props.store.ballxvel;
    let byv = this.props.store.ballyvel;

    let stepx = bv * bxv;
    let stepy = bv * byv;

    let missbrick = bricks.every(brick => {
      let brbtd = brick.top - bb;
      let brbrd = bl - brick.right;
      let brbbd = bt - brick.bottom;
      let brbld = brick.left - br;
      return (
        brbtd >= -stepy || brbbd >= stepy || brbrd >= -stepx || brbld >= stepx
      );
    });
    if (
      bt >= stepy &&
      dd + 2 * width >= -stepy &&
      bl >= -stepx &&
      rd >= stepx &&
      (bbtd >= -stepy || bbbd >= stepy || bbrd >= -stepx || bbld >= stepx) &&
      missbrick
    ) {
      this.refs.ball.style.top = btop - stepy + "px";
      this.refs.ball.style.left = bleft + stepx + "px";
    } else if (bt < stepy) {
      btop = width;
      this.refs.ball.style.top = btop + "px";
      byv *= -1;
      stepy = bv * byv;
      this.props.dispatch(ChangeYVel(byv));
      this.HitMove(btop, bleft, stepy, stepx);
      this.PlayAudio(2);
    } else if (dd + 2 * width < -stepy) {
      btop = wh + width;
      this.refs.ball.style.top = btop + "px";
      clearInterval(window.moving);
      bv = (InitialState.ballvel / 1280) * window.innerWidth;
      byv = InitialState.ballyvel;
      bxv = Math.random() < 0.5 ? -1 : 1;
      this.props.dispatch(ChangeVel(bv));
      this.props.dispatch(ChangeXVel(bxv));
      this.props.dispatch(ChangeYVel(byv));
      this.refs.ball.style.left = this.refs.game.offsetWidth / 2 + "px";
      if (this.props.store.lives > 0) {
        this.props.dispatch(ChangeLife(this.props.store.lives - 1));
        if (this.props.store.lives === 0) {
          this.gameOver();
        } else {
          this.refs.ball.style.opacity = "0";
          this.refs.ball.style.transition = "opacity 1s";
          window.godown = setTimeout(() => {
            this.refs.ball.style.top =
              this.refs.game.offsetHeight -
              (this.vwtpx(Styles.barBottom) +
                this.vwtpx(Styles.barHeight) +
                this.vwtpx(Styles.ballWidth) / 2) +
              "px";
            this.refs.ball.style.opacity = "1";
            window.godowntomove = setTimeout(() => {
              this.refs.ball.style.transition = "";
              window.moving = setInterval(this.ballMove, 1000 / 60);
              this.PlayAudio(1);
            }, 1000);
          }, 1000);
        }
      } else {
        this.gameOver();
      }
    } else if (bl < -stepx) {
      bleft = width;
      this.refs.ball.style.left = bleft + "px";
      bxv *= -1;
      stepx = bv * bxv;
      this.props.dispatch(ChangeXVel(bxv));
      this.HitMove(btop, bleft, stepy, stepx);
      this.PlayAudio(2);
    } else if (rd < stepx) {
      bleft = ww - width;
      this.refs.ball.style.left = bleft + "px";
      bxv *= -1;
      stepx = bv * bxv;
      this.props.dispatch(ChangeXVel(bxv));
      this.HitMove(btop, bleft, stepy, stepx);
      this.PlayAudio(2);
    } else if (bbtd < -stepy && bbbd < stepy && bbrd < -stepx && bbld < stepx) {
      if (bt < bar.top && bl >= bar.left && br <= bar.right) {
        btop = bar.top - width;
        this.refs.ball.style.top = btop + "px";
        byv *= -1;
        stepy = bv * byv;
        this.props.dispatch(ChangeYVel(byv));
        this.HitMove(btop, bleft, stepy, stepx);
      } else if (bb > bar.bottom && bl >= bar.left && br <= bar.right) {
        btop = bar.bottom + width;
        this.refs.ball.style.top = btop + "px";
        byv *= -1;
        stepy = bv * byv;
        this.props.dispatch(ChangeYVel(byv));
        this.HitMove(btop, bleft, stepy, stepx);
      } else if (bl < bar.left && br < bar.right) {
        bleft = bar.left - width;
        this.refs.ball.style.left = bleft + "px";
        bxv = -Math.abs(bxv);
        byv = 1;
        stepx = bv * bxv;
        stepy = bv * byv;
        this.props.dispatch(ChangeXVel(bxv));
        this.props.dispatch(ChangeYVel(byv));
        this.HitMove(btop, bleft, stepy, stepx);
      } else if (bl > bar.left && br > bar.right) {
        bleft = bar.right + width;
        this.refs.ball.style.left = bleft + "px";
        bxv = Math.abs(bxv);
        byv = 1;
        stepx = bv * bxv;
        stepy = bv * byv;
        this.props.dispatch(ChangeXVel(bxv));
        this.props.dispatch(ChangeYVel(byv));
        this.HitMove(btop, bleft, stepy, stepx);
      }
      this.PlayAudio(1);
    } else if (!missbrick) {
      let brick = bricks.find(brick => {
        let brbtd = brick.top - bb;
        let brbrd = bl - brick.right;
        let brbbd = bt - brick.bottom;
        let brbld = brick.left - br;
        return (
          brbtd < -stepy && brbbd < stepy && brbrd < -stepx && brbld < stepx
        );
      });
      let brickid = actbricks[bricks.indexOf(brick)].id;
      if (
        (bt < brick.top && bl >= brick.left && bl <= brick.right) ||
        (bt < brick.top && br >= brick.left && br <= brick.right)
      ) {
        btop = brick.top - width;
        this.refs.ball.style.top = btop + "px";
        byv *= -1;
        bv = this.BrickIncrement(brickid, bv);
        this.props.dispatch(ChangeVel(bv));
        stepy = bv * byv;
        this.props.dispatch(ChangeYVel(byv));
        this.props.dispatch(BrickHit(brickid));
        this.increaseScore(brickid);
        if (!this.checkWin()) {
          this.HitMove(btop, bleft, stepy, stepx);
        }
      } else if (
        (bb > brick.bottom && bl >= brick.left && bl <= brick.right) ||
        (bb > brick.bottom && br >= brick.left && br <= brick.right)
      ) {
        btop = brick.bottom + width;
        this.refs.ball.style.top = btop + "px";
        byv *= -1;
        bv = this.BrickIncrement(brickid, bv);
        this.props.dispatch(ChangeVel(bv));
        stepy = bv * byv;
        this.props.dispatch(ChangeYVel(byv));
        this.props.dispatch(BrickHit(brickid));
        this.increaseScore(brickid);
        if (!this.checkWin()) {
          this.HitMove(btop, bleft, stepy, stepx);
        }
      } else if (bl < brick.left && br < brick.right) {
        if (this.props.store.bricks[brickid - 1].alive) {
          if (bt < brick.top && bb < brick.bottom) {
            btop = brick.top - width;
            this.refs.ball.style.top = btop + "px";
          } else if (bb > brick.bottom && bt > brick.top) {
            btop = brick.bottom + width;
            this.refs.ball.style.top = btop + "px";
          }
          byv *= -1;
          bv = this.BrickIncrement(brickid, bv);
          this.props.dispatch(ChangeVel(bv));
          stepy = bv * byv;
          this.props.dispatch(ChangeYVel(byv));
          this.props.dispatch(BrickHit(brickid));
          this.increaseScore(brickid);
          if (!this.checkWin()) {
            this.HitMove(btop, bleft, stepy, stepx);
          }
        } else {
          bleft = brick.left - width;
          this.refs.ball.style.left = bleft + "px";
          bxv *= -1;
          bv = this.BrickIncrement(brickid, bv);
          this.props.dispatch(ChangeVel(bv));
          stepx = bv * bxv;
          this.props.dispatch(ChangeXVel(bxv));
          this.props.dispatch(BrickHit(brickid));
          this.increaseScore(brickid);
          if (!this.checkWin()) {
            this.HitMove(btop, bleft, stepy, stepx);
          }
        }
      } else if (bl > brick.left && br > brick.right) {
        if (this.props.store.bricks[brickid + 1].alive) {
          if (bt < brick.top && bb < brick.bottom) {
            btop = brick.top - width;
            this.refs.ball.style.top = btop + "px";
          } else if (bb > brick.bottom && bt > brick.top) {
            btop = brick.bottom + width;
            this.refs.ball.style.top = btop + "px";
          }
          byv *= -1;
          bv = this.BrickIncrement(brickid, bv);
          this.props.dispatch(ChangeVel(bv));
          stepy = bv * byv;
          this.props.dispatch(ChangeYVel(byv));
          this.props.dispatch(BrickHit(brickid));
          this.increaseScore(brickid);
          if (!this.checkWin()) {
            this.HitMove(btop, bleft, stepy, stepx);
          }
        } else {
          bleft = brick.right + width;
          this.refs.ball.style.left = bleft + "px";
          bxv *= -1;
          bv = this.BrickIncrement(brickid, bv);
          this.props.dispatch(ChangeVel(bv));
          stepx = bv * bxv;
          this.props.dispatch(ChangeXVel(bxv));
          this.props.dispatch(BrickHit(brickid));
          this.increaseScore(brickid);
          if (!this.checkWin()) {
            this.HitMove(btop, bleft, stepy, stepx);
          }
        }
      }
      this.PlayAudio(0);
    }
  };
  checkWin = () => {
    let alivebricks = 0;
    for (let brick of this.props.store.bricks) {
      if (brick.alive) {
        alivebricks++;
      }
    }
    if (alivebricks === 0) {
      this.gameWon();
      return true;
    } else {
      return false;
    }
  };
  BrickIncrement = (brickid, bv) => {
    let divi = 5 - Math.floor(brickid / 14);
    let Vel =
      (InitialState.ballvel / 1280) * window.innerWidth +
      (0.8 / 1280) * window.innerWidth * divi;
    if (bv < Vel) {
      return Vel;
    } else {
      return bv;
    }
  };
  HitMove = (btop, bleft, stepy, stepx) => {
    window.brickhitmoving = setTimeout(() => {
      this.refs.ball.style.top = btop - stepy + "px";
      this.refs.ball.style.left = bleft + stepx + "px";
    }, 1000 / 60);
  };
  gameOver = () => {
    this.props.dispatch(SetMessage("go"));
    this.refs.msg.style.opacity = "1";
    this.refs.ball.style.opacity = "0";
    this.refs.ball.style.transition = "opacity 1s";
    this.refs.toggleGame.disabled = true;
    setTimeout(() => {
      this.refs.ball.style.top =
        this.refs.game.offsetHeight -
        (this.vwtpx(Styles.barBottom) +
          this.vwtpx(Styles.barHeight) +
          this.vwtpx(Styles.ballWidth) / 2) +
        "px";
      this.refs.ball.style.opacity = "1";
      setTimeout(() => {
        this.refs.ball.style.transition = "";
        this.refs.toggleGame.disabled = false;
      }, 1000);
    }, 1000);
  };
  gameWon = () => {
    clearInterval(window.moving);
    this.props.dispatch(SetMessage("gw"));
    this.refs.msg.style.opacity = "1";
    this.refs.ball.style.transition = "top 0.75s, left 0.75s";
    this.refs.ball.style.left = this.refs.game.offsetWidth / 2 + "px";
    this.refs.ball.style.top =
      this.refs.game.offsetHeight -
      (this.vwtpx(Styles.barBottom) +
        this.vwtpx(Styles.barHeight) +
        this.vwtpx(Styles.ballWidth) / 2) +
      "px";
    this.refs.toggleGame.disabled = true;

    setTimeout(() => {
      this.refs.ball.style.transition = "";
      this.refs.toggleGame.disabled = false;
    }, 1000);
  };
  PlayAgain = e => {
    e.preventDefault();
    this.refs.toggleGame.disabled = true;
    this.refs.msg.childNodes[0].childNodes[0].childNodes[1].childNodes[0].disabled = true;
    this.refs.msg.childNodes[0].childNodes[0].childNodes[1].childNodes[1].disabled = true;
    clearTimeout(window.godown);
    clearTimeout(window.godowntomove);
    [...this.refs.block.childNodes].forEach(brick => {
      brick.style.transition = "background-color 1s, opacity 1s";
    });
    this.refs.msg.style.opacity = "0";
    this.props.dispatch(ResetBricks());
    setTimeout(() => {
      this.refs.toggleGame.disabled = false;
      this.refs.msg.childNodes[0].childNodes[0].childNodes[1].childNodes[0].disabled = false;
      this.refs.msg.childNodes[0].childNodes[0].childNodes[1].childNodes[1].disabled = false;
      [...this.refs.block.childNodes].forEach(brick => {
        brick.style.transition = "background-color 1s";
      });
      this.props.dispatch(
        ChangeVel((InitialState.ballvel / 1280) * window.innerWidth)
      );
      let bxv = Math.random() < 0.5 ? -1 : 1;
      this.props.dispatch(ChangeXVel(bxv));
      this.props.dispatch(ChangeYVel(InitialState.ballyvel));
      this.props.dispatch(ChangeLife(InitialState.lives));
      this.props.dispatch(ChangeScore(InitialState.score));
      this.props.dispatch(SetMessage(InitialState.msg));

      window.moving = setInterval(this.ballMove, 1000 / 60);
      this.PlayAudio(1);
    }, 1000);
  };
  ReturnToForm = e => {
    e.preventDefault();
    this.refs.msg.childNodes[0].childNodes[0].childNodes[1].childNodes[0].disabled = true;
    this.refs.msg.childNodes[0].childNodes[0].childNodes[1].childNodes[1].disabled = true;
    setTimeout(() => {
      this.refs.msg.childNodes[0].childNodes[0].childNodes[1].childNodes[0].disabled = false;
      this.refs.msg.childNodes[0].childNodes[0].childNodes[1].childNodes[1].disabled = false;
    }, 1000);

    this.toggleGameplay();
  };
  increaseScore = brickid => {
    let score = this.props.store.score;
    let divi = 6 - Math.floor(brickid / 14);
    score += 5 * divi;
    this.props.dispatch(ChangeScore(score));
  };
  givenInput = () => {
    let inputs = [...this.refs.form.childNodes];
    let values = [...inputs[0].childNodes].map(input => input.value);
    values.push(inputs[1].childNodes[0].childNodes[1].value);
    let infoprovided = false;
    values.forEach(val => {
      if (val !== "") {
        infoprovided = true;
      }
    });

    this.props.dispatch(ToggleInfoProvided(infoprovided));
  };
  formSubmit = e => {
    e.target.reset();
    this.props.dispatch(ToggleInfoProvided(false));
  };
  toggleAudio = () => {
    this.props.dispatch(ToggleAudio());
  };
  PlayAudio = index => {
    if (this.props.store.audio) {
      let audios = [Bricks, Bar, Wall];
      let audio = new Audio(audios[index]);
      audio.play();
    }
  };
  render() {
    return (
      <div
        className={this.props.store.game ? "form breakout" : "form"}
        ref="game"
      >
        <form
          ref="form"
          id="gform"
          method="POST"
          action="https://script.google.com/macros/s/AKfycbwQxgRmy3YEyIyghS30fYlVFhvR6aAiQwxf7xN9jg/exec"
        >
          <div className="inputs">
            <input
              id="honeypot"
              style={{ display: "none" }}
              name="honeypot"
              type="text"
              placeholder="Are You A Bot?"
            />
            <input
              onChange={this.givenInput}
              name="fname"
              type="text"
              placeholder="First Name"
              required
            />
            <input
              onChange={this.givenInput}
              name="lname"
              type="text"
              placeholder="Last Name"
              required
            />
            <input
              onChange={this.givenInput}
              name="email"
              type="email"
              placeholder="Your Email"
              required
            />
            <input
              onChange={this.givenInput}
              name="subject"
              type="text"
              placeholder="Subject"
              required
            />
          </div>
          <div className="gamearea">
            <div className="input__block">
              <div ref="block" className="block">
                {this.props.store.bricks.map(brick => {
                  let classname = "brick ";
                  classname += brick.alive ? "" : "dead";
                  return <div key={brick.id} className={classname} />;
                })}
              </div>
              <textarea
                onChange={this.givenInput}
                name="message"
                placeholder="Your Lovely Message Goes Here :)"
                required
              />
            </div>
            <div ref="msg" className="msg">
              <Message
                msg={this.props.store.msg}
                score={this.props.store.score}
                onplayagain={this.PlayAgain}
                onreturn={this.ReturnToForm}
              />
            </div>
            <div ref="stats" className="stats">
              <span className="lives-stat">
                <code>
                  <h1>LIVES: {this.props.store.lives}</h1>
                </code>
              </span>
              <span className="score-stat">
                <code>
                  <h1>SCORE: {this.props.store.score}</h1>
                </code>
              </span>
            </div>
            <div ref="ball" className="ball" />
            <div className="input__bar">
              <div ref="bar" className="bar" />
              <button type="submit" value="submit">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
        <div className="toggleGame">
          <button ref="toggleGame" onClick={this.toggleGameplay}>
            {this.props.store.game ? "GO BACK TO FORM" : "PLAY ATARI BREAKOUT"}
          </button>
          <button ref="toggleAudio" onClick={this.toggleAudio}>
            <i
              className={
                `fas fa-volume-` + (this.props.store.audio ? "up" : "mute")
              }
            />
          </button>
          <div className="toggleGame__handle">
            <i className="fas fa-cog" />
          </div>
        </div>
      </div>
    );
  }
}

const Form = connect(mapStateToProps)(ToConnectForm);

export default Form;
