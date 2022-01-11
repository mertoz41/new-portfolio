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
const hooper = {
    name: 'Hooper',
    pictures: [Hoopsuno,Hoopsdos, Hoopstre]
    // hooper app was a project I built in the fourth module of the Flatiron school bootcamp 
    // my approach to this project was to work with maps so that I could use it for Cezs.
    // While brainstorming on what I could use the maps for, 
    // I recalled a struggle my friends and I had growing up, going to different courts around the city to play with different people
    // to provide the map and allow interaction between users
    // 
}

export {cezs, artstone, tracker, beatboxbubble, hooper}