import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { listProduct } from "./../../Redux/Actions/ProductAction";

import img4 from "../../img/carosel4.jpg";
import img5 from "../../img/carosel5.jpg";
import img6 from "../../img/carosel6.jpg";


import { bannerLogo } from "../../Redux/Actions/bannerAction";

const ShopSection = (props) => {
  const { keyword, pagenumber } = props;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const bannerShow = useSelector((state) => state.bannerShow);
  const { loading: loadingbanner, error: errorbanner, banner } = bannerShow;

  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);
  useEffect(() => {
    dispatch(bannerLogo());
  }, []);
  console.log(banner);
  return (
    <>
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", padding: "0 14% 1% 14%", gap: "2%" }}>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            style={{ width: "66%" }}
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {loadingbanner ? (
                <Loading />
              ) : errorbanner ? (
                <Message variant="alert-danger">{error}</Message>
              ) : (
                <>
                  {banner.map((b, i) => (
                    <div
                      className={
                        i == 0 ? "carousel-item active" : "carousel-item"
                      }
                    >
                      <img
                        style={{ borderRadius: 12 }}
                        src={b.image}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  ))}
                </>
              )}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              style={{ padding: "0 20%" }}
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              style={{ padding: "0 20%" }}
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div
            style={{
              width: "35%",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div>
              <img
                style={{ borderRadius: 12, maxWidth: "100%" }}
                src={img4}
                alt="..."
              />
            </div>
            <div>
              <img
                style={{ borderRadius: 12, maxWidth: "100%" }}
                src={img5}
                alt="..."
              />
            </div>
            <div>
              <img
                style={{ borderRadius: 12, maxWidth: "100%" }}
                src={img6}
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                <h1 style={{ textAlign: "center" }}>Product</h1>
                {loading ? (
                  <div className="mb-5">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    {products.map((product) => (
                      <div
                        className="shop col-lg-4 col-md-6 col-sm-6"
                        key={product._id}
                      >
                        <div className="border-product">
                          <Link to={`/products/${product._id}`}>
                            <div className="shopBack">
                              <img src={product.image} alt={product.name} />
                            </div>
                          </Link>

                          <div className="shoptext">
                            <p>
                              <Link to={`/products/${product._id}`}>
                                {product.name}
                              </Link>
                            </p>

                            <Rating
                              value={product.rating}
                              text={`${product.numReviews} reviews`}
                            />
                            <h3>${product.price}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}

                {/* Pagination */}
                <Pagination
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
