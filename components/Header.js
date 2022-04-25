import styled from 'styled-components'


const HeaderSection = styled.div`
    color: #000;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
`

function Header() {
  return (
    <HeaderSection>
        <img src="/srf.png" />
        <br />
        <p>Surf Ready Fitness </p>
    </HeaderSection>
  )
}

export default Header;