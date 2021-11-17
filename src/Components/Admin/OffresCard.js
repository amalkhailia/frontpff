import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteOffre } from "../../JS/admin/actions";

const OffresCard = ({ offre }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Card className="Offre">
        <Card.Body>
          <Card.Title>{offre.titre}</Card.Title>
          <Card.Text>{offre.description}</Card.Text>
          <Card.Text>{offre.nom_entreprise}</Card.Text>
          <Card.Text>{offre.adresse}</Card.Text>
          <Card.Text>{offre.poste}</Card.Text>
          <Card.Text>{offre.domaine}</Card.Text>

          <Button
            variant="primary"
            style={{
              padding: "1%",
              fontSize: "1rem",
              margin: "1%",
            }}
            onClick={() => dispatch(deleteOffre(offre._id))}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OffresCard;
