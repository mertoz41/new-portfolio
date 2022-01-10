import './App.css';
import Pic from './images/mert-cropped.jpg'

import React, {useState, useRef} from 'react';
import emailjs from 'emailjs-com'
import { Helmet } from 'react-helmet'
import Clouds from './images/shortest.gif'
import Welcome from './pages/Welcome';
import Footer from './components/Footer';
import Projects from './pages/Projects'
import About from './pages/About';
import Project from './pages/Project'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  // const [open, setOpen] = useState(false)
  // const [type, setType] = useState(null)
  // const [selectedPath, setSelectedPath] = useState(null)
  const form = useRef();
              // {/* designed for instrumentalists where users make up the library with instrument videos, pinpoint upcoming events, and interact with others through music. */}

  const toWeb = (web) =>{
    window.open(web, '_blank')
}

// const selectPicture = (pic, type) => {
//   setType(type)
//   setOpen(true)
//   setSelectedPath(pic)
// }

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
        
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </BrowserRouter>

      </div>
      <Footer />
        {/* <img src={Clouds} className='cloudvid'  height='100%'width="100%"/> */}
        
        
        
       
      {/* <div className="middle">
  <div className="top">
    <div className='topSection'>
      <img src={Pic} className="picture" alt='mert'/>

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

      </div>  */}

    </div>
  );
}

export default App;
