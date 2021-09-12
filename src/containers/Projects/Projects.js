import React from 'react';
import ProjectSet from '../../components/projectSet/projectSet';
import { project } from "../../components/projectData";
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
} from '@merc/react-timeline';


const Projects = () => {
  return (
    <div id="projects">
      <h1>PROJECTS</h1>
    <Timeline >
       <Events>
         <ImageEvent className="text-center" date="2018"text="Tindog" src={project.Tindog.imgSrc} alt="Tindog" >
         <div><ProjectSet title='Tindog'/></div>
           <div>
             <UrlButton href={project.Tindog.link} target="_blank"> SEE LIVE </UrlButton>
           </div>
         </ImageEvent>

         <ImageEvent className="text-center" date="2019" text="Dice Game" src={project.DiceGame.imgSrc}
           alt="DiceGame">
         <div><ProjectSet title='DiceGame'/></div>
           <div>
             <UrlButton href={project.DiceGame.link} target="_blank">SEE LIVE</UrlButton>
           </div>
         </ImageEvent>

         <ImageEvent className="text-center" date="2019"text="Sketchlog" src={project.Sketchlog.imgSrc} alt="Sketchlog" >
         <div><ProjectSet title='Sketchlog'/></div>
           <div>
             <UrlButton href={project.Sketchlog.link} target="_blank"> SEE LIVE </UrlButton>
           </div>
         </ImageEvent>

         <ImageEvent className="text-center" date="2020" text="Corona Tracker" src={project.CoronaTracker.imgSrc}
           alt="Corona Tracker" >
         <div><ProjectSet title='CoronaTracker'/></div>
           <div>
             <UrlButton href={project.CoronaTracker.link} target="_blank"> SEE LIVE</UrlButton>
           </div>
         </ImageEvent>

         <ImageEvent className="text-center " date="2020" text="Portfolio" src={project.Portfolio.imgSrc}
           alt="Portfolio">
         <div>  <ProjectSet title='Portfolio'/></div>
           <div>
             <UrlButton href='#Home' target="_blank">SEE LIVE</UrlButton>
           </div>
         </ImageEvent>
         <ImageEvent className="text-center" date="2020" text="News AI" src={project.NewsAI.imgSrc}
           alt="News AI" >
         <div><ProjectSet title='NewsAI'/></div>
           <div>
             <UrlButton href={project.NewsAI.link} target="_blank"> SEE LIVE</UrlButton>
           </div>
         </ImageEvent>
         <ImageEvent className="text-center" date="2020" text="Chat App" src={project.ChatApp.imgSrc}
           alt="Chat App" >
         <div><ProjectSet title='ChatApp'/></div>
           <div>
             <UrlButton href={project.ChatApp.link} target="_blank"> SEE LIVE</UrlButton>
           </div>
         </ImageEvent>
         <ImageEvent className="text-center" date="2020" text="Wheelchair.solutions" src={project.Wheelchair_Solutions.imgSrc}
           alt="Chat App" >
         <div><ProjectSet title='Wheelchair_Solutions'/></div>
           <div>
             <UrlButton href={project.Wheelchair_Solutions.link} target="_blank"> SEE LIVE</UrlButton>
           </div>
         </ImageEvent>
         <ImageEvent className="text-center" date="2020" text="Rehamo.shop" src={project.Rehamo_Shop.imgSrc}
           alt="Rehamo shop" >
         <div><ProjectSet title='Rehamo_Shop'/></div>
           <div>
             <UrlButton href={project.Rehamo_Shop.link} target="_blank"> SEE LIVE</UrlButton>
           </div>
         </ImageEvent>
         <ImageEvent className="text-center" date="2021" text="Healthshine Store" src={project.Healthshine_Store.imgSrc}
           alt="Healthshine store" >
         <div><ProjectSet title='Healthshine_Store'/></div>
           <div>
             <UrlButton href={project.Healthshine_Store.link} target="_blank"> SEE LIVE</UrlButton>
           </div>
         </ImageEvent>
         <ImageEvent className="text-center" date="2021" text="Memories App" src={project.Memories_App.imgSrc}
           alt="Memories App" >
         <div><ProjectSet title='Memories_App'/></div>
           <div>
             <UrlButton href={project.Memories_App.link} target="_blank"> SEE LIVE</UrlButton>
           </div>
         </ImageEvent>
       </Events>
     </Timeline>

  </div>
  );
}

export default Projects;
