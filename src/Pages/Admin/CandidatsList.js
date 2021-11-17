import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import CandidatsCard from "../../Components/Admin/CandidatsCard";
import { getListCand } from "../../JS/admin/actions";

//import "./OffreList.css";

const CandidatsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListCand());
  }, []);

  const candListe = useSelector((state) => state.candListReducer.candListe);

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
            <Link to="/listrec">
              <Button
                style={{ margin: "3%", width: "30%", fontSize: "1.2rem" }}
              >
                Gérer la liste des recruteurs
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
        <h1 style={{ marginTop: "3%" }}> liste des Candidats </h1>
      </center>
      <div className="OffreList">
        {candListe.map((candidat) => (
          <CandidatsCard candidat={candidat} key={candidat.id} />
        ))}
      </div>
    </div>
  );
};

export default CandidatsList;
