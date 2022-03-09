import React from 'react'
import styled from 'styled-components'
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
import LogoComponent from "../subcomponents/LogoComponent"
import SocialIcons from "../subcomponents/SocialIcons"
import PowerButton from "../subcomponents/PowerButton"
import {Blogs} from '../data/BlogData'
import BlogComponent from './BlogComponent'
import AnchorComponent from '../subcomponents/AnchorComponent'
import { useState } from 'react/cjs/react.development'
import { useEffect } from 'react/cjs/react.development'
import BigTitle from '../subcomponents/BigTitle'
import { motion } from "framer-motion";

const MainContainer=styled(motion.div)`
background-image:url(${img});
background-size:cover;
background-repeat:no-repeat;
background-attachment:fixed;
background-position:center;
width:100vw;
`

const Container=styled.div`
background-color: ${props=>`rgba(${props.theme.bodyRgba},0.5)`};
width:100%;
height:auto;
position:relative;
padding-bottom:5rem;
`
const Center=styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

const Grid=styled.div`
display: grid;
grid-template-columns: repeat(2,minmax(calc(10rem + 15vw), 1fr));
gap: 1rem;
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

const BlogPage = () => {


  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num=(window.innerHeight-70)/30;
    setNumbers(parseInt(num));
  }, []);

  return (
    <MainContainer variants={container} initial='hidden' animate='show'
    exit={{
      opacity:0,transition:{duration:0.5}
    }}
    >
      <Container>
        <LogoComponent/>
        <PowerButton/>
        <SocialIcons/>
        <AnchorComponent numbers={numbers}/>
<Center>
<Grid>
    {
      Blogs.map(blog => {
        return <BlogComponent key={blog.id} blog={blog}/>
      })
    }
</Grid>
</Center>
<BigTitle text="BLOG" top="5rem" left="5rem"/>
      </Container>
    </MainContainer>
  )
}

export default BlogPage