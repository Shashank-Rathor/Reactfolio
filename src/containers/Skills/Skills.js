import React from 'react';
import SkillSet from '../../components/skillSet/skillSet';
import { Container,Col,Row } from 'react-bootstrap';
import styles from './Skills.module.css';

const Skills = () => {
  return(
    <div id="skills">
      <Container>
        <hr className={styles.hrtag}/>
        <h1>TECH SKILLS</h1>
        <Row className="d-flex justify-content-around">
          <Col> <SkillSet className={styles.frontend} title="Frontend"/></Col>
            <Col>
              <Col><SkillSet className={styles.hostingPlatforms } title="HostingPlatforms"/></Col>
              <Col><SkillSet className={styles.backend} title="Backend"/></Col>
             </Col>
            <Col> <SkillSet className={styles.programmingLanguages } title="Languages"/>
            <SkillSet className={styles.databases} title="Databases"/>
            <SkillSet className={styles.cms} title="CMS"/>
            </Col>
        </Row>
        <hr className={styles.hrtag}/>
 </Container>
 </div>
  );
}

export default Skills;
