import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../JS/actions/candidat";
import { CreerOffre } from "../../JS/actions/offre";
import { logoutrec } from "../../JS/actions/recruteur";
import pic3 from "../../assets/pic3.gif";

import "./Navbar.css";
const NavBar = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthR = useSelector((state) => state.recReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  const recruteur = useSelector((state) => state.recReducer.recruteur);

  const dispatch = useDispatch();
  return (
    <header>
      <Link to="/">
        <h2 className="home">KHEDMA.TN</h2>
      </Link>

      {isAuth ? (
        <div style={{ marginLeft: "60%" }}>
          <Link to="/" onClick={() => dispatch(logout())}>
            <a href="#" className="btn-area">
              Logout
            </a>
          </Link>
          <Link to="/myprofile">
            <a href="#" className="btn-area">
              {user && user.firstName} {user && user.lastName}
            </a>
          </Link>
        </div>
      ) : isAuthR ? (
        <div style={{ marginLeft: "40%" }}>
          <Link to="/offres" onClick={() => dispatch(CreerOffre())}>
            <a href="#" className="btn-area">
              Publier une annonce
            </a>
          </Link>
          <Link to="/" onClick={() => dispatch(logoutrec())}>
            <a href="#" className="btn-area">
              Logout
            </a>
          </Link>
          <img src={pic3} alt="pic3" />

          <Link to="/profilent">
            <a href="#" className="btn-area">
              {recruteur && recruteur.firstName}{" "}
              {recruteur && recruteur.lastName}
            </a>
          </Link>
        </div>
      ) : (
        <div className="btns" style={{ marginLeft: "60%" }}>
          <Link to="/signinCand">
            <a href="#" className="btn-area">
              Acces Candidat
            </a>
          </Link>

          <Link to="/Signinrec">
            <a href="#" className="btn-area">
              Acces Entreprise
            </a>
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;
