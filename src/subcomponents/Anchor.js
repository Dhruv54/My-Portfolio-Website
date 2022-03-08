import React from 'react'
import { useRef } from 'react/cjs/react.production.min'
import styled from 'styled-components'

const Container=styled.div`
position:relative;
`

const Slider=styled.div`
position:fixed;
top:0;
right:2rem;
`
const Anchor = () => {
const ref=useRef(null);
const hiddenref=useRef(null);

    return (
        <Container>
            <Slider ref={ref}>
                {
                    [...Array(25).map((x,id)=>{
                        return <Link className="chain" key={id} width={25} height={25} fill='currentColor'/>
                    })]
                }
            </Slider>
        </Container>
    )
}

export default Anchor