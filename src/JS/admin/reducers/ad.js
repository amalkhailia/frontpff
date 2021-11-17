import { FAIL_OFFRE, GET_OFFRES, LOAD_OFFRE } from "../actionTypes";
const initialState = {
  offreListe: [],
  loadOffre: false,
  errors: [],
};

const adReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_OFFRE:
      return { ...state, loadOffre: true };
    case GET_OFFRES:
      return {
        ...state,
        loadOffre: false,
        offreListe: payload.listOffres,
        errors: [],
      };

    case FAIL_OFFRE:
      return { ...state, loadOffre: false, errors: payload };

    case "VIDE_ERRORS":
      return { ...state, errors: [] };
    default:
      return state;
  }
};
export default adReducer;
