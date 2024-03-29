import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import $ from "jquery";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).ready(function() {
      var showHeaderAt = 150;
      var win = $(window),
        body = $("body");
      // fixed header only on larger screen devices
      if (win.width() > 600) {
        // "fixed" class on the body element.
        win.on("scroll", function(e) {
          if (win.scrollTop() > showHeaderAt) {
            body.addClass("fixed");
          } else {
            body.removeClass("fixed");
          }
        });
      }
    });
  }

  render() {
    return (
      <div>
        <header class="header-fixed">
          <div class="header-limiter">
            <h1>
              <a href="#">
                <span className="compName1">&nbsp;M</span>
                <span className="compName2">&nbsp;o</span>
                <span className="compName3">&nbsp;T</span>
                <span className="compName4">&nbsp;o</span>
              </a>
            </h1>

            <nav>
              <Link to="/">
                <a>Home</a>
              </Link>

              <Link to="/pricing">
                <a>Pricing</a>
              </Link>

              <Link to="/about">
                <a>About</a>
              </Link>

              <Link to="/faq">
                <a>Faq</a>
              </Link>

              <Link to="/contact">
                <a>Contact</a>
              </Link>
            </nav>
          </div>
        </header>

        <div class="header-fixed-placeholder"></div>
      </div>
    );
  }
}

export default Nav;
