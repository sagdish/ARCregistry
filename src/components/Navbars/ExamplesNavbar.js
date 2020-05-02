import React, { useState } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 549 ||
        document.body.scrollTop > 549
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 550 ||
        document.body.scrollTop < 550
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              id="navbarDropdown"
              tag="a"
              onClick={e => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem 
                href="#positions"
                // header 
                tag="a"
              >
                Open Positions
              </DropdownItem>
              <DropdownItem href="https://www.ziprecruiter.com/c/ARC-Registry-Counselors/Jobs" target="_blank">
                on ZipRecruiter.com
              </DropdownItem>
              {/* <DropdownItem href="https://www.recruit.net/company-arc-registry-counselors-jobs" target="_blank">
                on Recruit.net
              </DropdownItem> */}
              <DropdownItem href="#" onClick={e => e.preventDefault()}>
                New listings coming soon...
              </DropdownItem>
              {/* <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                One more separated link
              </DropdownItem> */}
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand

              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(false);
                setToggle(!toggle);
              }}              

              // onClick={(e) => {
              //   // e.preventDefault();
              //   setToggle(!toggle);

              // }}
              href={toggle ? '#contact-msg' : "#top"}
              // href="#contact-msg"
              // target="_blank"
              id="navbar-brand"
              // style={{fontSize: "18px"}}
            >
              ARC Registry
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              150 Morning Sun Avenue Mill Valley, CA 94941
              Phone: (415) 381-2209
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar style={{fontSize: "20px"}}>
              <NavItem>
                <NavLink href="#about-us">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#positions">
                  Positions
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact-msg">
                  Contact Us
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
