import { FAIL_CANDIDAT, GET_CANDIDATS, LOAD_CANDIDAT } from "../actionTypes";
const initialState = {
  candListe: [],
  loadC: false,
  errors: [],
};

const candListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CANDIDAT:
      return { ...state, loadC: true };
    case GET_CANDIDATS:
      return {
        ...state,
        loadC: false,
        candListe: payload.listUsers,
        errors: [],
      };

    case FAIL_CANDIDAT:
      return { ...state, loadC: false, errors: payload };

    case "VIDE_ERRORS":
      return { ...state, errors: [] };
    default:
      return state;
  }
};
export default candListReducer;
