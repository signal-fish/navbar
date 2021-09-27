import styled from "styled-components";
import fish from "../../assets/images/signal-fish.jpg";
import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "../../data";
import { tablet } from "../../responsive";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <Container>
      <Left>
        <Logo src={fish} alt="Signal Fish"></Logo>
        <Name>Signal Fish</Name>
        <Button showLinks={showLinks} onClick={toggleLinks}>
          <FaBars />
        </Button>
      </Left>
      <Right ref={linksContainerRef}>
        <Links ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <LinkItem key={id}>
                <Link href={url}>{text}</Link>
              </LinkItem>
            );
          })}
        </Links>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70px;
  position: relative;
  background: #744d4d;
  display: flex;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.6);
  z-index: 999;

  ${tablet({
    height: "60px",
    flexDirection: "column",
  })}
`;

const Left = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 10px 0 100px;

  ${tablet({
    width: "50px",
    height: "50px",
    margin: "0 10px 0 20px",
  })}
`;

const Name = styled.h1`
  font-size: 30px;
  margin: 0;
  color: rgba(0, 0, 0, 0.8);

  ${tablet({
    fontSize: "24px",
  })}
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  font-size: 30px;
  border: none;
  cursor: pointer;
  color: lightskyblue;
  transition: 0.3s;
  position: absolute;
  right: 20px;
  display: none;

  &:hover,
  &:focus {
    color: rgba(0, 0, 0, 0.6);
    transform: ${(props) => props.showLinks && "rotate(90deg)"};
  }

  ${tablet({
    display: "block",
  })}
`;
const Right = styled.div`
  position: absolute;
  right: 100px;
  height: 100%;
  background: #16ac86;
  display: flex;
  align-items: center;
  transition: all 0.6s linear;

  ${tablet({
    top: "60px",
    right: "0",
    overflow: "hidden",
  })}
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;

  ${tablet({
    top: "60px",
    width: "100vw",
    flexDirection: "column",
  })}
`;

const LinkItem = styled.li`
  font-size: 26px;
  padding: 10px;

  ${tablet({
    paddingLeft: "20px",
  })}
`;

const Link = styled.a`
  text-decoration: none;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.6);

`;

export default Navbar;
