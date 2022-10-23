import { Component } from "react";
import "./landing-page.css";
export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <nav className="navbar sticky-top navbar-expand-lg nav-bar-background navbar-light bg-light">
        <a class="navbar-brand" href="#">TinDog</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="#navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand">Ayman </a>
          <ul className="navbar-nav ms-auto">
          {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item">Action</a>
          <a className="dropdown-item">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
            <li className="nav-item">
              <a className="nav-link" href="">
                contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Download
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <h1>Meet interesting dogs nearby</h1>
      <div className="block">
          <button type="button" class="btn btn-primary">Download</button>
          <button type="button" class="btn btn-primary">Download</button>
      </div>
      <img src={require("../images/iphone6.png")}></img>
      </div>
    );
  }
}
