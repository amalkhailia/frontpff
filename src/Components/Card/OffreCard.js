import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteOffre } from "../../JS/actions/offre";
import { getOne } from "../../JS/actions/offre";

import "./OffreCard.css";
import { Link } from "react-router-dom";

const OffreCard = ({ offre }) => {
  /*const isAuth = useSelector((state) => state.userReducer.isAuth);*/
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
          <Card.Text>{offre.email}</Card.Text>

          <Link to="/editoffres">
            <Button
              variant="primary"
              style={{
                padding: "1%",
                fontSize: "1rem",
                margin: "1%",
              }}
              onClick={() => dispatch(getOne(offre._id))}
            >
              Edit
            </Button>
          </Link>
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

export default OffreCard;
