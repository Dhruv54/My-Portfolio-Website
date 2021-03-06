import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'

// import configDark from "../config/particlesjs-config.json"
import configLight from "../config/particlesjs-config-light.json"
import configPolygon from "../config/particlesjs_polygon.json"
import configSnow from "../config/particlesjs_snow.json"

const Box=styled.div`
position:absolute;
top:0;
right:0;
left:0;
bottom:0;
z-index:0;
`

const ParticleComponent = (props) => {
    return (
        <Box>
        {
            props.theme==="points"?<Particles style={{position:'absolute',top:0}} params={configLight}/>:<Particles style={{position:'absolute',top:0}} params={props.theme === "light" ? configPolygon : configSnow}/>

        }
        </Box>
    )
}

export default ParticleComponent