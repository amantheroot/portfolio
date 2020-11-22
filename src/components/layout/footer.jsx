import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span>Copyright &copy; {new Date().getFullYear()}</span> AMAN KUMAR
      </footer>
    );
  }
}

export default Footer;
