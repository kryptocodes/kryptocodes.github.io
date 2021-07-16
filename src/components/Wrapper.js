import React from 'react'
import Nav from './navBar'
import Seo from './Seo'
import '../../styles/global.css'

const Wrapper = ({title,children}) => {
    return (
        <div>
            <Seo title={title}/>
            {Nav()}
            {children}
        </div>
    )
}








export default Wrapper