import React, {useEffect, useState} from 'react'
import {chooseProject} from '../projectInfo'
import Header from '../components/Header'
import Styles from './project.module.css'
import { Button } from 'semantic-ui-react'
import {useSpring, animated} from 'react-spring'

const Project = (props) => {
    const [project, setProject] = useState(null)
    useEffect(() => {
        let splitted = window.location.pathname.split('/')
        let projectName = splitted[splitted.length -1]
        setProject(chooseProject(projectName))
    },[])

    const toWeb = (web) =>{
        window.open(web, '_blank')
    }
    const animation = useSpring({to: {opacity: 1}, from: {opacity: 0}})

    // 
    return(
        <animated.div style={animation}>
            <Header />
            {project &&
            <div>
                <div className={Styles.titleSection}>      
                    <h1 className={Styles.title}>{project.name}</h1>
                    <div> 
                        <Button circular icon="github"  onClick={() => toWeb(project.gitHub)}/>
                    </div>
                </div>


            <p className={Styles.projectWriting}>{project.what}</p>
            <img className={Styles.projectPicture} src={project.pictures[0]} alt='projeuno'/>
            <p className={Styles.projectWriting}>{project.why}</p>
            {project.name === 'Cezs' && 
            <p className={Styles.projectWriting}>{project.whyTwo}</p>

            }
            <img className={Styles.projectPicture} src={project.pictures[1]} alt='projeuno'/>

            <p className={Styles.projectWriting}>{project.tech}</p>
            <img className={Styles.projectPicture} src={project.pictures[2]} alt='projeuno'/>
            </div>
            }
        </animated.div>
    )
}

export default Project