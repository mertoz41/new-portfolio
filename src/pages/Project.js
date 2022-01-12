import React, {useEffect, useState} from 'react'
import {chooseProject} from '../projectInfo'
import Header from '../components/Header'
import Styles from './project.module.css'
import { Button } from 'semantic-ui-react'

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
    // 
    return(
        <div>
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
            <img className={Styles.projectPicture} src={project.pictures[1]} alt='projeuno'/>

            <p className={Styles.projectWriting}>{project.tech}</p>
            <img className={Styles.projectPicture} src={project.pictures[2]} alt='projeuno'/>
            </div>
            }
        </div>
    )
}

export default Project