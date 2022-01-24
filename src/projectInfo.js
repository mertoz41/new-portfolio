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
            pictures: [Hoopstre, Hoopsuno, Hoopsdos],
            what: 'Hooper app is a basketball platform that displays basketball courts on the map and provides forums on each location to organize games. Feedbacks are exchanged between users on profile pages, which allows users to anticipate talent.',
            why: "This was the first project I have built on my own for the fourt module project at botcamp. Upon learning React, I wanted to get familiar with maps to use it later for Cezs. Brainstorming on what to use the maps for didn't take long as I immediately thought about my passion: basketball. I recalled the times when a couple friends and I wished a way to find kids like us to hoop in Izmir and developed this application for the ten year-old Mert.",
            tech: 'This app was developed in seven days with daily stand-up and stand-down meetings to track progress with coaches. Authentication was implemented with JWT while apps state was managed with Redux. Semantic UI was utilized for styling and component testing was experimented with Enzyme.',
            gitHub: 'https://github.com/mertoz41/hooper-front-end'
        }
    } else if (project === 'beatboxbubble'){
        searchedProject = {
            name: 'Beatbox Bubble',
            pictures: [BubleTre, Bubleuno, Bubledos],
            what: 'Beatbox Bubble app is a music platform which comes with a built-in sampler and a sequencer to sample user sound and compose tracks to share with others. While recorded sounds get assigned to letters on the keyboard by the user to sample, the sequencer combines sample patterns to compose songs. Users interact with each other through following, discovering new songs by popularity, and comments and shares.',
            why: "This project was built as the final project at bootcamp. My approach was to get familiar working with sound files so that I could use it later for Cezs. While brainstorming, I recalled the times when I would produce house and hip-hop beats with FL Studio and wanting to use the keyboard as a sampler with different sounds. However, keyboard is utilized for a single sound where each letter would play a different pitch of the same sound. With this project I wanted to turn the keyboard into a sampler and allow users to get creative sampling their own sounds.",
            tech: 'This app was built in three weeks with weekly sprints and daily stand-up and stand-down meetings to track progress. First sprint was to build the basic sampler where users could record their sounds and assign it to any letters they like. Second sprint was to handle networking side of the app whereas the last week was for styling and user experience. Upon building the sampler in two days I looked for ways to make it more like a music production app and came across sequencer, which ended up implemented by the second week.',
            gitHub: 'https://github.com/mertoz41/beatbox-bubble'
        }
    } else if (project === 'tracker'){
        searchedProject = {
            name: 'Project Tracker',
            pictures: [Trackeruno, Trackerdos, Tracktre],
            what: 'Project Tracker is a backlog-oriented project development framework that provides a progress dashboard to manage and execute projects. While this approach helps users prioritize features that bring most value, objectives to accomplish such features projects progress in percentage.',
            why: "I built this app out of necessity of staying organized with notes and goals throughout developing projects. Aside from organizing features and deliverables, I wanted to know the progress of each project in one place.",
            tech: "This app was built in a month, while I have utilized Redux for app's general state management and React Router for navigation between routes in the frontend, and facilitated data persistence with Active Record into Postgres database in a Rails backend.",
            gitHub: 'https://github.com/mertoz41/tracker-frontend'
        }
    } 
    // else if (project === 'cezs'){
    //     searchedProject = {
    //         name: 'Cezs',
    //         pictures: [CezsBir, CezsIki, CezsUc],
    //         what: 'Cezs is a social network wrapped around a community music library that is flourished by instrumentalists. Designed for instrumentalists, Cezs provides an exclusive music platform where users express themselves through music and instruments, discover others with similar taste, and pinpoint upcoming events.',
    //         why: "This is the first project I thought of once I grasped backend and frontend coding. The spark behind the idea is a conversation I had with a good friend a long time ago, whom wanted to make a living as a musician. While he wanted to do so playing for the council, a question I had was 'where do musicians exist online?' which he went on to answer 'nowhere special really, just popular social media.' Then I researched to find out that musician apps other than SoundCloud are just like SoundCloud, sound files. While instrumentalists are underrepresented in these environments, these platforms mainly consist of laptop musicians. The alternative on the other hand is media platforms, but such content goes unnoticed in the vastness of these platforms.",
    //         tech: "This app was built in a month, while I have utilized Redux for app's general state management and React Router for navigation between routes in the frontend, and facilitated data persistence with Active Record into Postgres database in a Rails backend.",
    //         gitHub: 'https://github.com/mertoz41/tracker-frontend'
    //     }
    // }
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