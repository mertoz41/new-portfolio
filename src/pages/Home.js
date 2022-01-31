import React from 'react'
// import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import Projects from '../components/Projects'
import { Button } from 'semantic-ui-react'
import {animated, useSpring} from 'react-spring'
const Welcome = () => {
    // const navigate = useNavigate();
    const animation = useSpring({to: {opacity: 1}, from: {opacity: 0}})
    return (
        
                    <animated.div style={animation}>
                        <Header/>
                        <div className='intro'>
                            <p>
                            i like to build useful products that people like me can use and interact with.
                            </p>
                        </div>
                        <Projects />
                    </animated.div>           
    )
}

export default Welcome