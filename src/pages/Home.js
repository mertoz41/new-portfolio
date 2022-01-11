import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import Projects from '../components/Projects'
import { Button } from 'semantic-ui-react'
const Welcome = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <Header/>
            <div className='intro'>
                <p>
                i like to build useful products that people like me can use and interact with.
                </p>
            </div>
            <Projects />
        </div>
    )
}

export default Welcome