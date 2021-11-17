import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteRec } from "../../JS/admin/actions";
const RecruteurCard = ({ recruteur }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Card className="Offre">
        <Card.Body>
          <Card.Text>{recruteur.firstName}</Card.Text>
          <Card.Text>{recruteur.lastName}</Card.Text>
          <Card.Text>{recruteur.matricule}</Card.Text>
          <Card.Text>{recruteur.email}</Card.Text>
          <Button
            variant="primary"
            style={{
              padding: "1%",
              fontSize: "1rem",
              margin: "1%",
            }}
            onClick={() => dispatch(deleteRec(recruteur._id))}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecruteurCard;
