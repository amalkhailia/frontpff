import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getOffres } from "../../JS/actions/offreListe";
import { useDispatch } from "react-redux";

import Offre from "../../Components/Offre/Offre";
import "./OffreList.css";
import Loading from "../../Components/Loading/Loading";

const ListeOffre = ({ inputSearch }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOffres());
  }, []);

  const offreListe = useSelector((state) => state.listReducer.offreListe);
  const loadOffre = useSelector((state) => state.listReducer.loadOffre);

  return (
    <div>
      {loadOffre ? (
        <center>
          <Loading />
        </center>
      ) : (
        <div className="OffreList">
          {offreListe
            .filter((offre) =>
              offre.domaine.toLowerCase().includes(inputSearch.toLowerCase())
            )
            .map((offre) => (
              <Offre offre={offre} key={offre.id} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ListeOffre;
