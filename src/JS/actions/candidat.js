import axios from "axios";
import {
  CURRENT_CAND,
  FAIL_CAND,
  LOAD_CAND,
  LOGIN_CAND,
  LOGOUT_CAND,
  REGISTER_CAND,
} from "../actionTypes/candidat";

export const register = (newCandidat, history) => async (dispatch) => {
  dispatch({ type: LOAD_CAND });
  try {
    const result = await axios.post("/api/user/signupcand", newCandidat);

    dispatch({ type: REGISTER_CAND, payload: result.data }); //msg , token , user
    history.push("/cv");
  } catch (error) {
    dispatch({ type: FAIL_CAND, payload: error.response.data.errors });
  }
};

export const login = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_CAND });

  try {
    const result = await axios.post("/api/user/signincand", user);
    dispatch({ type: LOGIN_CAND, payload: result.data }); //msg /token , user
    console.log(result);
    history.push("/myprofile");
  } catch (error) {
    dispatch({ type: FAIL_CAND, payload: error.response.data.errors });
  }
};
export const currentUser = () => async (dispatch) => {
  try {
    const options = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const result = await axios.get("/api/user/currentUser", options);
    dispatch({ type: CURRENT_CAND, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_CAND, payload: error.response.data });
  }
};
export const logout = () => {
  return {
    type: LOGOUT_CAND,
  };
};
export const videErrors = () => {
  return {
    type: "VIDE_ERRORS",
  };
};
