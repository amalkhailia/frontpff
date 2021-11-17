import { combineReducers } from "redux";
import recReducer from "./recruteur/recruteur";
import userReducer from "./candidat/candidat";
import cvReducer from "./cv/cv";
import offreReducer from "./offre/offre";
import listReducer from "./offreListe/offreListe";
import recListReducer from "../admin/reducers/rec";
import candListReducer from "../admin/reducers/cand";
import adReducer from "../admin/reducers/ad";
const rootReducer = combineReducers({
  recReducer,
  userReducer,
  cvReducer,
  offreReducer,
  listReducer,
  recListReducer,
  candListReducer,
  adReducer,
});

export default rootReducer;
