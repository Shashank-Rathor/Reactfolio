import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./Footer.module.css";

const ContactForm = () => {
  return (
    <div id="contact" className={styles.contact}>
       <hr className={styles.hrtag}/>
      <h1 >CONTACT ME</h1>
      <Jumbotron className={styles.contactjumbotron}>
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:shashankrathor180@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="akjha96@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/shashank-821064150/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/shashank.shekhar.3511" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Say hello on FB">
                  <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://github.com/Shashank-Rathor" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
       <hr className={styles.hrtag}/>
    </div>
  );
};

export default ContactForm;
