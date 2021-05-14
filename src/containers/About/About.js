import React from 'react';
import styles from './About.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Row,Col,Container,Button } from 'react-bootstrap';
import image1 from '../../assets/images/white.jpg';
import image2 from '../../assets/images/self.jpg';
import Tilt from "react-tilt";


const About = () => {
  return(
    <div id="about">
    <Card className="bg-dark md-12 flex-wrap">
    <Card.Img className={styles.cont}  src={image1}alt="Card image" />
    <Card.ImgOverlay >
      <Card.Title className={styles.title} >ABOUT ME</Card.Title>
      <Container>
  <Row>
    <Col xs={12} md={6}>
      <Card.Img className={styles.self}  src={image2}alt="Card image" />
    </Col>
    <Col xs={12} md={6}>
      <Tilt options={{ max: 25 }}>
    <div className={styles.body}> Hello there! I am Shashank <br/><br/>
    A web designer/developer focused on crafting great web experiences.
    Designing and Coding have been my passion since the school days,
    but I found myself into web design/development after graduation.
    I enjoy creating beautifully designed, intuitive and functional websites.<br/><br/>
  Along with that, I also love sketching in my free time. My goal is to learn
    about new technologies, what problems are they solving and how can I use
    them to develop my knowledge and build and design better products.
    <Col className="d-flex justify-content-center flex-wrap">
      <div >
        <a href="#contact">
          <Button className="m-2" variant="outline-primary">
            Let's talk
          </Button>
        </a>
      </div>
      <div>
        <a href="https://drive.google.com/file/d/1_qq7qFoXd_McVWh5Korfo4xzySVidjMv/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <Button className="m-2" variant="outline-success">
            My Resume
          </Button>
        </a>
      </div>
      <div>
        <a href="https://github.com/Shashank-Rathor" target="_blank" rel="noopener noreferrer">
          <Button className="m-2" variant="outline-dark">
            GitHub
          </Button>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/shashank-821064150/" target="_blank" rel="noopener noreferrer">
          <Button className="m-2" variant="outline-info">
            LinkedIn
          </Button>
        </a>
      </div>
    </Col>
    </div>
      </Tilt>
    </Col>
  </Row>
  </Container>
    </Card.ImgOverlay>
  </Card>
  </div>
  );
}

export default About;
