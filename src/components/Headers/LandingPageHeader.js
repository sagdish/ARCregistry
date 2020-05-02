import React from "react";
// reactstrap components
import { Button, Container } from "reactstrap";

import  altBackground from "assets/img/mark-galer-6WOqqX-slV4-unsplash.jpg"

const ARClogo = require('../../assets/img/white-logo.png');
// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        if (pageHeader.current) {
          pageHeader.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
        }
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      {/* <div className="page-header page-header-small"> */}
      <div className="page-header" id="top">
        {/* <div
          className="page-header-image"
          style={{
            // backgroundImage: "url(" + require("assets/img/layli-background.jpg") + ")"
            backgroundImage: "url(" + require("assets/img/mark-galer-6WOqqX-slV4-unsplash.jpg") + ")"
          }}
          ref={pageHeader}
        ></div> */}
        <img
          className="page-header-image"
          alt=""
          src={altBackground}
          ref={pageHeader}
        />
        <div className="content-center">
          <Container>
            {/* <h1 className="title">ARC Registry Counselors</h1> */}

            {/* ARC logo image: */}
              <div style={{ width:"65%", margin: "auto"}}>
                <img src={ARClogo} alt='' />
              </div>
            <br />

            {/* <div className="text-center">
              <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-google-plus"></i>
              </Button>
            </div> */}
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
