import styled from 'styled-components'


const FooterSection = styled.div`
    background: #000;
    color: #fff;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Footer() {
  return (
    <FooterSection>
    Surf Ready Fitness
    <br />
    (949) 503-0009
    <br />
    info@surfreadyfitness.com
    <br />
    ©2022 by SRF
    
    </FooterSection>
  )
}

export default Footer;