import React from 'react'
import { Button } from 'semantic-ui-react'

const Footer = () => {
    const toWeb = (web) =>{
        window.open(web, '_blank')
    }
    return (
        <div className='footerContainer'>
            <Button circular color="linkedin" icon="linkedin" onClick={() => toWeb('https://www.linkedin.com/in/mert-ozkaynak')}/>    
            <Button circular icon="github" onClick={() => toWeb('https://github.com/mertoz41')} />
        </div>
    )
}

export default Footer