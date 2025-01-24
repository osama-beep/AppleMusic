import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import {
  FaSearch,
  FaHome,
  FaRegSquare,
  FaBroadcastTower,
} from "react-icons/fa";
import DesktopPlayer from "./DesktopPlayer";

const StyledBootstrapNavbar = styled(BootstrapNavbar)`
  background-color: #242424;
`;
const CustomToggler = styled(BootstrapNavbar.Toggle)`
  border: none;
  background: transparent;
  padding: 0;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  .navbar-toggler-icon {
    background-image: none;
    position: relative;
    width: 24px;
    height: 20px;
  }

  .navbar-toggler-icon::before,
  .navbar-toggler-icon::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #fa586a;
    transition: all 0.3s ease;
  }

  .navbar-toggler-icon::before {
    top: 25%;
  }

  .navbar-toggler-icon::after {
    bottom: 25%;
  }
`;

const WhiteLogo = styled.img`
  filter: brightness(0) invert(1);
  height: 20px;
  width: auto;
`;

const StyledLink = styled.a`
  color: #fa586a !important;
  text-decoration: none;

  &:hover {
    color: #ff7a8a !important;
  }
`;

const NavLink = styled(Nav.Link)`
  color: #fa586a !important;
  text-decoration: none;
  margin: 0 10px;
  display: flex;
  align-items: center;

  &:hover {
    color: #ff7a8a !important;
  }
`;

const SearchIcon = styled(FaSearch)`
  color: #fa586a;
  margin-right: 5px;
`;

const DesktopNavbar = styled.nav`
  width: 250px;
  height: 100vh;
  background-color: #242424;
  position: fixed;
  left: 0;
  top: 0;
  display: none;
  flex-direction: column;
  padding: 20px 0;
  z-index: 1000;

  @media (min-width: 992px) {
    display: flex;
  }
`;

const DesktopLogo = styled.img`
  width: 60px;
  margin-bottom: 30px;
  filter: brightness(0) invert(1);
`;

const SearchContainer = styled.div`
  width: 160px;
  height: 60px;
  background-color: #1c1c1e;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  padding-left: 15px;
`;

const DesktopNavLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  color: #fa586a;
  margin-bottom: 20px;
  width: 160px;
  padding: 10px 15px;

  &:hover {
    color: #ff7a8a;
    background-color: #1c1c1e;
    border-radius: 10px;
  }
`;

const NavIcon = styled.div`
  font-size: 24px;
  margin-right: 15px;
  color: #fa586a;
`;

const NavText = styled.span`
  font-size: 14px;
  color: #fa586a;
`;

const MainContent = styled.div`
  @media (min-width: 992px) {
    margin-left: 250px;
    margin-top: 60px;
  }
`;
const Navbar = () => {
  return (
    <>
      <StyledBootstrapNavbar expand="lg" className="d-lg-none">
        <Container fluid>
          <CustomToggler aria-controls="navbarContent" />

          <BootstrapNavbar.Brand className="mx-auto">
            <WhiteLogo
              src="src\assets\logos\music.svg"
              alt="Apple Music Logo"
            />
          </BootstrapNavbar.Brand>

          <StyledLink href="#">Accedi</StyledLink>

          <BootstrapNavbar.Collapse id="navbarContent">
            <Nav className="mx-auto">
              <NavLink href="#">
                <SearchIcon />
                Cerca
              </NavLink>
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">Radio</NavLink>
              <NavLink href="#">Novità</NavLink>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </StyledBootstrapNavbar>

      <DesktopNavbar>
        <DesktopLogo src="src\assets\logos\music.svg" alt="Apple Music Logo" />
        <SearchContainer>
          <SearchIcon
            style={{ fontSize: "20px", marginRight: "10px", color: "#fa586a" }}
          />
          <NavText style={{ color: "#fa586a" }}>Cerca</NavText>
        </SearchContainer>
        <DesktopNavLink href="#">
          <NavIcon>
            <FaHome />
          </NavIcon>
          <NavText>Home</NavText>
        </DesktopNavLink>
        <DesktopNavLink href="#">
          <NavIcon>
            <FaRegSquare />
          </NavIcon>
          <NavText>Novità</NavText>
        </DesktopNavLink>
        <DesktopNavLink href="#">
          <NavIcon>
            <FaBroadcastTower />
          </NavIcon>
          <NavText>Radio</NavText>
        </DesktopNavLink>
      </DesktopNavbar>

      <DesktopPlayer className="d-none d-lg-block" />

      <MainContent>
        {/* Qui andrà il contenuto principale della tua applicazione */}
      </MainContent>
    </>
  );
};

export default Navbar;
