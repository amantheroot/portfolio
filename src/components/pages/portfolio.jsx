import React, { Component } from "react";

import { Helmet } from "react-helmet";

import Footer from "../layout/footer";
import WorkCard from "../portfolio/workcard";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <Helmet>
          <meta
            name="description"
            content="Work of Aman Kumar, A Full Stack ReactJS and NodeJS Web Developer based in Hyderabad, India."
          />
          <title>My Work | Aman Kumar | Full Stack Web Developer</title>
        </Helmet>
        <h1>MY WORK</h1>
        <p>(and what you're actually here for...)</p>
        <div className="mywork">
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </div>
        <div className="portfolio__contact">
          <div>
            <h1>Now, Would You Please?</h1>
            <button onClick={() => this.props.navigate("contact", 3)}>
              Say Hi!
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
