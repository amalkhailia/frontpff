import {
  FAIL_CANDIDAT,
  GET_CANDIDATS,
  GET_RECRUTEURS,
  LOAD_CANDIDAT,
  LOAD_RECRUTEUR,
} from "../actionTypes";
const initialState = {
  recruteurListe: [],
  loadR: false,
  errors: [],
};

const recListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_RECRUTEUR:
      return { ...state, loadR: true };
    case GET_RECRUTEURS:
      return {
        ...state,
        loadR: false,
        recruteurListe: payload.listRec,
        errors: [],
      };

    case FAIL_CANDIDAT:
      return { ...state, loadR: false, errors: payload };

    case "VIDE_ERRORS":
      return { ...state, errors: [] };
    default:
      return state;
  }
};
export default recListReducer;
