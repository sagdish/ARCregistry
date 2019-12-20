/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li> 
                150 Morning Sun Avenue
                Mill Valley, CA 94941
              </li>
              <br />
              <li>
                Phone: (415) 381-2209
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed & Coded by{" "}
            <a
              href="https://github.com/sagdish"
              target="_blank"
            >
              Sagdi Formanov
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
