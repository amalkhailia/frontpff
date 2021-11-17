import axios from "axios";
import { GET_CV, FAIL_CV, LOAD_CV } from "../actionTypes/Cv";
import { currentUser } from "./candidat";

export const CreerCv = (newCv, history) => async (dispatch) => {
  dispatch({ type: LOAD_CV });
  try {
    const options = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const result = await axios.post("/api/Cv/", newCv, options);

    /*dispatch({ type: CREER_CV, payload: result.data });*/
    dispatch(currentUser());
    history.push("/myprofile");
  } catch (error) {
    dispatch({ type: FAIL_CV, payload: error.response.data.errors });
  }
};

// get cv by id
export const getCv = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`/api/Cv/${id}`);
    dispatch({ type: GET_CV, payload: result.data.cvToFind });
  } catch (error) {
    console.log(error);
  }
};

//edit cv
export const editOne = (CvId, newCv) => async (dispatch) => {
  try {
    await axios.put(`/api/Cv/${CvId}`, newCv);
    dispatch(currentUser());
  } catch (error) {
    console.log(error);
  }
};
