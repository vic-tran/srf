import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

const Hero = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`

const Heading = styled.h1`
  color: #000;
  font-size: 5rem;
  font-weight: 750;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Surf Training | Surf Ready Fitness +</title>
      </Head>
      <Hero>
        <Heading>Welcome to Surf Ready Fitness +</Heading>
      </Hero>
      
    </div>
  )
}
