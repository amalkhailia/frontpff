import axios from "axios";
import { FAIL_OFFRE, GET_OFFRE, LOAD_OFFRE } from "../actionTypes/offre";
import { currentRecruteur } from "./recruteur";

export const CreerOffre = (newOffre, history) => async (dispatch) => {
  dispatch({ type: LOAD_OFFRE });
  try {
    const options = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const result = await axios.post("/api/offre/", newOffre, options);

    //dispatch({ type: CREER_OFFRE, payload: result.data });
    dispatch(currentRecruteur());
    history.push("/profilent");
  } catch (error) {
    dispatch({ type: FAIL_OFFRE, payload: error.response.data.errors });
  }
};
// get offre by id
export const getOne = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`/api/offre/${id}`);
    dispatch({ type: GET_OFFRE, payload: result.data.OffreToFind });
  } catch (error) {
    dispatch({ type: FAIL_OFFRE, payload: error.response.data.errors });
  }
};

//edit offre
export const edit = (offreId, newOffre) => async (dispatch) => {
  try {
    await axios.put(`/api/offre/${offreId}`, newOffre);
    dispatch(currentRecruteur());
  } catch (error) {
    dispatch({ type: FAIL_OFFRE, payload: error.response.data.errors });
  }
};

// delete offre
export const deleteOffre = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/offre/${id}`);
    dispatch(currentRecruteur());
  } catch (error) {
    console.log(error);
  }
};
