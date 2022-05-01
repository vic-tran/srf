import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

const Hero = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  flex-direction:column;
`

const Heading = styled.h1`
  color: #000;
  font-size: 5rem;
  font-weight: 550;
`
const Text = styled.h1`
color: #000;
height: 250px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 400;
text-align: center;
flex-direction: column;
`


export default function Home(results) {
  return (
    <div>
      <Head>
        <title>Surf Training | Surf Ready Fitness +</title>
      </Head>
      <Hero>
        <Heading>Welcome to Surf Ready Fitness +</Heading>
        <Text>The first gym for surfers ~ now online! <br /> <br /> Our program is designed to help the average surfer catch more waves, feel stronger in the water <br /> 
        and have more fun enjoying the sport you love
        </Text>
      </Hero>
      <div className="classes">
        <Image src="/kanoa.jpeg" width={300} height={200} />
          <div class='text-on-image'>
            <h3>My Custom Program</h3>
          </div>
        <Image src="/warmup.jpg" width={300} height={200} />
          <div class='text-on-image'>
            <h3>Warmup Playlist</h3>
          </div>
        <Image src="/left.jpg" width={300} height={200} />
          <div class='text-on-image'>
            <h3>Strength Playlist</h3>
          </div>
        <Image src="/paddle.jpeg" width={300} height={200} />
          <div class='text-on-image'>
            <h3>Conditioning Playlist</h3>
          </div>
        <Image src="/ee.png" width={300} height={200} />
          <div class='text-on-image'>
            <h3>Core Playlist</h3>
          </div>
      </div>
    </div>
  )
}


