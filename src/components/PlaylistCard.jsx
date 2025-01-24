import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Card = styled.div`
  background-color: #282828;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const Title = styled.h3`
  color: white;
  margin-top: 12px;
`;

const Description = styled.p`
  color: #b3b3b3;
`;

const PlaylistCard = ({ imageUrl, title, description, className }) => {
  return (
    <Card className={className}>
      <Image src={imageUrl} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

PlaylistCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default PlaylistCard;
