import React from 'react'
import { useNavigate } from "react-router-dom";
import Styles from './header.module.css'

const Header = () => {
    const navigate = useNavigate()

    return (
        <div className={Styles.container}>
            {window.location.pathname === '/about' ? 
            <div>
                <h3 className={Styles.name}>About</h3>
            </div>
            :    
            <div className={Styles.sections}>
                <div>
                    <h3 className={Styles.name}>Mert Özkaynak</h3>
                </div>
                <div className={Styles.occupation}>
                    <h3 className={Styles.secondary}>web developer</h3>
                </div>
            </div>
            }
            <div className={Styles.sections}>
                {window.location.pathname !== '/' && 
                <div onClick={() => navigate('/')}>
                    <h3 className={Styles.primary}>home</h3>
                </div>
                }
                {window.location.pathname !== '/about' &&
                <div onClick={() => navigate('/about')}>
                    <h3 className={Styles.primary}>about</h3>
                </div>
                }
            </div>
        </div>
    )
}

export default Header