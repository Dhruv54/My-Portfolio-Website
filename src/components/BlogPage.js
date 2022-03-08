import React from 'react'
import styled from 'styled-components'
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
import LogoComponent from "../subcomponents/LogoComponent"
import SocialIcons from "../subcomponents/SocialIcons"
import PowerButton from "../subcomponents/PowerButton"
import {Blogs} from '../data/BlogData'
import BlogComponent from './BlogComponent'

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
width:80%;
height:auto;
position:relative;
padding-bottom:2rem;

`
const Center=styled.div`

display:flex;
justify-content:center;
align-items:center;
padding-top:10rem;
padding-left:20rem;
`

const Grid=styled.div`

display:grid;
${'' /* grid-template-columns:repeat(2,minmax(calc(10rem+15vw),1fr)); */}
${'' /* grid-template-columns:auto; */}
grid-template-columns: auto auto;
gap:2rem 2rem;
`

const BlogPage = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent/>
        <PowerButton/>
        <SocialIcons/>
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