import React from 'react'
import Header from '../components/Header';
import Projects from '../components/Projects'
import {animated, useSpring} from 'react-spring'
const Welcome = () => {
    const animation = useSpring({to: {opacity: 1}, from: {opacity: 0}})
    return (
            <animated.div style={animation}>
                <Header/>
                <Projects />
            </animated.div>           
    )
}

export default Welcome