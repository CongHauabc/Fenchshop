import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Pagination } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { showNews } from "./../Redux/Actions/newAction";
import Loading from "../components/LoadingError/Loading";
import Message from "../components/LoadingError/Error";
import { Link } from "react-router-dom";
const Blog = () => {
  const dispatch = useDispatch();

  const newShow = useSelector((state) => state.newShow);
  const { loading, error, news } = newShow;
  useEffect((e) => {
    dispatch(showNews());
  }, []);
  return (
    <div style={{ width: "75%", marginLeft: "12%" }}>
    <h1>News</h1>
      
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        style={{padding:"10px 0 54px 0"}}
      >
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            {news.map((ne) => (
              
              <SwiperSlide>
              <Link to={`/new/${ne._id}`}>
              <div>
                  <img src={ne.image} style={{ width: "100%" }} />
                  <div>
                    <h4>{ne.name}</h4>
                    <p>{ne.createdAt}</p>
                  </div>
                </div>
              </Link>
                
              </SwiperSlide>
              
              
            ))}
          </>
        )}
      </Swiper>
      
    </div>
  );
};

export default Blog;
