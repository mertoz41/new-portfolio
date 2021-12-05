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
import React, {useState} from 'react';
import { Button, Modal } from 'semantic-ui-react'

function App() {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState(null)
  const [selectedPath, setSelectedPath] = useState(null)
  const toWeb = (web) =>{
    window.open(web, '_blank')
}

const selectPicture = (pic, type) => {
  setType(type)
  setOpen(true)
  setSelectedPath(pic)
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

            <p>Social network for instrumentalists</p>
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
            <p>Project development framework.</p>
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
            <p>A platform to sample your sound and share with others.</p>
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
            <p>A platform to discover basketball courts and best competition</p>
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
          <p>Born and raised in Izmir, Turkey, I came to the US in 2010 to continue my education as a student-athlete. 
            Upon graduating from T.C. Williams High School in 2014 and Thiel College in 2018 with a bachelors degree in International Business studies, I played professional basketball with Sigortam Net ITU Basket in Istanbul for a year. 
            In 2020, I pursued my curiosity for computers and attended a software engineering bootcamp at Flatiron School to learn full-stack web development. 
            So far it has been a smooth transition as I channel the discipline and work ethic gained from basketball into this nonstop evolving industry. 
            I spend most of my time working on projects, studying computer science fundamentals, and incorporating new technologies in quest to mastery.</p>
        </div>
        <div className="section">
        <div className="title">

          <h2 className="titlewriting">contact me hoe</h2>
        </div>
        </div>

      </div>

    </div>
  );
}

export default App;
