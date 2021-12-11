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
import { Helmet } from 'react-helmet'
import Clouds from './images/clouds.mp4'
import Landinbir from './images/landinbir.jpg'
import Landiniki from './images/landiniki.jpg'
import Landinuc from './images/landinuc.jpg'

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
      <Helmet>
          <meta charSet="utf-8" />
          <title>Mert Özkaynak</title>
          <meta name="description" content="Nested component" />
          <link rel='icon' type='image/png' href='favicon.ico' sizes="16x16" />
        </Helmet>
        <video
        autoPlay
        loop
        muted
        className='cloudvid'>
          <source src={Clouds} type="video/mp4"/>
        </video>
       
      <div className="middle">
  <div className="top">
    <div className='topSection'>
      <img src={Pic} className="picture" alt='mert'/>

    </div>
    <div>
      <h1 className='userTitle'> Mert Özkaynak </h1>    
      <h3 className='userTitle'>Full-Stack Web Developer</h3>

    </div>
    <div className='bottomSection'>
    <Button circular color="linkedin" icon="linkedin" onClick={() => toWeb('https://www.linkedin.com/in/mert-ozkaynak')}/>
    <Button circular icon="github" onClick={() => toWeb('https://github.com/mertoz41')} />        

    </div>
    <div className='bottomSection'>

    <div className="button" onClick={() => toWeb('https://github.com/mertoz41/new-portfolio')}>
                  <h4>portfolio code</h4>
        </div>
        </div>

    <div>
    

    </div>
            

</div>
          <h2 className='userTitle'>technical skills</h2>
<div className='section'>
        
        
            <p>JavaScript, React, React Native, Gatsby, Redux, Ruby, Ruby on Rails, SQL, PostgreSQL, Sqlite3, HTML, CSS</p>

