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
                <Button circular color="linkedin" icon="linkedin" onClick={() => toWeb('https://www.linkedin.com/in/mert-ozkaynak')}/>    
                <Button circular icon="envelope" onClick={() => window.open('mailto:mertozka41@gmail.com')} />
            </div>
        </div>
    )
}

export default Footer