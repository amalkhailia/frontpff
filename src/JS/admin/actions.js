import axios from "axios";
import {
  LOAD_OFFRE,
  LOAD_CANDIDAT,
  LOAD_RECRUTEUR,
  FAIL_OFFRE,
  FAIL_CANDIDAT,
  FAIL_RECRUTEUR,
  GET_OFFRES,
  GET_CANDIDATS,
  GET_RECRUTEURS,
} from "./actionTypes";

//liste offres
export const getListAds = () => async (dispatch) => {
  dispatch({ type: LOAD_OFFRE });
  try {
    const result = await axios.get("/api/offre/");

    dispatch({ type: GET_OFFRES, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_OFFRE, payload: error.response.data.errors });
  }
};
//list candidats
export const getListCand = () => async (dispatch) => {
  dispatch({ type: LOAD_CANDIDAT });
  try {
    const result = await axios.get("/api/user/");

    dispatch({ type: GET_CANDIDATS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_CANDIDAT, payload: error.response.data.errors });
  }
};
//liste recruteur
export const getListRec = () => async (dispatch) => {
  dispatch({ type: LOAD_RECRUTEUR });
  try {
    const result = await axios.get("/api/recruteur/");

    dispatch({ type: GET_RECRUTEURS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_RECRUTEUR, payload: error.response.data.errors });
  }
};

// delete user
export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/user/${id}`);
    dispatch(getListCand());
  } catch (error) {
    console.log(error);
  }
};
// delete recruteur
export const deleteRec = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/recruteur/${id}`);
    dispatch(getListRec());
  } catch (error) {
    console.log(error);
  }
};
// delete offre
export const deleteOffre = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/offre/${id}`);
    dispatch(getListAds());
  } catch (error) {
    console.log(error);
  }
};
