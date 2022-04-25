import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`


export default function About() {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <Hero>
        <Heading>About</Heading>
      </Hero>

      
    </div>
  )
}
