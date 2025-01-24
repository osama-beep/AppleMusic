import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import DesktopPlayer from "./components/DesktopPlayer";

const MainContent = styled.div`
  @media (min-width: 992px) {
    margin-left: 250px;
    margin-top: 60px;
  }
`;
function App() {
  return (
    <div className="App bg-dark">
      <Navbar />
      <DesktopPlayer className="d-none d-lg-block" />
      <MainContent>
        <Main />
      </MainContent>
      <Footer />
    </div>
  );
}

export default App;
