import { BANNER_SHOW_FAIL, BANNER_SHOW_REQUEST, BANNER_SHOW_SUCCESS } from "../Constants/bannerConstant";
import axios from "axios";
import { URL } from './../Url';



// show logo
export const bannerLogo = () => async (dispatch) => {
    try {
      dispatch({ type: BANNER_SHOW_REQUEST });
  
      const { data } = await axios.get(`${URL}/api/banner/`);
      dispatch({ type: BANNER_SHOW_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: BANNER_SHOW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };