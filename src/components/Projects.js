import React from 'react'
import { useNavigate } from "react-router-dom";
import Styles from './projects.module.css'

const Projects = () => {  

    const toWeb = (web) =>{
        window.open(web, '_blank')
    }
    
    const navigate = useNavigate() 
    return(
        <div className={Styles.projects}>        
          <p>Projects</p>
          <ul>
            <li className={Styles.oneProject}>
              <p onClick={() => toWeb('https://www.cezsmusic.com/')} className={Styles.title}>Cezs, <span className={Styles.secondary}>Coming soon</span></p>
              <p className={Styles.description}>music platform for instrumentalists.</p>
            </li>
            <li className={Styles.oneProject}>
              <p onClick={() => toWeb('https://theartstone.com')} className={Styles.title}>Artstone Marble & Granite, <span className={Styles.secondary}>Client project</span></p>
              <p className={Styles.description}>Official website of marble and granite producer.</p>
              </li>
            <li className={Styles.oneProject}>
              <p onClick={() => navigate('/project/tracker')} className={Styles.title}>Project Tracker</p>
              <p className={Styles.description}>Project development framework.</p>
            </li>
            <li className={Styles.oneProject}>
              <p onClick={() => navigate('/project/beatboxbubble')} className={Styles.title}>Beatbox Bubble</p>
              <p className={Styles.description}>Music platform built around a sampler.</p>
            </li>
            <li className={Styles.oneProject}>
              <p onClick={() => navigate('/project/hooper')} className={Styles.title}>Hooper</p>
              <p className={Styles.description}>Basketball platform for hoopers.</p>
            </li>
          </ul>
        </div>
    )
}

export default Projects