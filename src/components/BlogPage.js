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

const MainContainer=styled.div`
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
padding-bottom:2rem;

`
const Center=styled.div`

display:flex;
justify-content:center;
align-items:center;
padding-top:10rem;
padding-left:8rem;
padding-right:8rem;
`

const Grid=styled.div`

display:grid;
grid-template-columns:repeat(2,1fr);
grid-gap:1rem;
`

const BlogPage = () => {


  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num=(window.innerHeight-70)/30;
    setNumbers(parseInt(num));
  }, []);

  return (
    <MainContainer>
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
      </Container>
    </MainContainer>
  )
}

export default BlogPage