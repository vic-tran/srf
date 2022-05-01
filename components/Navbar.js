import styled from 'styled-components';
import Link from 'next/link';
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa"
import { IconContext } from 'react-icons';

const Nav = styled.nav`
    height: 80px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledLink = styled.a`
    padding: 0rem 2rem;
`
;

const Icons = styled.a`
    padding: 0rem 2rem;
    display: flex;
    gap: 10px;
    hover: 
`

const Navbar = () => {
  return (
    <Nav>
       <div>
        <IconContext.Provider value ={{ color: "grey", size: "1.5em",}}>
          <Icons>
            <Link href="https://www.youtube.com/channel/UCjjHkUJlRomKmdbufKcOL_A/featured" passHref>
            <FaYoutube />
            </Link>
            <Link href="https://twitter.com/SRFreadyfitness" passHref>
            <FaTwitter />
            </Link>
            <Link href="https://www.instagram.com/surfreadyfitness/" passHref>
            <FaInstagram />
            </Link>
            <Link href="https://www.facebook.com/surfreadyfitness/" passHref>
            <FaFacebook />
            </Link>
          </Icons> 
        </IconContext.Provider> 
       </div>
       <div>
       <Link href="/" passHref>
            <StyledLink>Home</StyledLink>
        </Link>   
       <Link href="/about" passHref>
            <StyledLink>About</StyledLink>
        </Link>   
        <Link href="/contact" passHref>
            <StyledLink>Contact</StyledLink>
        </Link>   
       </div>
    </Nav>
  );
}

export default Navbar;