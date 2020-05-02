import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  // React.useEffect(() => {
  //   document.body.classList.add("landing-page");
  //   document.body.classList.add("sidebar-collapse");
  //   document.documentElement.classList.remove("nav-open");
  //   return function cleanup() {
  //     document.body.classList.remove("landing-page");
  //     document.body.classList.remove("sidebar-collapse");
  //   };
  // });
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us" id="about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description" style={{fontWeight: "bold" }}>
                ARC Registry Counselors, Inc. provides contract staffing services to correctional facilities and hospitals 
                in California who require assistance in locating physicians, mental health professionals, 
                and allied/ancillary healthcare professionals.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/login.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Psychology has not always existed as it has today. 
                      In fact, it is considered a relatively young discipline, 
                      although as one eminent psychologist explained, 
                      it has a short past but a long history." <br></br>
                      <br></br>
                      <small></small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg3.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg1.jpg") + ")"
                    }}
                  ></div>
                  <h3>
                    Why Work Here?
                  </h3>
                  <p>
                  ARC is owned and operated by a Clinical Psychologist who knows first hand 
                  the rewarding niches available in correctional settings.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center" id="positions">
          <Container>
            <h2 className="title">Positions</h2>
            <div className="team">
              <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                  <div className="team-player">
                    <h4 className="title">
                      ARC Registry Counselors, Inc. is in need of Psychologist to provide services 
                      to California correctional facilities throughout the State. 
                      We have an urgent need for the following locations:
                    </h4>
                    <p className="category text-info" style={{marginTop: "40px"}}>Stockton, CA</p>
                    <p className="category text-info">Vacaville, CA</p>
                    <p className="category text-info">Elk Grove, CA</p>
                    <p className="description" style={{textAlign: 'left'}}>
                      Qualifications:
                      <br/>
                      1. Valid license issued by the California Board of Psychology.
                      <br/>
                      2. Minimum of twelve (12) continuous months of experience within the last 
                      three (3) years performing services in a public or private institution. 
                      No forensic or correctional experience required.
                      <br/>
                      For more information, please call (415) 381-2209 Layli at ARC Registry Counselors, Inc.
                    </p>

                  </div>
                </Col>
                {/* ---- */}
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-contact-us text-center" id="contact-msg">
          <Container>
            <h2 className="title">Want to work with us?</h2>
            <p className="description">Your input is very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
