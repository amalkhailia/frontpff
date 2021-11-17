// importation

import {
  CURRENT_REC,
  FAIL_REC,
  LOAD_REC,
  LOG_OUT_REC,
  SIGNIN_REC,
  SIGNUP_REC,
} from "../../actionTypes/recruteur";

//initial state
const initialState = {
  recruteur: null,
  loadRec: false,
  errors: [],
  isAuth: false,
};

//pure function

const recReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_REC:
      return { ...state, loadRec: true };
    case SIGNUP_REC:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        recruteur: payload.recruteur,
        isAuth: true,
        loadRec: false,
      };
    case SIGNIN_REC:
      localStorage.setItem("token", payload.token);

      return {
        ...state,
        loadRec: false,
        recruteur: payload.recruteur,
        isAuth: true,
        errors: [],
      };
    case CURRENT_REC:
      return {
        ...state,
        loadRec: false,
        recruteur: payload.recruteur,
        isAuth: true,
        errors: [],
      };
    case FAIL_REC:
      return { ...state, loadRec: false, errors: payload };
    case LOG_OUT_REC:
      localStorage.removeItem("token");
      return {
        ...state,
        loadRec: false,
        errors: [],
        recruteur: null,
        isAuth: false,
      };
    case "VIDE_ERRORS":
      return { ...state, errors: [] };
    default:
      return state;
  }
};

//export

export default recReducer;
