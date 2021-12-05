import './App.css';
import Pic from './images/mert-cropped.jpg'
import CezsBir from './images/portfolio2.jpg'
import CezsIki from './images/porfolioshot.jpg'
import Artstoneone from './images/artstoneone.jpg'
import Arttwo from './images/arttwo.jpg'
import Trackeruno from './images/trackeruno.jpg'
import Trackerdos from './images/trackerdos.jpg'
import Hoopsuno from './images/hoopsdos.jpg'
import Hoopsdos from './images/hoopstre.jpg'
import Bubleuno from './images/bubledos.jpg'
import BubleTre from './images/bubleone.jpg'
import Bubledos from './images/bubletre.jpg'
import CezsUc from './images/anothercez.jpg'
import Hoopstre from './images/hoopsuno.jpg'
import Arttre from './images/arttre.jpg'
import Tracktre from './images/tracktre.jpg'
import React, {useState, useRef} from 'react';
import { Button, Modal } from 'semantic-ui-react'
import emailjs from 'emailjs-com'

function App() {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState(null)
  const [selectedPath, setSelectedPath] = useState(null)
  const form = useRef();

  const toWeb = (web) =>{
    window.open(web, '_blank')
}

const selectPicture = (pic, type) => {
  setType(type)
  setOpen(true)
  setSelectedPath(pic)
}

const sendEmail = e => {
  e.preventDefault();
  // console.log(e)

  emailjs.sendForm('service_kxdorjg', 'template_h3ab9xv', form.current, 'user_MChuPfMmdUh7yV5A7XgUn')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    form.current.reset()
}
  return (
    <div className="App">
      <div className="middle">
        <div className="top">
          <img src={Pic} className="picture" alt='mert'/>
          <div className="info">
            <div className="about">
              <div>
                <h1> Mert Özkaynak </h1>
                
              </div>
              <div>
                  <Button circular icon="github" onClick={() => toWeb('https://github.com/mertoz41')} />
                  <Button circular color="linkedin" icon="linkedin" onClick={() => toWeb('https://www.linkedin.com/in/mert-ozkaynak')}/>

            </div>
              

            </div>
            <div className="place">
                  <div>
                  <h3>Full-Stack App Developer</h3>

                  </div>
                  <div>
                  <h3>Alexandria, VA</h3>

                  </div>

                </div>

              <div>
          <h2>technical skills</h2>
            <p>JavaScript, React, Redux,  Node.js, Express, MongoDB, React Native, React Navigation, Ruby, Ruby on Rails, SQL, PostgreSQL, HTML, CSS</p>
        </div>
          </div>

        </div>
        
        <div className="section">
          <div className="title">

          <h2 className="titlewriting">projects</h2>
          </div>
          <div className="projek">
            <div className="title">
              <div>
                <h3 className="titlewriting">Cezs</h3>

              </div>

              <div className="title">
                <div className="button">
                <h4 onClick={() => toWeb('https://youtu.be/X6erehzcO3g')}>watch demo</h4>
              </div>
              <div className="button">
                <h4 onClick={() => toWeb('http://cezsmusic.com')}>website</h4>
              </div>
            </div>
            </div>

            <p>Social network designed for instrumentalists where users make up the music library with instrument videos, announce upcoming events, and interact with others.            
            </p>
            <div className="images">
              <img onClick={() => selectPicture(CezsBir, "native")} src={CezsBir} className="phonepic" alt='cezs1'/>
              <img onClick={() => selectPicture(CezsIki, "native")}src={CezsIki} className="phonepic" alt='cez2'/>
              <img onClick={() => selectPicture(CezsUc, "native")}src={CezsUc} className="phonepic" alt='cez3'/>

            </div>

          </div>
          <div className="projek">
          <div className="title">
              <div>
              <h3 className="titlewriting">Artstone Marble and Granite</h3>
              </div>
              <div className="button">
                <h4 onClick={() => toWeb('http://theartstone.com')}>website</h4>
              </div>
            </div>
            <p>Official website of marble and granite fabricator and installer.</p>
            <div className="images">
              <img onClick={() => selectPicture(Artstoneone, "web")} src={Artstoneone} className="projectpic" alt='art1'/>
              <img onClick={() => selectPicture(Arttwo, "web")} src={Arttwo} className="projectpic" alt='art2'/>
              <img onClick={() => selectPicture(Arttre, "web")} src={Arttre} className="projectpic" alt='art3'/>

            </div>
          </div>
          <div className="projek">
            <div className="title">
              <div>
              <h3 className="titlewriting">Project Tracker app</h3>
              </div>
              <div className="title">
                <div className="button">
                  <h4 onClick={() => toWeb('https://vimeo.com/483887327')}>watch demo</h4>
                </div>
                <div className="button">
                  <h4 onClick={() => toWeb('https://vimeo.com/483887327')}>github</h4>

                </div>

              </div>
            </div>
            <p>
              Project development application that offers a backlog-oriented framework to manage and develop projects. 
              Influenced by Agile project management, development through user experience provides an insight as to which features to prioritize.</p>
            <div className="images">
              <img onClick={() => selectPicture(Trackerdos, "web")} src={Trackerdos} className="projectpic" alt='trak1'/>
              <img onClick={() => selectPicture(Tracktre, "web")}src={Tracktre} className="projectpic" alt='trak2'/>
              <img onClick={() => selectPicture(Trackeruno, "web")}src={Trackeruno} className="projectpic" alt='trak3'/>

            </div>


          </div>
          <div className="projek">
          <div className="title">
              <div>
              <h3 className="titlewriting">Beatbox Bubble app</h3>
              </div>
  
              <div className="title">
                <div className="button">
                  <h4 onClick={() => toWeb("https://vimeo.com/452664970")}>watch demo</h4>
                </div>
                <div className="button">
                  <h4 onClick={() => toWeb('https://vimeo.com/483887327')}>github</h4>

                </div>

              </div>
            </div>
            <p>
              Social network built around a sampler. 
              Created for users to get creative sampling, composing, and sharing their own sounds with other users. 
              Developed in an Agile environment through daily standup meetings and weekly sprints, with the intention to work with audio files.
            </p>
            <div className="images">

              <img onClick={() => selectPicture(Bubleuno, "web")} src={Bubleuno} className="projectpic" alt='bub1'/>
              <img onClick={() => selectPicture(BubleTre, "web")} src={BubleTre} className="projectpic" alt='bub2'/>
              <img onClick={() => selectPicture(Bubledos, "web")} src={Bubledos} className="projectpic" alt='bub3'/>

            </div>

          </div>
          <div className="projek">
          <div className="title">
              <div>
              <h3 className="titlewriting">Hooper app</h3>
              </div>
          
              <div className="title">
                <div className="button">
                  <h4 onClick={() => toWeb('https://vimeo.com/452664239')}>watch demo</h4>
                </div>
                <div className="button">
                  <h4 onClick={() => toWeb('https://vimeo.com/483887327')}>github</h4>

                </div>

              </div>
            </div>
            <p>
              Social network that pivots around the most beautiful sport in the world, basketball. 
              Created for hoopers to explore new basketball courts, find the best competition, and to connect with other hoopers with respect to the game itself. 
              Developed in an Agile environment through daily standup meetings and a weekly sprint, with the intention to utilize Google Maps to bring people together.
            </p>
            <div className="images">
              <img src={Hoopstre} onClick={() => selectPicture(Hoopstre, "web")}className="projectpic" alt='hop1'/>
              <img src={Hoopsuno} onClick={() => selectPicture(Hoopsuno, "web")}className="projectpic" alt='hop2'/>
              <img src={Hoopsdos} onClick={() => selectPicture(Hoopsdos, "web")}className="projectpic" alt='hop3'/>


            </div>


          </div>
          <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            
            // trigger={<Button>Basic Modal</Button>}
            >
              <div className={type == 'web' ? "webSpace" :"pictureSpace"}>
                <img src={selectedPath} className={type == 'web' ? "webpic" : "bigpic"} alt='hop3'/>
              </div>
            
            
            {/* <Modal.Actions>
              <Button basic color='red' inverted onClick={() => setOpen(false)}>
                <Icon name='remove' /> No
              </Button>
              <Button color='green' inverted onClick={() => setOpen(false)}>
                <Icon name='checkmark' /> Yes
              </Button>
            </Modal.Actions> */}
          </Modal>
        </div>
        <div className="section">
          <div className="title">
            <h2 className="titlewriting">story</h2>
          </div>
          <p>Born and raised in Izmir, Turkey, I moved to the United States to further education as a student-athlete in 2010.
            Upon graduating from T.C. Williams High School in 2014 and Thiel College in 2018 with a bachelors degree in International Business studies, I signed with Sigortam Net ITU Basket to play professional basketball in Istanbul.
            While it was a dream come true to hoop professionally, I pursued my curiosity in computers for a stable career.
            In 2020, I attended the Flatiron School and learned full-stack web development with Ruby on Rails and React.
            In coding I recognized and embraced the process from basketball, this time spending countless hours on Google researching rather than on the hardwood, and to tackle problems rather than for sport, which fuels me everyday. 
          </p>
        </div>
        <div className="section">
        <div className="title">
          <h2 className="titlewriting">contact me</h2>
        </div>
        <form ref={form} onSubmit={e => sendEmail(e)} className="contactform">
          <div>
            <input type="text" name="user_name" placeholder="Your Name"/>
          </div>
          <div>
          <input type="email" name="user_email" placeholder="Your Email"/>
            </div>
            <div>
          <textarea name="message" placeholder="Your Message"/>
              </div>
          <input type="submit" value="Send" />
        </form>
        </div>

      </div>

    </div>
  );
}

export default App;
