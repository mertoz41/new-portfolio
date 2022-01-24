import React from 'react'
import Header from '../components/Header'
import Mertito from '../images/mert-cropped.jpg'
const About = () => {
    return(
        <div>
            <Header />
            {/* <h2 className="userTitle">about</h2> */}
        <div className="section">
            <img src={Mertito} alt="mert" className="avatar"/>
          <p>
            I am Mert Özkaynak, a Washington DC based creative developer focused on user-empathetic experiences for digital interfaces.
            {/* Born and raised in Izmir, Turkey, I moved to the United States to further education as a student-athlete in 2010.
            Upon graduating from T.C. Williams High School in 2014 and Thiel College in 2018 with a bachelors degree in International Business studies, I signed with Sigortam Net ITU Basket to play professional basketball in Istanbul.
            While it was a dream come true to hoop professionally, I pursued my curiosity in computers for a stable career.
            In 2020, I attended the Flatiron School and learned full-stack web development with Ruby on Rails and React.
            In coding I recognized and embraced the process from basketball, this time spending countless hours on Google rather than on the hardwood, and to tackle world problems rather than for sport, which fuels me everyday.  */}
          </p>
        </div>
        </div>
    )
}

export default About