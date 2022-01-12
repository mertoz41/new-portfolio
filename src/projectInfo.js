import CezsBir from './images/portfolio2.jpg'
import CezsIki from './images/porfolioshot.jpg'
import CezsUc from './images/anothercez.jpg'
import Artstoneone from './images/artstoneone.jpg'
import Arttwo from './images/arttwo.jpg'
import Trackeruno from './images/trackeruno.jpg'
import Trackerdos from './images/trackerdos.jpg'
import Hoopsuno from './images/hoopsdos.jpg'
import Hoopsdos from './images/hoopstre.jpg'
import Bubleuno from './images/bubledos.jpg'
import BubleTre from './images/bubleone.jpg'
import Bubledos from './images/bubletre.jpg'
import Hoopstre from './images/hoopsuno.jpg'
import Arttre from './images/arttre.jpg'
import Tracktre from './images/tracktre.jpg'
// import Landinbir from './images/landinbir.jpg'
// import Landiniki from './images/landiniki.jpg'
// import Landinuc from './images/landinuc.jpg'
const chooseProject = project => {
    let searchedProject 
    if (project === 'hooper'){
        searchedProject = {
            name: 'Hooper',
            pictures: [Hoopstre, Hoopsuno, Hoopsdos, ],
            what: 'Hooper app is a basketball platform that displays basketball courts on the map and provides forums on each location to organize games. Feedbacks are exchanged between users on profile pages, which allows users to anticipate talent.',
            why: "This was the first project I have built on my own for the fourt module project at the Flatiron Bootcamp. Upon learning React, I wanted to get familiar with maps to use it later for Cezs. Brainstorming on what to use the maps for didn't take long as I immediately thought about my passion: basketball. I recalled the times when a couple friends and I wished a way to find kids like us to hoop in Izmir and developed this application for the ten year-old Mert.",
            tech: 'This app was developed in seven days with daily stand-up and stand-down meetings to track progress with coaches. Authentication was implemented with JWT while apps state was managed with Redux. Semantic UI was utilized for styling and component testing was experimented with Enzyme.',
            gitHub: 'https://github.com/mertoz41/hooper-front-end'
        }
    }
    return searchedProject
    // console.log(project)
}
const cezs = {
        name: 'CEZS',
        description: 'what does this app do',
        story: 'why this app',
        technology: 'technology used',
        pictures: [CezsBir, CezsIki, CezsUc]
}
const artstone = {
    name: "artstone marble and granite",
    pictures: [Artstoneone, Arttwo, Arttre]

}
const tracker = {
    name: 'Project Tracker',
    pictures: [Trackeruno, Trackerdos, Tracktre]
    
}
const beatboxbubble = {
    name: 'Beatbox Bubble',
    pictures: [Bubleuno, Bubledos, BubleTre]
}


export {chooseProject}