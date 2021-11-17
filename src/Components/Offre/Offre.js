import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

import "../Card/OffreCard.css";

const Offre = ({ offre }) => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthR = useSelector((state) => state.recReducer.isAuth);
  const recruteur = useSelector((state) => state.recReducer.recruteur);
  //console.log(recruteur);
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
          {isAuth ? (
            <div>
              <Button variant="primary">
                Postuler
              </Button>
            </div>
          ) : null}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Offre;
