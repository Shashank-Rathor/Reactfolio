import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/images/experience/rehamo.png";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">

                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Web Developer</strong>
                    <br />
                    <strong>Role:</strong> Develop websites for the company
                    <br />
                    <strong>Description:</strong> <strong>Developed & enhanced multiple websites</strong> with full customizability option across web application. Developed e-commerce website along with an catalogue website with CRUD operation.
                    <br />
                    <strong>Technology:</strong> React JS, CSS, Wordpress, Bluehost and Firebase
                    <br />
                    <strong>Duration:</strong> November 2020 - Present
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
