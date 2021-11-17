import { CREER_CV, FAIL_CV, GET_CV, LOAD_CV } from "../../actionTypes/Cv";

const initialState = {
  cv: null,
  loadCv: false,
  errors: [],
  isAuth: false,
  OneCv: {},
};

const cvReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CV:
      return { ...state, loadCand: true };
    case CREER_CV:
      return {
        ...state,
        loadCv: false,
        cv: payload.cv,
        errors: [],
        isAuth: true,
      };
    case GET_CV:
      return {
        ...state,
        OneCv: payload,
      };

    case FAIL_CV:
      return { ...state, loadCv: false, errors: payload };

    case "VIDE_ERRORS":
      return { ...state, errors: [] };
    default:
      return state;
  }
};
export default cvReducer;
