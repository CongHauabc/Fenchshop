import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_RESET, ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_RESET, ORDER_DETAILS_SUCCESS, ORDER_DETELE_FAIL, ORDER_DETELE_REQUEST, ORDER_DETELE_SUCCESS, ORDER_LIST_MY_FAIL, ORDER_LIST_MY_REQUEST, ORDER_LIST_MY_RESET, ORDER_LIST_MY_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_RESET, ORDER_PAY_SUCCESS } from "../Constants/orderContant";




// CREATE ORDER
export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case ORDER_CREATE_REQUEST:
        return { loading: true };
      case ORDER_CREATE_SUCCESS:
        return { loading: false, success:true,order: action.payload };
      case ORDER_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case ORDER_CREATE_RESET:
        return { }
      default:
        return state;
    }
  };

  
// ORDER DETAILS
export const orderDetailsReducer = (state = {loading:true,orderItem:[],shippingAddress:{}}, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST: 
      return { ...state,loading: true };
    case ORDER_DETAILS_SUCCESS:
      return { ...state,loading: false,order: action.payload };
    case ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
      case ORDER_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};

// ORDER Pay
export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST: 
      return { loading: true };
    case ORDER_PAY_SUCCESS:
      return { loading: false,success:true };
    case ORDER_PAY_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_PAY_RESET:
      return { };
    default:
      return state;
  }
};


// USER ORDER
export const orderListMyReducer = (state = {orders:[]}, action) => {
  switch (action.type) {
    case ORDER_LIST_MY_REQUEST: 
      return { loading: true };
    case ORDER_LIST_MY_SUCCESS:
      return { loading: false,orders:  action.payload };
    case ORDER_LIST_MY_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_LIST_MY_RESET:
      return {order:[]};
    default:
      return state;
  }
};

  // DELETE banner
  export const orderDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case ORDER_DETELE_REQUEST:
        return { loading: true};
      case ORDER_DETELE_SUCCESS:
        return { loading: false, success:true};
      case ORDER_DETELE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };