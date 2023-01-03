import React, { useEffect, useState } from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
import Footers from "./Footer";
import Contact from "./Contact";
import Rating from "../components/homeComponents/Rating";
import { Link, useParams } from 'react-router-dom';
import Loading from './../components/LoadingError/Loading';
import Message from "../components/LoadingError/Error";
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from './../Redux/Actions/ProductAction';
const ProductCategory = ({match}) => {
    const params = useParams()
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  const [cap,setCap]= useState()
  useEffect(() => {
    dispatch(listProduct());
    
}, [dispatch]);
useEffect(()=>{
  const caps = products?.filter((datas,index)=>{
    return datas.category === params.id
  },[])
  setCap(caps)
},[params.id])
  return (
    <div>
      <Header />
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                <h1 style={{ textAlign: "center" }}>{params.id}</h1>
                {loading ? (
                  <div className="mb-5">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    {cap?.map((product) => (
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

                
              </div>
            </div>
          </div>
        </div>
      </div>
      <CalltoActionSection />
      <ContactInfo />
      <Contact/>
      <Footer />
      <Footers/>
    </div>
  );
};

export default ProductCategory;
