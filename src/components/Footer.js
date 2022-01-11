import React from 'react'
import { Button } from 'semantic-ui-react'
import Styles from './footer.module.css'
const Footer = () => {
    const toWeb = (web) =>{
        window.open(web, '_blank')
    }
    return (
        <div className={Styles.container}>
            <div>
                <p>
                ©2022 Mert Özkaynak
                </p>
            </div>
            <div>
                <Button circular color="linkedin" icon="linkedin" onClick={() => toWeb('https://www.linkedin.com/in/mert-ozkaynak')}/>    
                <Button circular icon="github" onClick={() => toWeb('https://github.com/mertoz41')} />
            </div>
        </div>
    )
}

export default Footer