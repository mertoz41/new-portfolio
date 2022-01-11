import React, {useState} from 'react'
import { Modal } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import ArtstoneOne from '../images/artstoneone.jpg'
import Cezs from '../images/portfolio2.jpg'
import Tracker from '../images/trackeruno.jpg'
import Buble from '../images/bubledos.jpg'
import Hooper from '../images/hoopsuno.jpg'
const Projects = () => {  
    const [open, setOpen] = useState(false)
    const [type, setType] = useState(null)
    const [selectedPath, setSelectedPath] = useState(null)

    const toWeb = (web) =>{
        window.open(web, '_blank')
    }
    
    const navigate = useNavigate() 
    return(
        <div className='projects'>
            <Header />
          
                <div className='proje' onClick={() => navigate('/project/cezs')}>
                  <div>
                    <h1>cezs 2022</h1>
                    <h3>music app designed for instrumentalists.</h3>
                  </div>
                    <img className='picture' src={Cezs} alt='cezspic' />
                </div>
                <div className='proje' onClick={() => navigate('/project/artstone')}>
                  <div>
                    <h1>Artstone Marble & Granite 2021</h1>
                    <h3>official website of a marble and granite distributor.</h3>

                  </div>
                    <img className='picture' src={ArtstoneOne} alt='artstone' />

                </div>
                <div className='proje' onClick={() => navigate('/project/tracker')}>
                  <div>
                    <h1>tracker 2020</h1>
                    <h3>project development framework.</h3>
                  </div>
                    <img className='picture' src={Tracker} alt='tracker' />


                </div>
                <div className='proje' onClick={() => navigate('/project/beatboxbubble')}>
                  <div>
                    <h1>beatbox bubble 2020</h1>
                    <h3>social network with a sampler.</h3>
                    
                  </div>
                    <img className='picture' src={Buble} alt='buble'/>
                </div>

                <div className='proje' onClick={() => navigate('/project/hooper')}>
                  <div>

                    <h1>hooper 2020</h1>
                    <h3>social network for hoopers.</h3>
                  </div>
                    <img className='picture' src={Hooper} alt='hooper' /> 
                </div>
                
            {/* <div>
                <h1>hooper</h1>
            </div> */}
        {/* </div> */}
          {/* <div className="projek">
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
          </div> */}
          {/* <div className="projek">
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
          </div> */}
          {/* <div className="projek">
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
          </div> */}
          {/* <div className="projek">
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

          </div> */}
          {/* <div className="projek">
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
          </div> */}
          {/* <div className="projek">
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

          </div> */}
          {/* <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            >
              <div className={type == 'web' ? "webSpace" :"pictureSpace"}>
                <img src={selectedPath} className={type == 'web' ? "webpic" : "bigpic"} alt='hop3'/>
              </div>
            
            
            
          </Modal> */}

        </div>
    )
}

export default Projects