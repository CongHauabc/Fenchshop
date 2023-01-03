import axios from "axios";
import { LOGO_SHOW_FAIL, LOGO_SHOW_REQUEST, LOGO_SHOW_SUCCESS } from "../Constants/logoCanstant";
import { URL } from './../Url';



// show logo
export const showLogo = () => async (dispatch) => {
    try {
      dispatch({ type: LOGO_SHOW_REQUEST });
  
      const { data } = await axios.get(`${URL}/api/logo/`);
      dispatch({ type: LOGO_SHOW_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: LOGO_SHOW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };