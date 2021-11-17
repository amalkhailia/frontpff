import React, { useState } from "react";
import Filter from "../Filter/Filter";
import ListeOffre from "../ListeOffres/ListeOffre";

import "./LandPage.css";
import Loading from "../../Components/Loading/Loading";

const LandPage = () => {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="land">
      <div className="home">
        <h1>Trouver facilement votre futur emploi</h1>
      </div>

      <div>
        <Filter setInputSearch={setInputSearch} />
      </div>

      <div className="liste">
        <ListeOffre inputSearch={inputSearch} />
      </div>
    </div>
  );
};

export default LandPage;
