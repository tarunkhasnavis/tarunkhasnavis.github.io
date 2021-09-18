import React, {useState, useEffect} from 'react';
import './css/App.scss';
import Project from './Project'
import Header from './Header'
import About from './About'
import Socials from './Socials'
import resume from "./assets/Tarun_Khasnavis_Resume.pdf"
import { motion } from "framer-motion"
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import Aos from "aos";
import "aos/dist/aos.css";
// import Slideshow from './Slideshow'
// import 'react-slideshow-image/dist/styles.css'

function App() {
  const [theme, setTheme] = useState("light")

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="app">
        <Header toggle={themeToggler} />
        <Socials/>
        <div className="app__container" id="home">
          <div className="splash">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ delay: 0, duration: 1}}>
              <div className="bg"></div>
            </motion.div>
            <div className="title">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ delay: 0.5, duration: 1}}>
                <h1>Hello</h1>
              </motion.div>
              <div className="subtitle">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ delay: 1.5, duration: 1}}>
                  <span>I'm Tarun,</span>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ delay: 2.5, duration: 1}}>
                  <span>an engineer & creator.</span>
                </motion.div>
              </div>
            </div>
          </div>
          <Project/>
          <About/>
          <div className="footer">
            <div className="footer__top" data-aos="fade-up" data-aos-duration="750">
              <div className="footnote__container">
                <p>Want to work with me?</p>
                <a href={resume} target="_blank">
                  <span>RESUME</span>
                </a>  
              </div>
            </div> 
            <div className="footer__bottom">
              <p>Designed by Tarun Khasnavis © 2021</p>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;