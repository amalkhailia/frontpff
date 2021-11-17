import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../JS/admin/actions";

const CandidatsCard = ({ candidat }) => {
  const dispatch = useDispatch();
  //const role = useSelector((state) => state.userReducer.user.role);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {candidat.role === "admin" ? null : (
        <div>
          <Card className="Offre">
            <Card.Body>
              <Card.Text>{candidat.firstName}</Card.Text>
              <Card.Text>{candidat.lastName}</Card.Text>
              <Card.Text>{candidat.email}</Card.Text>
              <Button
                variant="primary"
                style={{
                  padding: "1%",
                  fontSize: "1rem",
                  margin: "1%",
                }}
                onClick={() => dispatch(deleteUser(candidat._id))}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CandidatsCard;
