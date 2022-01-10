import React, {useEffect} from 'react'
import {cezs} from '../projectInfo'
import Header from '../components/Header'

const Project = (props) => {

    useEffect(() => {
        let splitted = window.location.pathname.split('/')
        let projectName = splitted[splitted.length -1]
        if (projectName == 'cezs')
        console.log(cezs)
    },[])
    return(
        <div>
            <Header />

            <h1>HEEEEY</h1>
        </div>
    )
}

export default Project