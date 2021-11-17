import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import { useDispatch } from "react-redux";
import OffresCard from "../../Components/Admin/OffresCard";

//import "./OffreList.css";
import { getListAds } from "../../JS/admin/actions";

const AdList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListAds());
  }, []);

  const AdListe = useSelector((state) => state.adReducer.offreListe);

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
            <Link to="listcand">
              <Button
                style={{ margin: "3%", width: "30%", fontSize: "1.2rem" }}
              >
                Gérer la liste des candidats
              </Button>
            </Link>
          </div>
        </center>
      </div>

      <center>
        <h1 style={{ marginTop: "3%" }}> liste des offres </h1>
      </center>
      <div className="OffreList">
        {AdListe.map((offre) => (
          <OffresCard offre={offre} key={offre.id} />
        ))}
      </div>
    </div>
  );
};

export default AdList;
