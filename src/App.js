import { Route, Switch } from "react-router";
import NavBar from "./Components/Navbar/NavBar";
import LandPage from "./Pages/LandPage/LandPage";
import SignUpCand from "./Pages/SignUpCand/SignUpCand";
import SignInCand from "./Pages/SignInCand/SignInCand";
import Cv from "./Pages/Cv/Cv";
import ProfileRec from "./Pages/ProfileRec/ProfileRec";
import Error from "./Pages/Error/Error";
import Footer from "./Components/Footer/Footer";
import SignUpRec from "./Pages/SignUpRec/SignUpRec";
import SignInRec from "./Pages/SignInRec/SignInRec";
import ProfileCand from "./Pages/ProfileCand/ProfileCand";
import PrivateRoute from "./routes/PrivateRoute";
import PrivateRouteUser from "./routes/PrivateRouteUser";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "./App.css";
import ListeOffre from "./Pages/ListeOffres/ListeOffre";
import Creeroffre from "./Pages/CreerOffre/Creeroffre";
import { currentUser } from "./JS/actions/candidat";
import { currentRecruteur } from "./JS/actions/recruteur";
import EditOffre from "./Pages/EditOffre/EditOffre";
import EditCv from "./Pages/EditCv/EditCv";
import AdList from "./Pages/Admin/AdList";
import CandidatsList from "./Pages/Admin/CandidatsList";
import RecruteurList from "./Pages/Admin/RecruteurList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      {
        dispatch(currentRecruteur());

        dispatch(currentUser());
      }
    }
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandPage} />
        <Route path="/signupCand" component={SignUpCand} />
        <Route path="/signinCand" component={SignInCand} />
        <PrivateRouteUser path="/cv" component={Cv} />
        <PrivateRouteUser path="/myprofile" component={ProfileCand} />
        <Route path="/signuprec" component={SignUpRec} />
        <PrivateRoute path="/offres" component={Creeroffre} />
        <PrivateRoute path="/editoffres" component={EditOffre} />
        <PrivateRouteUser path="/editcv" component={EditCv} />

        <Route path="/Signinrec" component={SignInRec} />
        <PrivateRoute path="/profilent" component={ProfileRec} />
        <Route path="/listeoffres" component={ListeOffre} />
        <Route path="/ad" component={AdList} />
        <Route path="/listcand" component={CandidatsList} />
        <Route path="/listrec" component={RecruteurList} />

        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
