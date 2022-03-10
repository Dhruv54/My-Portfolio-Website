import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import {NewTheme} from './Themes'
import {Design,Develope} from "./AllSvgs"
import LogoComponent from "../subcomponents/LogoComponent"
import PowerButton from "../subcomponents/PowerButton"
import SocialIcons from "../subcomponents/SocialIcons"
import ParticleComponent from "../subcomponents/ParticleComponent"
import BigTitle from '../subcomponents/BigTitle'


const Container=styled.div`
padding-top:100px;
padding-left:70px;
padding-right:10px;
`

const Box=styled.div`
display:flex;
flex-flow:row wrap;
position:relative;
`
const Main=styled.div`
border:2px solid #00203FFF;
color:#303030;
background-color:${props=>props.theme.body};
padding:1rem;
flex:1;
flex-basis: 20%;
z-index:3;
line-height:1.5;
cursor:pointer;
font-family:'Ubantu Mono',monospace;
margin: 10px;

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
font-size:calc(0.6em + 1vw);
padding:0.5rem 0;

${Main}:hover &{
    color:${props=>props.theme.body}
}
ul,p{
  margin-left:2rem;
}
`

const MySkillsPage = () => {
  return (

    <ThemeProvider theme={NewTheme}>
      <LogoComponent theme='light'/>
      <SocialIcons theme='light'/>
      <PowerButton/>
      <ParticleComponent theme='light'/>
      <Container>
      <Box>
        <Main>
          <Title>
          <Develope width={35} height={35}/>LANGUAGES
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
            <Design width={35} height={35}/>FRONTEND
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
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
          <Develope width={35} height={35}/>FRAMEWORK
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
          <Develope width={35} height={35}/>BACKEND
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
        
        <Main>
          <Title>
          <Develope width={35} height={35}/>EXTRA
          </Title>
          <Description>
            <ul>
              <li>
                1. Git
              </li>
              <li>
                2. GitHub
              </li>
            </ul>
          </Description>
        </Main>
      </Box>
      </Container>
      <BigTitle text="SKILLS" top="80%" left="30%"/>
    </ThemeProvider>
  )
}

export default MySkillsPage