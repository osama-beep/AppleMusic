import styled from "styled-components";
import { FaPlay, FaForward } from "react-icons/fa";

const PlayerContainer = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  right: 10px;
  background-color: #242424;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 10px;
  z-index: 1000;
`;

const SongImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin-right: 10px;
`;

const ControlsContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  margin-left: 15px;
  cursor: pointer;
`;

const MobilePlayer = ({ songImage }) => {
  return (
    <PlayerContainer className="d-flex d-lg-none">
      <SongImage src={songImage} alt="Song cover" />
      <ControlsContainer>
        <ControlButton>
          <FaPlay />
        </ControlButton>
        <ControlButton>
          <FaForward />
        </ControlButton>
      </ControlsContainer>
    </PlayerContainer>
  );
};

export default MobilePlayer;
