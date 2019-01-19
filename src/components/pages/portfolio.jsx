import React, { Component } from "react";

import { Helmet } from "react-helmet";

import Footer from "../layout/footer";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <Helmet>
          <meta
            name="description"
            content="Work of Aman Kumar, A Front End React Web Developer based in Hyderabad, India."
          />
          <title>My Work | Aman Kumar | Front End Web Developer</title>
        </Helmet>
        <h1>MY WORK</h1>
        <p>(and what you're actually here for...)</p>
        {/* <div className="mywork">
          <h1>Coming Soon...</h1>
        </div> */}
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
