import React from 'react'
import Header from '../components/Header'
import Mertito from '../images/mert-cropped.jpg'
import {useSpring, animated} from 'react-spring'
const About = () => {
  const animation = useSpring({to: {opacity: 1}, from: {opacity: 0}})

    return(
        <animated.div style={animation}>
            <Header />
            {/* <h2 className="userTitle">about</h2> */}
        <div className="section">
            <img src={Mertito} alt="mert" className="avatar"/>
          <p>
            I am Mert Özkaynak, a Washington DC based creative developer with experience building RESTful APIs and reusable user interfaces for web and mobile apps.
           
            {/* Currently a freelancer, working on personal projects and prioritizing clients as they come. */}
            {/* Currently working as a freelancer, prioritizing client products as they come while working on personal projects. */}
            {/* Although my passion is to build products that bring people together, I embrace building products in different industries which allows me to gain more knowledge. */}
            {/* Hello, I am Mert Özkaynak, a Washington DC based creative developer with a passion for building products that bring people together. */}

            {/* I am a former professional basketball player, transitioned to programming through a bootcamp where I learned full-stack web development with Ruby on Rails and  */}
            {/* Born and raised in Izmir, Turkey, I moved to the United States to further education as a student-athlete in 2010.
            Upon graduating from T.C. Williams High School in 2014 and Thiel College in 2018 with a bachelors degree in International Business studies, I signed with Sigortam Net ITU Basket to play professional basketball in Istanbul.
            While it was a dream come true to hoop professionally, I pursued my curiosity in computers for a stable career.
            In 2020, I attended the Flatiron School and learned full-stack web development with Ruby on Rails and React.
            In coding I recognized and embraced the process from basketball, this time spending countless hours on Google rather than on the hardwood, and to tackle world problems rather than for sport, which fuels me everyday.  */}
          </p>
          <p>
            Technology was not my first career path although I encountered computers at a very young age to play video games. 
            In high school I took graphic design courses and learned how to photoshop myself into 2k covers as well as to draw logos on the Illustrator. 
            In college I was making house and hip-hop beats on Fruity Loops Studio, while I took video editing courses and learned Adobe Premiere.
            Although I enjoyed being a creative with these tools, I didn't see them more than hobbies.
          </p>
          <p>
            Once my basketball career came to an end, I saw programming as the next step and attended the Flatiron Bootcamp to learn full-stack web development with Ruby on Rails and React.
            While I enjoy building both sides of apps and handling their integrations, I found a love for frontend development for the creative joy it brings to design the user experience.
          {/* frontend development as designing the user experience invokes creative joy. */}
            {/* Pleasure to meet you. <span>What is your story?</span> */}
          </p>
        </div>
        </animated.div>
    )
}

export default About