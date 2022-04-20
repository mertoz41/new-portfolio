import React from 'react'
import Header from '../components/Header'
import Mertito from '../images/mert-cropped.jpg'
import {useSpring, animated} from 'react-spring'
const About = () => {
  const animation = useSpring({to: {opacity: 1}, from: {opacity: 0}})

    return(
        <animated.div style={animation}>
          {/* <Header /> */}
          <div className="section">
            {/* <img src={Mertito} alt="mert" className="avatar"/> */}
            <p>I'm a software engineer at ThinkNimble, a startup agency for socially focused business. </p>
            {/* <div className="me">
              <div>

              
                <p>
                  I am Mert Özkaynak, a Washington DC based creative developer with experience building RESTful APIs and reusable user interfaces for web and mobile apps.
                  Currently a freelancer, prioritizing clients and working on personal projects.
                </p>
            </div>
            </div>
            <p>
              Technology was not my first career path although I encountered computers at a young age playing video games. 
              In high school I took graphic design courses and learned how to photoshop myself into 2k covers and draw logos on Illustrator. 
              In college I was making house and hip-hop beats on Fruity Loops Studio, while I took video editing courses and learned Adobe Premiere.
              While I enjoyed being a creative with these tools, I never considered them for more than hobbies.
            </p>
            <p>
              Once basketball career came to an end, I saw programming as the next step and attended the Flatiron Bootcamp to learn full-stack web development with Ruby on Rails and React.
              While I enjoy building both sides of apps and handling their integrations, I found a love for frontend development for the creative joy it brings to design the user experience.
            </p>
            <p>
              When I am not coding I am coaching hoops, hooping myself, and browsing Beatport for music to mix.
            </p>
            <p>
              Nice to meet you. <span onClick={() => window.open('mailto:mertozka41@gmail.com')} className="touch">Let's get in touch</span>. 
            </p> */}

          </div>
        </animated.div>
    )
}

export default About