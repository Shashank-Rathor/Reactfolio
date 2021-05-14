import React,{useState} from 'react';
import { Card,Image } from 'react-bootstrap';
import { skills } from "../skillsData";
import styles from './skillSet.module.css'


const SkillSet = (props) => {
  let type=[];

  switch (props.title){
     case ('Frontend'):
        type=[...skills.frontend]
     break;
     case ('HostingPlatforms'):
        type=[...skills.hostingPlatforms]
     break;
     case ('Languages'):
        type=[...skills.programmingLanguages]
     break;
     case ('Databases'):
        type=[...skills.databases]
     break;
     case ('Backend'):
        type=[...skills.backend]
     break;
     case ('CMS'):
        type=[...skills.cms]
     break;
     default:
       type=null;
   }
  return (
    <Card className={styles.focus}>
      <Card.Body>
        <Card.Title className={styles.title}>{props.title}</Card.Title>
        <hr />
        <Card.Text className="card-text d-flex justify-content-start flex-column">
          {type.map((skill, index) => (
            <span className="p-2" key={index}>
              <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className={styles.image}></Image> {skill.skillName}
              </a>
            </span>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>

  );
}

export default SkillSet;
