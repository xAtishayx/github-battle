import React, { Component } from "react";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="footer">
       <div> Stalking? I call it social research.</div>
        <a href="https://github.com/xatishayx/github-battle" target="blank">
          xatishayx/github-battle
        </a>
      </footer>
    );
  }
}

export default Footer;
