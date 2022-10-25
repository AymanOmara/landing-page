import { Component } from "react";
import "./landing-page.css";
export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid header-section">
          <nav className="navbar sticky-top navbar-expand-lg nav-bar-background navbar-light">
            <a class="navbar-brand title-txt" href="#">
              tinDog
            </a>
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
              <ul className="navbar-nav ms-auto">
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

          <div className="row">
            <div className="col-lg-6">
              <p className="title-txt">Meet new and interesting dogs nearby</p>
              <div className="download-btn">
                <button className="btn btn-outline-dark btn-lg">
                  <span className="fa-brands fa-apple"></span>Download
                </button>
                <button className="btn btn-outline-light download-btn btn-lg">
                  <img src={require("../images/apple.svg")}></img> Download
                </button>
              </div>
            </div>
            <img
              className="col-lg-4 rotate-img iphone-dog-img"
              src={require("../images/iphone6.png")}
            ></img>
          </div>
        </div>
        <div className="second-section">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img
                className="second-section-img"
                src={require("../images/tick-sign.png")}
              ></img>
              <p className="second-section-title">Easy to use</p>
              <p className="second-section-sub-title">
                so easy to use even your<br></br> dog could do it
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img
                className="second-section-img"
                src={require("../images/tick-sign.png")}
              ></img>
              <p className="second-section-title">Elite Clientele</p>
              <p className="second-section-sub-title">
                {" "}
                we have all the dogs,the<br></br> greatest dogs.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img
                className="second-section-img"
                src={require("../images/heart.jpeg")}
              ></img>
              <p className="second-section-title">Guaranteed to work.</p>
              <p className="second-section-sub-title">
                Find the love of your dog's life<br></br> or your money back.
              </p>
            </div>
          </div>
        </div>

        <div className="third-section">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div>
                  <div>
                    <p className="third-section-title">
                      {" "}
                      I no longer have to sniff other dogs for <br /> love. I've
                      found the hottest Corgi on <br /> TinDog. Woof.
                    </p>
                  </div>
                  <div>
                    <img
                      className="third-section-images"
                      src={require("../images/dog-img.jpg")}
                    ></img>
                    <span className="third-section-sub-title">
                      Puble NewYork
                    </span>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div>
                  <div>
                    <p className="third-section-title">
                      My dog used to be so lonely, but with
                      <br /> TinDog's help, they've found the love of
                      <br /> their life. I think.
                    </p>
                  </div>
                  <div>
                    <img
                      className="third-section-images"
                      src={require("../images/lady-img.jpg")}
                    ></img>
                    <span className="third-section-sub-title">
                      Puble NewYork
                    </span>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div>
                  <div>
                    <p className="third-section-title">
                      {" "}
                      I no longer have to sniff other dogs for <br /> love. I've
                      found the hottest Corgi on <br /> TinDog. Woof.
                    </p>
                  </div>
                  <div>
                    <img
                      className="third-section-images"
                      src={require("../images/dog-img.jpg")}
                    ></img>
                    <span className="third-section-sub-title">
                      Puble NewYork
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="logo-sections ">
          <img
            className="logo-section-imgs"
            src={require("../images/TechCrunch.png")}
          ></img>
          <img
            className="logo-section-imgs"
            src={require("../images/tnw.png")}
          ></img>
          <img
            className="logo-section-imgs"
            src={require("../images/mashable.png")}
          ></img>
          <img
            className="logo-section-imgs"
            src={require("../images/bizinsider.png")}
          ></img>
        </div>
      </div>
    );
  }
}
