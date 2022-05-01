import styled from 'styled-components'
import Link from 'next/link';

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
        <Link href="/" passHref>
        <img src="/srf.png" />
        </Link>
        <br />
        <p>Surf Ready Fitness </p>
    </HeaderSection>
  )
}

export default Header;