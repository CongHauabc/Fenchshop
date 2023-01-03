import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productCreateReviewReducer, productDetailsReducer, productListallReducer, productListReducer } from "./Reducers/ProductReducers";
import { cartReducer } from "./Reducers/CartReducers";
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from './Reducers/userReducers';
import { orderCreateReducer, orderDeleteReducer, orderDetailsReducer, orderListMyReducer, orderPayReducer } from "./Reducers/orderReduces";
import { categoryListReducer } from "./Reducers/categoryReduces";
import { logoShowReducer } from "./Reducers/logoReduces";
import { bannerShowReducer } from "./Reducers/bannerReduces";
import { newsDetailsReducer, newsShowReducer } from "./Reducers/newsReduces";


const reducer = combineReducers({
    productList : productListReducer,

    
    productDetails:productDetailsReducer,
    productReviewCreate:productCreateReviewReducer,
    cart:cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer,
    orderListMy:orderListMyReducer,
    orderDelete:orderDeleteReducer,
    categoryList:categoryListReducer,
    logoShow:logoShowReducer,
    bannerShow:bannerShowReducer,
    newShow:newsShowReducer,
    newDetail:newsDetailsReducer
    


})

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems")):[]

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo")):null

// shipping address
const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
? JSON.parse(localStorage.getItem("shippingAddress")):{}


const initialState = {
    cart:{
        cartItems: cartItemsFromLocalStorage,
        shippingAddress: shippingAddressFromLocalStorage
    },
    userLogin:{
        userInfo:userInfoFromLocalStorage
    }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store