</div>
      
        
        
          <h2 className="userTitle">projects</h2>
        <div>
        
          <div className="projek">
            <div className="titleSection">
              <div className="appname">
                <h3 className="titlewriting">Cezs Mobile App</h3>

              </div>

              <div className="buttons">
                <div className="button">
                <h4 onClick={() => toWeb('https://youtu.be/X6erehzcO3g')}>demo</h4>
              </div>
  
              <div className="button">
                <h4 onClick={() => toWeb('https://github.com/mertoz41/native-front')}>code</h4>
              </div>
            </div>
            </div>

            <p>
              Social network wrapped around a library of your favorite songs, played by instrumentalists. Designed for instrumentalists, Cezs provides an exclusive network where users express themselves through music, discover others with similar taste, and pinpoint upcoming events. 
              {/* designed for instrumentalists where users make up the library with instrument videos, pinpoint upcoming events, and interact with others through music. */}
            </p>
            <div className="images">
              <img onClick={() => selectPicture(CezsBir, "native")} src={CezsBir} className="phonepic" alt='cezs1'/>
              <img onClick={() => selectPicture(CezsIki, "native")}src={CezsIki} className="phonepic" alt='cez2'/>
              <img onClick={() => selectPicture(CezsUc, "native")}src={CezsUc} className="phonepic" alt='cez3'/>

            </div>
            <div className='stackSection'>
              <p><span className="coloredFont">backend</span> Rails, PostgreSQL, Redis, JWT, streamio-ffmpeg, ActionCable, ActiveJob, ActiveStorage</p>
              <p><span className="coloredFont">frontend</span> React Native, Expo, AsyncStorage, React Navigation, React Native Maps, Here API, Spotify API</p>
            </div>
          </div>
          <div className="projek">
            <div className="titleSection">
              <div className="appname">
                <h3 className="titlewriting">Cezs Landing Page</h3>

              </div>

              <div className="buttons">
              <div className="button">
                <h4 onClick={() => toWeb('http://cezsmusic.com')}>website</h4>
              </div>
              <div className="button">
                <h4 onClick={() => toWeb('https://github.com/mertoz41/landing')}>code</h4>
              </div>
            </div>
            </div>

            <p>
              Landing page for the mobile app.
            </p>
            <div className="images">
              <img onClick={() => selectPicture(Landinbir, "native")} src={Landinbir} className="projectpic" alt='cezs1'/>
              <img onClick={() => selectPicture(Landiniki, "native")}src={Landiniki} className="projectpic" alt='cez2'/>
              <img onClick={() => selectPicture(Landinuc, "native")}src={Landinuc} className="projectpic" alt='cez3'/>

            </div>
            <div className='stackSection'>

            <p><span className="coloredFont">frontend</span> React, EmailJs, React Router, React Page Scroller</p>
            </div>
          </div>
          <div className="projek">
          <div className="titleSection">
              <div className="appname">
              <h3 className="titlewriting">Artstone Marble and Granite</h3>
              </div>
              <div className="buttons">
              <div className="button">
                <h4 onClick={() => toWeb('http://theartstone.com')}>website</h4>
              </div>
              </div>

            </div>
            <p>Official website of marble and granite fabricator and installer.</p>
            <div className="images">
              <img onClick={() => selectPicture(Artstoneone, "web")} src={Artstoneone} className="projectpic" alt='art1'/>
              <img onClick={() => selectPicture(Arttwo, "web")} src={Arttwo} className="projectpic" alt='art2'/>
              <img onClick={() => selectPicture(Arttre, "web")} src={Arttre} className="projectpic" alt='art3'/>

            </div>
            <div className='stackSection'>
              <p><span className="coloredFont">frontend</span> Gatsby, bootstrap</p>
            </div>
          </div>
          <div className="projek">
            <div className="titleSection">
              <div className="appname">
              <h3 className="titlewriting">Project Tracker app</h3>
              </div>
              <div className="buttons">
                <div className="button">
                  <h4 onClick={() => toWeb('https://vimeo.com/483887327')}>demo</h4>
                </div>
                <div className="button">
                  <h4 onClick={() => toWeb('https://github.com/mertoz41/tracker-frontend')}>code</h4>

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
            <div className='stackSection'>

            <p><span className="coloredFont">backend</span> Rails, PostgreSQL, JWT, Bcrypt</p>
            <p><span className="coloredFont">frontend</span> React, Semantic UI, Redux, React Router</p>
              </div>

          </div>
          <div className="projek">
          <div className="titleSection">
              <div className="appname">
              <h3 className="titlewriting">Beatbox Bubble app</h3>
              </div>
  
              <div className="buttons">
                <div className="button">
                  <h4 onClick={() => toWeb("https://vimeo.com/452664970")}>demo</h4>
                </div>
                <div className="button">
                  <h4 onClick={() => toWeb('https://github.com/mertoz41/beatbox-bubble')}>code</h4>

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
            <div className='stackSection'>

            <p><span className="coloredFont">backend</span> Rails, sqlite3, JWT, ActiveStorage</p>
            <p><span className="coloredFont">frontend</span> React, Semantic UI, Redux, React Router, React Mic, Wavesurfer.js</p>
              </div>
          </div>
          <div className="projek">
          <div className="titleSection">
              <div className="appname">
              <h3 className="titlewriting">Hooper app</h3>
              </div>
          
              <div className="buttons">
                <div className="button">
                  <h4 onClick={() => toWeb('https://vimeo.com/452664239')}>demo</h4>
                </div>
                <div className="button">
                  <h4 onClick={() => toWeb('https://github.com/mertoz41/hooper-front-end')}>code</h4>

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
            <div className='stackSection'>

            <p><span className="coloredFont">backend</span> Rails, PostgreSQL, JWT</p>
            <p><span className="coloredFont">frontend</span> React, Semantic UI, Redux, React Router, React Google Maps</p>
              </div>

          </div>
          <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            >
              <div className={type == 'web' ? "webSpace" :"pictureSpace"}>
                <img src={selectedPath} className={type == 'web' ? "webpic" : "bigpic"} alt='hop3'/>
              </div>
            
            
            
          </Modal>
        </div>
           
            <h2 className="userTitle">story</h2>
        <div className="section">
          <p>Born and raised in Izmir, Turkey, I moved to the United States to further education as a student-athlete in 2010.
            Upon graduating from T.C. Williams High School in 2014 and Thiel College in 2018 with a bachelors degree in International Business studies, I signed with Sigortam Net ITU Basket to play professional basketball in Istanbul.
            While it was a dream come true to hoop professionally, I pursued my curiosity in computers for a stable career.
            In 2020, I attended the Flatiron School and learned full-stack web development with Ruby on Rails and React.
            In coding I recognized and embraced the process from basketball, this time spending countless hours on Google rather than on the hardwood, and to tackle world problems rather than for sport, which fuels me everyday. 
          </p>
        </div>
          <h2 className="userTitle">contact me</h2>
        <div className="section">
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
          <input type="submit" value="Send" className="inputsubmit"/>
        </form>
        </div>

      </div> 

    </div>
  );
}

export default App;
