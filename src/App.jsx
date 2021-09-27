import styled from "styled-components";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Container>
      <Navbar></Navbar>
    </Container>
    );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
export default App;
