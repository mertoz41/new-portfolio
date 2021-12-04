import './App.css';
import Pic from './images/mert-cropped.jpg'
import { Button } from 'semantic-ui-react'

function App() {
  const toWeb = (web) =>{
    window.open(web, '_blank')
}
  return (
    <div className="App">
      <div className="middle">
        <div className="top">
          <img src={Pic} className="picture"/>
          <div className="info">
              <h1>Mert Özkaynak</h1>
            <div className="about">
                  <Button circular icon="github" onClick={() => toWeb('https://github.com/mertoz41')} />
                  <Button circular color="linkedin" icon="linkedin" onClick={() => this.toWeb('https://www.linkedin.com/in/mert-ozkaynak/')}/>
            
    
            </div>
                {/* <div className="button"> */}
                {/* </div> */}
              <h4>Alexandria, VA</h4>
              <h3>Full-Stack App Developer</h3>
          </div>

        </div>
        <div className="skills">
          <h2>technical skills</h2>
            <p>Javascript, React, Redux,  Node.js, Express, MongoDB, React Native, React Navigation, Ruby, Ruby on Rails, SQL, PostgreSQL, HTML, CSS</p>
        </div>
        <div className="projects">
          <h2>projects</h2>
          <h3>Instrumentalists app</h3>
          <h3>Artstone Marble and Granite Offical Website</h3>
          <h3>Project Tracker app</h3>
          <h3>Beatbox Bubble app</h3>
          <h3>Hooper app</h3>
        </div>
        <div className="story">
          <h2>story</h2>
          <p>Born and raised in Izmir, Turkey, I came to the US in 2010, seeking to continue my education as a student-athlete. 
            Upon graduating from T.C. Williams High School in 2014 and Thiel College in 2018 with a bachelors degree in International Business studies, I played professional basketball for a year with Sigortam Net ITU Basket in Istanbul. 
            In 2020, I pursued my passion for technology by attending a software engineering bootcamp at Flatiron School to learn full-stack web development. 
            So far it has been a smooth transition as I channel the discipline and work ethic gained from basketball into this nonstop evolving industry. 
            I spend most of my time working on projects, studying computer science fundamentals, and incorporating new technologies in quest to mastery.</p>
        </div>
        <div className="contact">
          <h2>contact me hoe</h2>

        </div>

      </div>

    </div>
  );
}

export default App;
