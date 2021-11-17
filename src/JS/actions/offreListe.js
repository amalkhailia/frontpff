import axios from "axios";
import { FAIL_OFFRE, LOAD_OFFRE, GET_OFFRES } from "../actionTypes/offreListe";

export const getOffres = () => async (dispatch) => {
  dispatch({ type: LOAD_OFFRE });
  try {
    const result = await axios.get("/api/offre/");

    dispatch({ type: GET_OFFRES, payload: result.data });
    // history.push("/listeoffres");
  } catch (error) {
    dispatch({ type: FAIL_OFFRE, payload: error.response.data.errors });
  }
};
