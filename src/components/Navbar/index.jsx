import styled from "styled-components";
import signal from "../../assets/images/signal-fish.jpg";
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
    if (showLinks) {
      linksRef.current.style.height = "255px";
    } else {
      linksRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <Image src={signal} alt="Signal Fish"></Image>
            <Name>Signal Fish</Name>
          </Logo>
          <Button showLinks={showLinks} onClick={toggleLinks}>
            <FaBars></FaBars>
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
      </Wrapper>
    </Container>
  );
};

const Container = styled.nav`
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  height: 70px;
  background: #f3ecec;
  ${tablet({
    height: "60px",
  })}
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  ${tablet({
    justifyContent: "space-between",
  })}
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 100px;
  margin-right: 15px;

  ${tablet({
    width: "50px",
    height: "50px",
    marginLeft: "20px",
    marginRight: "10px",
  })}
`;

const Name = styled.h1`
  font-size: 30px;
  color: rgba(0, 0, 0, 0.8);

  ${tablet({
    fontSize: "24px",
  })}
`;

const Button = styled.button`
  border: none;
  font-size: 30px;
  background: transparent;
  cursor: pointer;
  margin: 0;
  padding: 0;
  cursor: pointer;
  color: #04ade6;
  display: none;
  transition: 0.6s;
  &:hover {
    opacity: 0.6;
    transform: ${(props) => props.showLinks && "rotate(90deg)"};
  }
  ${tablet({
    display: "flex",
    marginRight: "20px",
  })}
`;

const Right = styled.div`
  position: absolute;
  height: 100%;
  right: 100px;
  display: flex;
  align-items: center;

  ${tablet({
    width: "100%",
    height: "auto",
    left: 0,
    top: "60px",
  })}
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  font-size: 30px;
  text-transform: capitalize;
  background: #f3ecec;
  transition: all 0.5s linear;

  ${tablet({
    width: "100%",
    height: "auto",
    fontSize: "25px",
    flexDirection: "column",
    alignItems: "flex-start",
    overflow: "hidden",
  })}
`;

const LinkItem = styled.li`
  margin: 20px;

  ${tablet({
    margin: "10px 0 10px 20px",
    width: "100%",
  })}
`;

const Link = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  transition: 0.3s;

  &:hover {
    opacity: 0.6;
  }

  ${tablet({
    display: "block",
  })}
`;

export default Navbar;
