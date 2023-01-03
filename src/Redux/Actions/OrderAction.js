import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST,  ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_RESET, ORDER_DETAILS_SUCCESS, ORDER_DETELE_FAIL, ORDER_DETELE_REQUEST, ORDER_DETELE_SUCCESS, ORDER_LIST_MY_FAIL, ORDER_LIST_MY_REQUEST, ORDER_LIST_MY_RESET, ORDER_LIST_MY_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS } from "../Constants/orderContant";
import axios  from 'axios';
import { CART_CLEAR_ITEMS } from "../Constants/CartConstant";
import { logout } from "./userAction";
import { URL } from './../Url';



// create order
export const createOrder = (order)=> async(dispatch,getState)=>{
    try {
        dispatch({type:ORDER_CREATE_REQUEST});
        const {userLogin: { userInfo },} = getState();
        const config = {
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(`${URL}/api/orders`,order,config)
        dispatch({type:ORDER_CREATE_SUCCESS,payload:data})
        dispatch({type:CART_CLEAR_ITEMS,payload:data})
        


        localStorage.removeItem('cartItems')

    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if(message === "Not authorized,token fail"){
            dispatch(logout())
        }
        dispatch({
            type:ORDER_CREATE_FAIL,
            payload: message,
        })
    }
}


// order detail
export const getOrderDetails = (id)=> async(dispatch,getState)=>{
    try {
        dispatch({type:ORDER_DETAILS_REQUEST});
        const {userLogin: { userInfo },} = getState();
        const config = {
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        
        const {data} = await axios.get(`${URL}/api/orders/${id}`,config)
        dispatch({type:ORDER_DETAILS_SUCCESS,payload:data})

    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if(message === "Not authorized,token fail"){
            dispatch(logout())
        }
        dispatch({
            type:ORDER_DETAILS_FAIL,
            payload: message,
        })
    }
}


//  order pay
export const payOrder = (orderId,paymentResult)=> async(dispatch,getState)=>{
    try {
        dispatch({type:ORDER_PAY_REQUEST});
        const {userLogin: { userInfo },} = getState();
        const config = {
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(`${URL}/api/orders/${orderId}/pay`,paymentResult,config)
        dispatch({type:ORDER_PAY_SUCCESS,payload:data})
        


    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if(message === "Not authorized,token fail"){
            dispatch(logout())
        }
        dispatch({
            type:ORDER_PAY_FAIL,
            payload: message,
        })
    }
}


//  user order
export const listMyOrder = ()=> async(dispatch,getState)=>{
    try {
        dispatch({type:ORDER_LIST_MY_REQUEST});
        const {userLogin: { userInfo },} = getState();
        const config = {
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get( `${URL}/api/orders/`,config)
        dispatch({type:ORDER_LIST_MY_SUCCESS,payload:data})

    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if(message === "Not authorized,token fail"){
            dispatch(logout())
        }
        dispatch({
            type:ORDER_LIST_MY_FAIL,
            payload: message,
        })
    }
}

// delete product
export const deleteorder = (id) => async (dispatch, getState) => {
    try {
      dispatch({ type: ORDER_DETELE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
    await axios.delete(`${URL}/api/orders/${id}`, config);
      dispatch({ type: ORDER_DETELE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized,token fail") {
        dispatch(logout());
      }
  
      dispatch({
        type: ORDER_DETELE_FAIL,
        payload: message,
      });
    }
  };
