import axios from "axios";
import {
  FAIL_REC,
  LOG_OUT_REC,
  SIGNIN_REC,
  SIGNUP_REC,
  LOAD_REC,
  CURRENT_REC,
} from "../actionTypes/recruteur";

export const signuprec = (newRecruteur, history) => async (dispatch) => {
  dispatch({ type: LOAD_REC });
  try {
    let result = await axios.post("/api/recruteur/signuprec", newRecruteur);
    dispatch({ type: SIGNUP_REC, payload: result.data });
    history.push("/profilent");
  } catch (error) {
    dispatch({ type: FAIL_REC, payload: error.response.data.errors });
  }
};
export const signinrec = (recruteur, history) => async (dispatch) => {
  dispatch({ type: LOAD_REC });
  try {
    let result = await axios.post("/api/recruteur/signinrec", recruteur);
    dispatch({ type: SIGNIN_REC, payload: result.data });
    history.push("/profilent");
  } catch (error) {
    dispatch({
      type: FAIL_REC,
      payload: error.response.data.errors,
    });
  }
};

export const currentRecruteur = () => async (dispatch) => {
  try {
    const options = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const result = await axios.get("/api/recruteur/currentRecruteur", options);
    dispatch({ type: CURRENT_REC, payload: result.data });
    console.log(result);
  } catch (error) {
    dispatch({ type: FAIL_REC, payload: error.response.data });
  }
};
export const logoutrec = () => {
  return { type: LOG_OUT_REC };
};

export const videErrors = () => {
  return {
    type: "VIDE_ERRORS",
  };
};
