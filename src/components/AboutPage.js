import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import {BlueTheme} from './Themes'
import LogoComponent from "../subcomponents/LogoComponent"
import PowerButton from "../subcomponents/PowerButton"
import SocialIcons from "../subcomponents/SocialIcons"
import ParticleComponent from "../subcomponents/ParticleComponent"
import astronaut from '../assets/Images/spaceman.png'
import { keyframes } from 'styled-components'
import BigTitle from '../subcomponents/BigTitle'

const Box=styled.div`

background-color:${props=>props.theme.body};
width:100vw;
height:100vh;
position:relative;
overflow:hidden;

`
const float=keyframes`
0%{ transform:translateY(-10px)}
50%{ transform:translateY(15px) translateX(15px)}
100%{ transform:translateY(-10px)}
`

const Spaceman=styled.div`
position:absolute;
top:10%;
right:5%;
width:20vw;
animation: ${float} 4s ease infinite;
img{
  width:100%;
  height:auto;
}
`

const Main=styled.div`
border:2px solid ${props=>props.theme.text};
color:${props=>props.theme.text};
padding:2rem;
width:50vw;
height:60vh;
z-index:3;
line-height:1.5;

display:flex;
justify-content:center;
align-items:center;
font-size:calc(0.6rem + 1vw);
backdrop-filter:blur(4px);

position:absolute;
left:calc(5rem + 5vw);
left:5rem;
top:10rem;

font-family:'Ubantu Mono',monospace;
font-style:italic;
`

const AboutPage = () => {
  return (

    <ThemeProvider theme={BlueTheme}>
      <Box>
      <LogoComponent theme='dark'/>
      <SocialIcons theme='dark'/>
      <PowerButton/>
      <ParticleComponent theme='dark'/>
    
      <Spaceman>
        <img src={astronaut} alt="spaceman"/>
      </Spaceman>

      <Main>
      Hii,its me Dhruv,
      i m currently study in computer engineering in DDIT. currently i m learning Machine Learning,Tkinter,Rest APIs etc.
      I'm a full stack developer. I love to create simple beautiful websites with great user experience.
  <br/>
  I'm interested in both frontend + backend.Trying new things and building great projects. I love to write code and playing cricket.
  <br/>
  I believe nothing is impossible.You can connect with me via social links.
  <br/>
      </Main>
      <BigTitle text="ABOUT" top="10%" left="5%"/>
      </Box>
    </ThemeProvider>

  )
}

export default AboutPage