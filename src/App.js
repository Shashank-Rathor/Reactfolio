import React,{ Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Skills from './containers/Skills/Skills';
import Project from './containers/Projects/Projects';
import Footer from './containers/Footer/Footer';
import styles from './App.module.css';
import Particles from 'react-particles-js';
import Experience from './containers/experience/experience';

class App extends Component {
  render(){
    return(
      <div className={styles.bar}>
        <BrowserRouter>
          <Particles className={styles.part}
            params={{
        	    "particles": { "number": {"value": 50 }, "size": {"value": 3 }
        	    }, "interactivity": {"events": {"onhover": {"enable": true, "mode": "repulse" } }}	}}/>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Experience/>
        <Project/>
        <Footer/>
         <div className={styles.footerstyle}>© SHASHANK {new Date().getFullYear()}</div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
