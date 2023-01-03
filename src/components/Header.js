import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../Redux/Actions/userAction";
import { AiOutlineMail } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { listCategory } from "../Redux/Actions/categoryAction";
import { GiCaravan } from "react-icons/gi";
import { showLogo } from "../Redux/Actions/logoAction";
const Header = () => {
  const [keyword, setKeyword] = useState();
  const [keycate,setKeycate] =useState()

  let history = useHistory();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { category } = categoryList;


  const logoShow = useSelector((state) => state.logoShow);
  const { logo } = logoShow;

  useEffect((e) => {
    dispatch(showLogo());
  }, []);

  useEffect((e) => {
    dispatch(listCategory());
  }, []);

  const logoutHandle = () => {
    dispatch(logout());
  };
  const submitHandle = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  
  return (
    <div style={{position:"relative",zIndex:1000,backgroundColor:"yellow"}}>
      {/* Top Header */}
      <div className="Announcement ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>
                <AiOutlineMail /> nguyenconghau9084@gmail.com
              </p>
              <p>
                <FaShippingFast /> Free Shipping for all Order of $200
              </p>
            </div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <Link to="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-6 d-flex align-items-center">
                {/* <Link className="navbar-brand" to="/">
                {
                  logo.map((lo)=>(

                  <img alt="logo" src={lo.image} />
                  ))
                }
                </Link> */}
                </div>

                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  {userInfo ? (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>

                        <Link
                          className="dropdown-item"
                          to="#"
                          onClick={logoutHandle}
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/login">
                          Login
                        </Link>

                        <Link className="dropdown-item" to="/register">
                          Register
                        </Link>
                      </div>
                    </div>
                  )}

                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    {cartItems.length > 0 ? (
                      <span className="badge">{cartItems.length}</span>
                    ) : (
                      <></>
                    )}
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form onSubmit={submitHandle} className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                {
                  logo.map((lo)=>(

                  <img alt="logo" src={lo.image} />
                  ))
                }
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form onSubmit={submitHandle} className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button type="submit" className="search-button">
                    search
                  </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                {userInfo ? (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Hi, {userInfo.name}
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>

                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={logoutHandle}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <Link to="/login">Login</Link>

                    <Link to="/register">register</Link>
                  </>
                )}

                <Link to="/cart">
                  <i className="fas fa-shopping-bag"></i>
                  {cartItems.length > 0 ? (
                    <span className="badge">{cartItems.length}</span>
                  ) : (
                    <></>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img src="https://res.cloudinary.com/dfwzqp6wt/image/upload/v1672506737/NCHShop/Logo/hoa-mai_v23rvd.png" style={{position:"absolute",width:"10%",top:"0"}} />
        <img src="https://res.cloudinary.com/dfwzqp6wt/image/upload/v1672506737/NCHShop/Logo/phai_t5j2jn.png" style={{position:"absolute",width:"8%",top:"0",right:"0"}} />

      </div>

      {/* Categorrry */}
      <div
        className="Announcement"
        style={{
          padding: "0 0 0 0",
          marginBottom: "10px",
          backgroundColor: "rgb(255 95 95)",
        }}
      >
        <div className="container">
          <div className="row">
            <ul
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "0",
              }}
            >
              {category.map((cate) => (
                <li
                  key={cate._id}
                  style={{ listStyleType: "none", cursor: "pointer" }}
                  className="categorylist"
                >
                  <Link to={`/cate/${cate.name}`}
                    onClick={e=>setKeycate(cate.name)}
                  >
                    <GiCaravan />{cate.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
