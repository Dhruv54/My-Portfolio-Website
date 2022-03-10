import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes'
import LogoComponent from "../subcomponents/LogoComponent"
import PowerButton from "../subcomponents/PowerButton"
import SocialIcons from "../subcomponents/SocialIcons"
import Card from "../subcomponents/Card"
import {Work} from '../data/WorkData'
import { useRef } from 'react'
import { useEffect } from 'react'
import { YinYang } from './AllSvgs'
import BigTitle from '../subcomponents/BigTitle'
import { motion } from "framer-motion";


const Box=styled.div`
background-color:${props=>props.theme.body};
height:400vh;
position:relative;
display:flex;
align-items:center;
`

const Main=styled(motion.ul)`
position:fixed;
top:12rem;
left:calc(10rem + 15vw);
height:40vh;
display:flex;
color:white;
`

const Rotatespin=styled.span`
display:block;
position:fixed;
right:1rem;
bottom:1rem;
width:80px;
height:80px;
z-index:1;
`

const container = {

  hidden: { opacity: 0},
  show: {
      opacity:1,
      transition:{
        staggerChildren:0.5,
        duration:0.5,
    }
  }
}

const WorkPage = () => {
  const ref=useRef(null);
  const yinyang=useRef(null);

  useEffect(() => {
    let element= ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`
      // yinyang.current.style.transform=`rotate(` +  -window.pageYOffset + `deg)`
    }

    window.addEventListener('scroll',rotate)

    return ()=> window.removeEventListener('scroll',rotate);

  }, []);


  return (

    <ThemeProvider theme={DarkTheme}>
      <Box>
      <LogoComponent theme='dark'/>
      <SocialIcons theme='dark'/>
      <PowerButton/>
      <Main ref={ref}  variants={container} initial='hidden' animate='show'>
        {
          Work.map( d =>
            <Card key={d.id} data={d}/>
          )
        }
      </Main>
        <Rotatespin ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotatespin>
        <BigTitle text="WORK" top='10%' right='20%'/>
      </Box>
    </ThemeProvider>

  )
}

export default WorkPage