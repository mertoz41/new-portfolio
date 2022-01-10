import React from 'react'
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();
    return (
        <div className='welcomeContainer'>
            <div>
                <h1 className='userTitle'>Hi, I'm Mert Özkaynak, a full-stack web developer. </h1>    

            </div>
            <div className="button" onClick={() => navigate('/projects')}>
                <h4>projects</h4>
            </div>
            <div className="button" onClick={() => navigate('/about')}>
                <h4>about</h4>
            </div>        
        </div>
    )
}

export default Welcome