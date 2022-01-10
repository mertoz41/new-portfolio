import React from 'react'
import { useNavigate } from "react-router-dom";


const Header = () => {
    console.log(window.location.pathname)
    const navigate = useNavigate()

    return (
        <div className='headerContainer'>
            <div className='headerLeft' onClick={() => navigate('/')}>
                <div>
                    <h3>Mert Özkaynak</h3>
                </div>
                <div>
                    <h4>full stack web developer</h4>
                </div>
            </div>
            <div className='headerRight'>
                <div className="headerButon" onClick={() => navigate('/about')}>
                    <h2 className={window.location.pathname === '/about' && 'selectedTitle'}>about</h2>
                </div>
                <div className="headerButon" onClick={() => navigate('/projects')}>
                    <h2 className={window.location.pathname === '/projects' && 'selectedTitle'}>projects</h2>
                </div>
            </div>
        </div>
    )
}

export default Header