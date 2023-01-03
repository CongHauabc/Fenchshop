import axios from "axios";
import { NEWS_DETAILS_FAIL, NEWS_DETAILS_REQUEST, NEWS_DETAILS_SUCCESS, NEWS_SHOW_FAIL, NEWS_SHOW_REQUEST, NEWS_SHOW_SUCCESS } from "../Constants/newConstant";
import { URL } from './../Url';


// show logo
export const showNews = () => async (dispatch) => {
    try {
      dispatch({ type: NEWS_SHOW_REQUEST });
  
      const { data } = await axios.get(`${URL}/api/news/`);
      dispatch({ type: NEWS_SHOW_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: NEWS_SHOW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  // SINGLE PRODUCT
export const listNewsDetails = (id)=> async(dispatch)=>{
  try {
      dispatch({type:NEWS_DETAILS_REQUEST})
      const {data} = await axios.get(`${URL}/api/news/${id}`)
      dispatch({type:NEWS_DETAILS_SUCCESS,payload:data})
  } catch (error) {
      dispatch({
          type:NEWS_DETAILS_FAIL,
          payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      })
  }
}