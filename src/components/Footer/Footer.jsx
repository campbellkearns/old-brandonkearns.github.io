import React, { Component } from "react";

import Link from "gatsby-link";
import GithubIcon from "react-share"

import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <UserLinks config={config} labeled />
        <div className="notice-container">
          <p>{copyright}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
