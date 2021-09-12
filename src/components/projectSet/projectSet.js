import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion,Card} from 'react-bootstrap';
import styles from './projectSet.module.css'
import { project } from "../projectData";

const ProjectSet = (props)=>{
  let type={};

  switch (props.title){
     case ('Tindog'):
        type={...project.Tindog}
     break;
     case ('DiceGame'):
        type={...project.DiceGame}
     break;
     case ('CoronaTracker'):
        type={...project.CoronaTracker}
     break;
     case ('Sketchlog'):
        type={...project.Sketchlog}
     break;
     case ('Portfolio'):
        type={...project.Portfolio}
     break;
     case ('NewsAI'):
        type={...project.NewsAI}
     break;
     case ('ChatApp'):
        type={...project.ChatApp}
     break;
     case ('Wheelchair_Solutions'):
        type={...project.Wheelchair_Solutions}
        break;
     case ('Rehamo_Shop'):
        type={...project.Rehamo_Shop}
        break;
      case ('Healthshine_Store'):
         type={...project.Healthshine_Store}
         break;
      case ('Memories_App'):
         type={...project.Memories_App}
      break;
     default:
       type={};
   }

    return(
      <Accordion defaultActiveKey="1">
    <Card  className={styles.focus} >
      <Accordion.Toggle as={Card.Header} eventKey="0" className={styles.accordianmain}>
        PROJECT DETAILS
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body className={styles.body}><strong>Description: </strong>{type.description}
        <hr className={styles.hrtag}/>
        <strong>Tech Used:</strong>{type.skillName.map((data) => {return(<ul><li>{data}</li></ul>)})}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
    );
  }

export default ProjectSet;
