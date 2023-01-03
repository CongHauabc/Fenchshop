import {
  BANNER_SHOW_FAIL,
  BANNER_SHOW_REQUEST,
  BANNER_SHOW_SUCCESS,
} from "../Constants/bannerConstant";

// ALL PRODUCT
export const bannerShowReducer = (state = { banner: [] }, action) => {
  switch (action.type) {
    case BANNER_SHOW_REQUEST:
      return { loading: true, banner: [] };
    case BANNER_SHOW_SUCCESS:
      return { loading: false, banner: action.payload };
    case BANNER_SHOW_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
