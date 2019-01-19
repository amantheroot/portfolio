import React, { Component } from "react";

import { Helmet } from "react-helmet";

class Error extends Component {
  render() {
    return (
      <div className="error">
        <Helmet>
          <meta
            name="description"
            content="404 Error Page of Aman Kumar, A Front End React Web Developer based in Hyderabad, India."
          />
          <title>Your Lost | Aman Kumar</title>
        </Helmet>
        <h1>404</h1>
        <h2>Curious One Aren't You ;)</h2>
        <h2>
          The Requested Page{" "}
          <q>
            <em>{this.props.page}</em>
          </q>{" "}
          Was Not Found.
        </h2>
        <button onClick={() => this.props.navigate("home", 0)}>
          Back To The Site!
        </button>
      </div>
    );
  }
}

export default Error;
