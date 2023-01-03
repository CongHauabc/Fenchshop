import { NEWS_DETAILS_FAIL, NEWS_DETAILS_REQUEST, NEWS_DETAILS_SUCCESS, NEWS_SHOW_FAIL, NEWS_SHOW_REQUEST, NEWS_SHOW_SUCCESS } from "../Constants/newConstant";


// ALL PRODUCT
export const newsShowReducer = (state = {news:[]}, action) => {
    switch (action.type) {
      case NEWS_SHOW_REQUEST:
        return { loading: true ,news:[]};
      case NEWS_SHOW_SUCCESS:
        return { loading: false, news: action.payload };
      case NEWS_SHOW_FAIL:
        return { loading: false, error: action.payload };
     
      default:
        return state;
    }
  };


  // SINGLE PRODUCT
export const newsDetailsReducer = (
  state = { news: {} },
  action
) => {
  switch (action.type) {
    case NEWS_DETAILS_REQUEST:
      return { ...state, loading: true };
    case NEWS_DETAILS_SUCCESS:
      return { loading: false, news: action.payload };
    case NEWS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};