import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PlaylistCard from "./PlaylistCard";

const Main = () => {
  const playlists = [
    {
      id: 1,
      title: "Playlist 1",
      image: "https://via.placeholder.com/150?text=Playlist+1",
    },
    {
      id: 2,
      title: "Playlist 2",
      image: "https://via.placeholder.com/150?text=Playlist+2",
    },
    {
      id: 3,
      title: "Playlist 3",
      image: "https://via.placeholder.com/150?text=Playlist+3",
    },
    {
      id: 4,
      title: "Playlist 4",
      image: "https://via.placeholder.com/150?text=Playlist+4",
    },
  ];

  return (
    <Container fluid className="mt-5 pt-5">
      <h1 className="text-center my-4">Welcome to Apple Music</h1>

      <h2 className="text-center">Playlists</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {playlists.map((playlist) => (
          <Col key={playlist.id}>
            <PlaylistCard title={playlist.title} image={playlist.image} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Main;
