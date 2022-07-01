import React from "react";
import { Link } from "react-router-dom";
import ecommerce from "../../images/ecommerce.jpg";
import webApps from "../../images/web-application.jpg";
import mobileApps from "../../images/mobile-application.jpg";
import sofTest from "../../images/software-testing.jpg";
import backgVideo from "../../images/Floating-Blue.mp4";


const slider = () => {
  // const mystyle = {
  //   border: "1px",
  //   borderStyle: "solid",
  //   borderColor: "#fff",
  //   padding: "0.5em"
  // };
  return (
    <>

      <div id="myCarousel" className="carousel slide" data-ride="carousel" >

        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="bg-slider_video">
            <video className="bg-slider_video__content" autoplay="True" loop="True" muted="True">
              <source src={backgVideo} type="video/mp4" />
              {/* this text is in case when browser is not supported this video */}
              Your browser is not supported!
            </video>
          </div>
          <div className="item active">
            <img src={webApps} alt="first" />

            <div className="carousel-caption">
              <h1>WEB APPLICATION DEVELOPMENT</h1>
              <h3>WE CREATE UNIQUE, FOCUS AND BUSINESS-AWARE INTERACTIVE AND RESPONSIVE WEBSITE AND PORTALS.</h3>
              <br /><br />
              <Link to="/" className="btn btn--cyan">
                <p2>
                  VIEW MORE
                </p2>
              </Link>
            </div>
          </div>
          <div className="item">
            <img src={mobileApps} alt="second" />
            <div className="carousel-caption">
              <h1>MOBILE APPLICATION DEVELOPMENT</h1>
              <h3>CLIENT-FOCUS, EYE-CATCHING AND UNIQUE MOBILE APPLICATION DESIGNS THAT INSPIRE, ENGAGE AND DELIVER RESULTS.</h3>
              <br /><br />
              <Link to="/" className="btn btn--cyan">
                <p2 >
                  VIEW MORE
                </p2>
              </Link>
            </div>
          </div>
          <div className="item">
            <img src={ecommerce} alt="third" />
            <div className="carousel-caption">
              <h1>E-COMMERCE DEVELOPMENT</h1>
              <h3>CREATING VALUE FOR ONLINE STORS AND ENCHANCE BUSINESS THROUGH INNOVATIVE E-COMMERCE SOLUTIONS.</h3>
              <br /><br />
              <Link to="/" className="btn btn--cyan">

                <p2>
                  VIEW MORE
                </p2>
              </Link>
            </div>
          </div>
          <div className="item">
            <img src={sofTest} alt="fourth" />
            <div className="carousel-caption">
              <h1>QA/SOFTWARE TESTING</h1>
              <h3>WE BUILD AND TEST SCALABLE SOFTWARE SOLUTIONS AND DELIVERS A FULL RANGE OF WEB, MOBILE AND IoT TESTING.</h3>
              <br /><br />
              <Link to="/" className="btn btn--cyan">

                <p2>
                  VIEW MORE
                </p2>
              </Link>
            </div>
          </div>
        </div>
        {/* Controls */}
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  )
}
export default slider;
