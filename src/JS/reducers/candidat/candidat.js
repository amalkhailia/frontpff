import {
  CURRENT_CAND,
  FAIL_CAND,
  LOAD_CAND,
  LOGIN_CAND,
  LOGOUT_CAND,
  REGISTER_CAND,
} from "../../actionTypes/candidat";

const initialState = {
  user: null,
  isAuth: false,
  loadCand: false,
  errors: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CAND:
      return { ...state, loadCand: true };
    case REGISTER_CAND:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadCand: false,
        user: payload.user,
        isAuth: true,
        errors: [],
      };
    case LOGIN_CAND:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadCand: false,
        user: payload.user,
        isAuth: true,
        errors: [],
      };
    case CURRENT_CAND:
      return {
        ...state,
        loadCand: false,
        user: payload,
        isAuth: true,
        errors: [],
      };
    case FAIL_CAND:
      return { ...state, loadCand: false, errors: payload };
    case LOGOUT_CAND:
      localStorage.removeItem("token");
      return {
        ...state,
        loadCand: false,
        errors: [],
        user: null,
        isAuth: false,
      };

    default:
      return state;
  }
};
export default userReducer;
