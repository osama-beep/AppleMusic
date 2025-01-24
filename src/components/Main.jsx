import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

import image1 from "../assets/images/1a.png";
import image2 from "../assets/images/1b.png";
import image3 from "../assets/images/1c.png";
import image2a from "../assets/images/2a.png";
import image2b from "../assets/images/2b.png";
import MobilePlayer from "./MobilePlayer";
import image2c from "../assets/images/2c.png";

const StyledContainer = styled(Container)`
  padding-top: 20px;
  color: white;
  background-color: #1f1f1f;
  max-width: 100%;
  overflow-x: hidden;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 150px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Separator = styled.hr`
  border-color: #333;
  margin-bottom: 20px;
  margin: 20px;
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  flex: 0 0 auto;
  width: ${(props) => props.width || "120px"};
  margin-right: 10px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: ${(props) => props.height || "auto"};
  object-fit: cover;
  border-radius: 10px;
`;

const SquareCardImage = styled(CardImage)`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
`;

const CardTitle = styled.h3`
  font-size: 14px;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.2em;
  max-height: 2.4em;
  width: 100%;
  word-wrap: break-word;
`;

const CardSubtitle = styled.span`
  font-size: 12px;
  color: #888;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

const ExploreButton = styled(Button)`
  width: 100%;
  margin-bottom: 10px;
  background-color: #333;
  border: none;
  text-align: left;
  color: #fa586a;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover,
  &:focus,
  &:active {
    background-color: #333;
    color: #fa586a;
    box-shadow: none;
    outline: none;
  }
  &::after {
    content: ">";
    color: #fa586a;
  }
`;

const Main = () => {
  const [newReleases, setNewReleases] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchNewReleases = async () => {
      try {
        const response = await axios.get(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=new%20releases"
        );
        setNewReleases(response.data.data.slice(0, 10));
      } catch (error) {
        console.error("Errore nel recupero delle nuove uscite:", error);
      }
    };

    fetchNewReleases();
  }, []);

  const displayedReleases = newReleases.slice(0, 10);
  const carouselImages = [image1, image2, image3];
  const radioEpisodes = [
    { image: image2a, title: "Episodio 1" },
    { image: image2b, title: "Episodio 2" },
    { image: image2c, title: "Episodio 3" },
    { image: image2a, title: "Episodio 4" },
    { image: image2b, title: "Episodio 5" },
  ];

  return (
    <StyledContainer fluid>
      <h1 className="px-3">Novità</h1>
      <Separator />

      <CarouselContainer className="px-3">
        {carouselImages.map((image, index) => (
          <Card key={index} width="200px">
            <CardSubtitle>NUOVA STAZIONE RADIO</CardSubtitle>
            <CardTitle>
              Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
            </CardTitle>
            <CardImage src={image} height="150px" />
          </Card>
        ))}
      </CarouselContainer>

      <SectionTitle className="px-3 py-3">
        Nuovi episodi radio
        <span>&gt;</span>
      </SectionTitle>
      <Row className="px-3">
        {radioEpisodes.map((episode, index) => (
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={2}
            xl={2}
            key={index}
            className={index >= 3 ? "d-none d-lg-block" : ""}
          >
            <Card>
              <SquareCardImage src={episode.image} alt={episode.title} />
              <CardTitle>{episode.title}</CardTitle>
            </Card>
          </Col>
        ))}
      </Row>

      <SectionTitle className="px-3 py-3">
        Nuove uscite
        <span>&gt;</span>
      </SectionTitle>
      <Row className="px-3">
        {displayedReleases.map((release, index) => (
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={12 / 5}
            xl={12 / 5}
            key={release.id}
            className={`mb-3 ${index >= 6 ? "d-none d-lg-block" : ""}`}
          >
            <Card>
              <SquareCardImage
                src={release.album.cover_medium}
                alt={release.title}
              />
              <CardTitle title={release.title}>{release.title}</CardTitle>
              <CardSubtitle title={release.artist.name}>
                {release.artist.name}
              </CardSubtitle>
            </Card>
          </Col>
        ))}
      </Row>

      <SectionTitle className="px-3 py-3">Altro da esplorare</SectionTitle>
      <div className="explore-buttons-container px-3 py-2">
        {[
          "Esplora per genere",
          "Decenni",
          "Attività e stati d'animo",
          "Worldwide",
          "Classifiche",
          "Audio spaziale",
          "Video musicali",
          "Nuovi artisti",
          "Hit del passato",
        ].map((item, index) => (
          <ExploreButton key={index} variant="secondary">
            {item}
          </ExploreButton>
        ))}
      </div>
      <MobilePlayer songImage={newReleases[0]?.album.cover_small} />
    </StyledContainer>
  );
};

export default Main;
