import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
// import { keyframes } from 'styled-components'
import LogoComponent from '../subcomponents/LogoComponent'
import PowerButton from '../subcomponents/PowerButton'
import SocialIcons from '../subcomponents/SocialIcons'
// import { YinYang } from './AllSvgs'
import { useState } from 'react'
import Intro from './Intro'
import ParticleComponent from "../subcomponents/ParticleComponent"

import { motion } from 'framer-motion'


const MainContainer=styled.div`
${'' /* background:${props=>props.theme.body}; */}
background:'#FFE5B4';
width:100vw;
height:100vh;
overflow:hidden;
position:relative;
h2,h3,h4,h5,h6{
  font-family:"Karla",sans-serif;
  font-weight:900;
}
`

const Container=styled.div`
padding:2rem;
`

const Contact=styled(NavLink)`
color: ${ props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration:none;
z-index:1;

`

// const BLOG=styled(NavLink)`
// color: ${ props => props.theme.text};
// position: absolute;
// top: 50%;
// right: calc(1rem + 2vw);
// transform: rotate(90deg) translate(-50%,-50%);
// text-decoration:none;
// z-index:1;
// `

const WORK=styled(NavLink)`
color: ${ props =>props.click?props.theme.body:props.theme.text};
position: absolute;
left: calc(1rem + 1vw);
top:14%;
font-size:calc(0.3em + 1vw);
${'' /* transform: translate(-50%,-50%) rotate(-90deg); */}
text-decoration:none;
z-index:1;

`

// const BottomBar=styled.div`
// position: absolute;
// ${'' /* bottom: 1rem; */}
// right: 0;
// ${'' /* width:100%; */}
// display:flex;
// justify-content:space-evenly;
// left: calc(10rem + 2vw);
// `

const ABOUT=styled(NavLink)`
color: ${ props =>props.click?props.theme.body:props.theme.text};
position: absolute;
left: calc(1rem + 1vw);
top:27%;
font-size:calc(0.3em + 1vw);
${'' /* transform: translate(-50%,-50%) rotate(-90deg); */}
text-decoration:none;
z-index:1;
`

const SKILLS=styled(NavLink)`
color: ${ props =>props.click?props.theme.body:props.theme.text};
position: absolute;
left: calc(1rem + 1vw);
font-size:calc(0.3em + 1vw);
top:20%;
${'' /* transform: translate(-50%,-50%) rotate(-90deg); */}
text-decoration:none;
z-index:1;
`

// const rotate=keyframes`
// from{
//     transform:rotate(0);
// }
// to{
//     transform:rotate(360deg);
// }
// `

// const Center=styled.button`
// position:absolute;
// top:${props=>props.click ? '85%' : '50%'};
// left:${props=>props.click ? '92%' : '50%'};
// transform: translate(-50%,-50%);
// border:none;
// outline:none;
// background-color:transparent;
// cursor:pointer;
// display:flex;
// flex-direction:column;
// justify-content:center;
// align-items:center;
// transition:all 1s ease;
// &>:first-child{
//   animation:${rotate} infinite 1.5s linear;
// }
// &>:last-child{
//   display:${props=>props.click ? 'none' : 'inline-block'};
//   padding-top:1rem;
// }
// `

// const DarkDiv=styled.div`
// position:absolute;
// background-color:#000;
// top:0;
// bottom:0;
// right:50%;
// width:${props=>props.click?'50%':'0%'};
// height:${props=>props.click?'100%':'0%'};
// z-index:1;
// transition: height 0.5s ease,width 1s ease 0.5s

// `


const Main = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(click);

  return (
    <MainContainer>
      <ParticleComponent theme='points'/>
      {/* <DarkDiv click={click} onClick={()=>handleClick()}/> */}
      <Container>
      <PowerButton/>
      <LogoComponent theme={click ? "dark" : "light" } onClick={()=>handleClick()}/>
      <SocialIcons theme={click ? "dark" : "light" }/>
      {/* <Center click={click}>
        <YinYang onClick={()=>handleClick()} width={click?120:200} height={click?120:200} fill='currentColor'/>
        <span>click here</span>
      </Center> */}

    <Contact target="_blank" to={{pathname:"mailto:190310patel@gmail.com"}}>
      <motion.h2
      initial={{
        y:-200,
        transition: {
            type:'spring',
            duration: 1.5,
            delay:1
        }
      }}
      animate={{
        y:0,
        transition: {
            type:'spring',
            duration: 1.5,
            delay:1.1
        }
      }}
      whileHover={{scale:1.1}}>
        CONTACT ME
      </motion.h2>
    </Contact>

    {/* <BLOG to="/blog">
      <motion.h2
      initial={{
        y:-200,
        transition: {
            type:'spring',
            duration: 1.5,
            delay:1
        }
      }}
      animate={{
        y:0,
        transition: {
            type:'spring',
            duration: 1.5,
            delay:1
        }
      }}
      whileHover={{scale:1.1}}
      whileTap{...{scale:0.9}}>
        Blog
      </motion.h2>
    </BLOG> */}

    <WORK to="/work" click={click}>
      <motion.h2
      initial={{
        x:-200,
        transition: {
            type:'spring',
            duration: 1.5,
            delay:1
        }
      }}
      animate={{
        x:0,
        transition: {
            type:'spring',
            duration: 1.5,
            delay:1
        }
      }}
      whileHover={{scale:1.1}}>
        PROJECTS
      </motion.h2>
    </WORK>

    {/* <BottomBar> */}
      <ABOUT to="/about" click={click}>
        <motion.h2
        initial={{
        x:-200,
        transition: {
            type:'spring',
            duration: 1.5,
            delay:1
        }
      }}
      animate={{
        x:0,
        transition: {
            type:'spring',
            duration: 1.5,
            delay:1.2
        }
      }}
        whileHover={{scale:1.1}}>
            ABOUT
        </motion.h2>
      </ABOUT>

      <SKILLS to="/skills">
        <motion.h2
        initial={{
        x:-200,
        transition: {
            type:'spring',
            duration: 1.5,
            delay:1
        }
      }}
      animate={{
        x:0,
        transition: {
            type:'spring',
            duration: 1.5,
            delay:1.1
        }
      }}
      whileHover={{scale:1.1}}>
          SKILLS
        </motion.h2>
      </SKILLS>
    {/* </BottomBar>  */}

      </Container>
      {/* {click?<Intro click={click}/>:null} */}
      <Intro/>
    </MainContainer>
  )
}

export default Main