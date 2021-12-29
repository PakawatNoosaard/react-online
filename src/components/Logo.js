import React from 'react'
import {logo,title} from '../styles/styles'
import useHover from '../hooks/useHover'

const Logo = () => {

    // const logoImage = "./logo192.png"
    const logoImage = {
        url:'./logo192.png'
    }

    const [hover,mouseOver,mouseOut] = useHover()

    return (
        <div>
            {/* <img src={logoImage} width="100" alt="logo" /> */}
            <h3 style={title}> logo </h3>
            { hover ? <h2>Logo</h2>: null }
            <img  onMouseOver={mouseOver} onMouseOut={mouseOut} style={logo} src={logoImage.url} width="100" alt="logo" />
        </div>
    )
}

export default Logo
