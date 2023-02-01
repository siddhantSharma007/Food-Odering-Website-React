import React from 'react'
import Slider from './Slider'
import About from './About'
import styled from 'styled-components'
import Service from './Service'
import Chef from './Chef'
import Background from './Background'
import Customer from './Customer'
import Footer from './Footer'

export default function Home() {
  return (
    <>
    <Container>
    <Slider />
     <About />
     <Service />
     <Chef />
     </Container>
     <Background />
     <Customer />
     <Footer />
     </>
  )
}
const Container=styled.div`
`;