import React from 'react'
import Header from '../components/Header';
import Projects from '../components/Projects'
import {animated, useSpring} from 'react-spring'
const Welcome = () => {
    const animation = useSpring({to: {opacity: 1}, from: {opacity: 0}})
    return (
            <animated.div style={animation}>
                {/* <Header/> */}
                <div className="section">
                    <p>I'm a software engineer at ThinkNimble, building compelling web apps for startups and socially focused businesses. </p>
                    <p>In the past I have built apps that showed basketball courts around, sampler to sample users` voice, and nowadays I am working on another music app.</p>
                    <p>Nice to meet you and have a good day!</p>
                </div>
                {/* <Projects /> */}
            </animated.div>           
    )
}

export default Welcome