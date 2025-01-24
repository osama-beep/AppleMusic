import styled from "styled-components";
import {
  FaRandom,
  FaStepBackward,
  FaPlay,
  FaStepForward,
  FaRedo,
  FaVolumeUp,
  FaUser,
} from "react-icons/fa";

const PlayerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 250px;
  right: 0;
  height: 60px;
  background-color: #242424;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: #fa586a;
  font-size: 18px;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    color: #ff7a8a;
  }
`;

const CenterLogo = styled.div`
  width: 200px;
  height: 40px;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

const AppleLogo = styled.img`
  height: 20px;
  filter: brightness(0) invert(1);
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LoginButton = styled.button`
  background-color: #fa586a;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  margin-left: 15px;
  cursor: pointer;
  &:hover {
    background-color: #ff7a8a;
  }
`;

const DesktopPlayer = () => {
  return (
    <PlayerContainer className="d-none d-lg-flex">
      <ControlsContainer>
        <IconButton>
          <FaRandom />
        </IconButton>
        <IconButton>
          <FaStepBackward />
        </IconButton>
        <IconButton>
          <FaPlay />
        </IconButton>
        <IconButton>
          <FaStepForward />
        </IconButton>
        <IconButton>
          <FaRedo />
        </IconButton>
      </ControlsContainer>
      <CenterLogo>
        <AppleLogo src="src\assets\logos\apple.svg" alt="Apple Music Logo" />
      </CenterLogo>
      <RightContainer>
        <IconButton>
          <FaVolumeUp />
        </IconButton>
        <IconButton>
          <FaUser />
        </IconButton>
        <LoginButton>Accedi</LoginButton>
      </RightContainer>
    </PlayerContainer>
  );
};

export default DesktopPlayer;
