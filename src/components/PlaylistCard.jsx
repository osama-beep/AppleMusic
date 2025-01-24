import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

const PlaylistCard = ({ title, image }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary" className="w-100">
          Play Now
        </Button>
      </Card.Body>
    </Card>
  );
};

PlaylistCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default PlaylistCard;
