import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import RecruteurCard from "../../Components/Admin/RecruteurCard";
import { getListRec } from "../../JS/admin/actions";

const RecruteurList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListRec());
  }, []);

  const recruteurListe = useSelector(
    (state) => state.recListReducer.recruteurListe
  );

  return (
    <div>
      <div>
        <center>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              margin: "2%",
              height: "100%",
            }}
          >
            <Link to="/listcand">
              <Button
                style={{ margin: "3%", width: "30%", fontSize: "1.2rem" }}
              >
                Gérer la liste des candidats
              </Button>
            </Link>
            <Link to="/ad">
              <Button
                style={{ margin: "3%", width: "30%", fontSize: "1.2rem" }}
              >
                Gérer la liste des offres
              </Button>
            </Link>
          </div>
        </center>
      </div>
      <center>
        <h1 style={{ marginTop: "3%" }}> liste des Recruteurs </h1>
      </center>
      <div className="OffreList">
        {recruteurListe.map((recruteur) => (
          <RecruteurCard recruteur={recruteur} key={recruteur.id} />
        ))}
      </div>
    </div>
  );
};

export default RecruteurList;
