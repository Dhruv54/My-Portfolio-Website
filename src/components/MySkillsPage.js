import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes'
import {Design,Develope} from "./AllSvgs"
import LogoComponent from "../subcomponents/LogoComponent"
import PowerButton from "../subcomponents/PowerButton"
import SocialIcons from "../subcomponents/SocialIcons"
import ParticleComponent from "../subcomponents/ParticleComponent"
import BigTitle from '../subcomponents/BigTitle'
const Box=styled.div`

background-color:${props=>props.theme.body};
width:100vw;
height:100vh;
position:relative;
display:flex;
justify-content:space-evenly;
align-items:center;
`
const Main=styled.div`
border:2px solid ${props=>props.theme.text};
color:${props=>props.theme.text};
background-color:${props=>props.theme.body};
padding:2rem;
width:30vw;
height:60vh;
z-index:3;
line-height:1.5;
cursor:pointer;
font-family:'Ubantu Mono',monospace;
display:flex;
flex-direction:column;
justify-content:space-between;

&:hover{
  color:${props=>props.theme.body};
  background-color:${props=>props.theme.text};
}
`
const Title=styled.h2`
display:flex;
justify-content:center;
align-items:center;
font-size:calc(1em + 1vw);

${Main}:hover &{
  &>*{
    fill:${props=>props.theme.body}
  }
}

&>*:first-child{
    margin-right:1rem;
  }
`
const Description=styled.div`
color:${props=>props.theme.text};
font-size:calc(0.6em + 1vw);
padding:0.5rem 0;

${Main}:hover &{
    color:${props=>props.theme.body}
}


strong{
  margin-bottom:1rem;
  text-transform:uppercase;

}
ul,p{
  margin-left:2rem;
}
`

const MySkillsPage = () => {
  return (

    <ThemeProvider theme={lightTheme}>
      <Box>
      <LogoComponent theme='light'/>
      <SocialIcons theme='light'/>
      <PowerButton/>
      <ParticleComponent theme='light'/>
        <Main>
          <Title>
          <Develope width={40} height={40}/>LANGUAGES
          </Title>
          <Description>
            <ul>
              <li>
                1. C
              </li>
              <li>
                2. C++
              </li>
              <li>
                3. C#
              </li>
              <li>
                4. Python
              </li>
              <li>
                5. PHP
              </li>
              <li>
                6. JAVA
              </li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Design width={40} height={40}/>FRONTEND
          </Title>
          <Description>
            <ul>
              <li>
                1. HTML
              </li>
              <li>
                2. CSS
              </li>
              <li>
                3. JavaScript
              </li>
              <li>
                4. Bootstrap
              </li>
              <li>
                5.
              </li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
          <Develope width={40} height={40}/>FRAMEWORK
          </Title>
          <Description>
            <ul>
              <li>
                1. React(MERN stack)
              </li>
              <li>
                2. Django
              </li>
              <li>
                3. Angular
              </li>
              <li>
                4. .NET framework & .NET Core
              </li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
          <Develope width={40} height={40}/>BACKEND
          </Title>
          <Description>
            <ul>
              <li>
                1. MongoDB
              </li>
              <li>
                2. Express
              </li>
              <li>
                3. Node.js
              </li>
              <li>
                4. MySQL
              </li>
            </ul>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="80%" left="30%"/>
      </Box>
    </ThemeProvider>
  )
}

export default MySkillsPage