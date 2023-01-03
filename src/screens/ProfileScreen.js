import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Header from "../components/Header";
import ProfileTabs from "../components/profileComponents/ProfileTabs";
import Orders from "./../components/profileComponents/Orders";
import { getUserDetails } from "../Redux/Actions/userAction";
import moment from "moment"
import { deleteorder, listMyOrder } from "../Redux/Actions/OrderAction";
import Loading from "../components/LoadingError/Loading";
import Message from "../components/LoadingError/Error";
import { Link } from 'react-router-dom';
const ProfileScreen = () => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch()
  const userLogin = useSelector((state)=>state.userLogin)
  const {userInfo} = userLogin

  const orderListMy = useSelector((state)=>state.orderListMy)
  const {loading,error,orders} = orderListMy
  const orderDelete = useSelector((state)=>state.orderDelete)
  const {error:errorDelete,success:successDelete} = orderDelete

  useEffect(()=>{
    dispatch(listMyOrder())
    dispatch(getUserDetails("profile"))

  },[dispatch])
  const deletehandler = (id)=>{
    if(window.confirm("Are you sure ??")){
      dispatch(deleteorder(id))
      window.location.reload()
    }
    
  }
  return (
    <>
      <Header />
      <div className="container mt-lg-5 mt-3">
        <div className="row align-items-start">
          <div className="col-lg-4 p-0 shadow ">
            <div className="author-card pb-0 pb-md-3">
              <div className="author-card-cover"></div>
              <div className="author-card-profile row">
                <div className="author-card-avatar col-md-5">
                  <img src="./images/user.png" alt="userprofileimage" />
                </div>
                <div className="author-card-details col-md-7">
                  <h5 className="author-card-name mb-2">
                    <strong>{userInfo.name}</strong>
                  </h5>
                  <span className="author-card-position">
                    <>Joined: {moment(userInfo.createdAt).format('LL')}</>
                  </span>
                </div>
              </div>
            </div>
            <div className="wizard pt-3 ">
              <div class="d-flex align-items-start">
                <div
                  class="nav align-items-start flex-column col-12 nav-pills me-3 "
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    class="nav-link active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Profile Settings
                  </button>
                  <button
                    class="nav-link d-flex justify-content-between"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    Orders List
                    <span className="badge2">{orders ? orders.length : 0}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* panels */}
          <div
            class="tab-content col-lg-8 pb-5 pt-lg-0 pt-3"
            id="v-pills-tabContent"
          >
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <ProfileTabs />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              {/* <Orders orders= {orders} loading={loading} error={error} /> */}

              <div className=" d-flex justify-content-center align-items-center flex-column">
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <>
          {orders.length === 0 ? (
            <div className="col-12 alert alert-info text-center mt-3">
              No Orders
              <Link
                className="btn btn-success mx-2 px-3 py-2"
                to="/"
                style={{
                  fontSize: "12px",
                }}
              >
                START SHOPPING
              </Link>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>STATUS</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {errorDelete && (
            <Message variant="alert-danger">{errorDelete}</Message>
          )}
                  {orders.map((order,index) => (
                    <tr
                      className={`${
                        order.isPaid ? "alert-success" : "alert-danger"
                      }`}
                      key={order._id}
                    >
                      <td>
                        <a href={`/order/${order._id}`} className="link">
                          {index + 1}
                        </a>
                      </td>
                      <td>{order.isPaid ? <>Paid</> : <>Not Paid</>}</td>
                      <td>
                        {order.isPaid
                          ? moment(order.paidAt).calendar()
                          : moment(order.createdAt).calendar()}
                      </td>
                      <td>${order.totalPrice}</td>
                      <td>
                     <button onClick={()=>deletehandler(order._id)} >cancel</button>
                      </td>
                    </tr>
                    
                  ))}
                </tbody>
              </table>
              
            </div>
          )}
        </>
      )}
    </div>



            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;
