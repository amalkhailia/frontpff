import {
  CREER_OFFRE,
  FAIL_OFFRE,
  GET_OFFRE,
  LOAD_OFFRE,
} from "../../actionTypes/offre";
const initialState = {
  offre: null,
  loadOffre: false,
  errors: [],
  isAuth: false,
  OneOffre: {},
};

const offreReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_OFFRE:
      return { ...state, loadOffre: true };
    case CREER_OFFRE:
      return {
        ...state,
        loadOffre: false,
        offre: payload.offre,
        errors: [],
        isAuth: true,
      };
    case GET_OFFRE:
      return {
        ...state,
        OneOffre: payload,
      };

    case FAIL_OFFRE:
      return { ...state, loadOffre: false, errors: payload };

    case "VIDE_ERRORS":
      return { ...state, errors: [] };
    default:
      return state;
  }
};
export default offreReducer;
