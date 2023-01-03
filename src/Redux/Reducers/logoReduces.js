import { LOGO_SHOW_FAIL, LOGO_SHOW_REQUEST, LOGO_SHOW_SUCCESS } from "../Constants/logoCanstant";


// ALL PRODUCT
export const logoShowReducer = (state = {logo:[]}, action) => {
    switch (action.type) {
      case LOGO_SHOW_REQUEST:
        return { loading: true ,logo:[]};
      case LOGO_SHOW_SUCCESS:
        return { loading: false, logo: action.payload };
      case LOGO_SHOW_FAIL:
        return { loading: false, error: action.payload };
     
      default:
        return state;
    }
  };