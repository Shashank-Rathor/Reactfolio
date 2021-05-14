import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../assets/images/lappy.jpg';
import image2 from '../../assets/images/coding.jpg';
import image3 from '../../assets/images/comp.jpg';
import styles from './Home.module.css';
import Typewriter from "typewriter-effect";

  const Home = () => {
  return(
    <div className={styles.home} id="home">
      <div className={styles.heading}> Hi , I am <br/> <strong>Shashank</strong> </div>
      <div className={styles.type}>
        <Typewriter
               options={{
                 strings: ["Web Developer", "Electronics Engineer", "Learner"],
                 autoStart: true,
                 loop: true,
                 delay: 60
               }}
             />
        </div>
    <Carousel interval={3000} pause={false} lg={12} xs={12} ms={12}>
      <Carousel.Item>
        <img src={image1} alt="First slide" />
        <Carousel.Caption> </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> <img src={image2}  alt="Second slide"  />
      </Carousel.Item>
      <Carousel.Item> <img src={image3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  </div>
  );
}

export default Home;
