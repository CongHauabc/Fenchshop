import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
import Footers from "./Footer";
import Contact from "./Contact";
import Blog from './Blog';
const HomeScreen = ({match}) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword
  const pagenumber = match.params.pagenumber

  return (
    <div>
    <div class="pyro"><div class="before"></div><div class="after"></div></div>
      <Header />
      <ShopSection keyword={keyword} pagenumber={pagenumber} />
      <CalltoActionSection />
      <ContactInfo />
      <Contact/>
      <Blog/>
      <Footers/>
      {/* <Footer /> */}
      <img src="https://res.cloudinary.com/dfwzqp6wt/image/upload/v1672512676/NCHShop/Logo/mua-lan_yxbmrc.png" style={{position:"fixed",zIndex:"10",width:"11%",top:"25%"}} />
      <img src="https://res.cloudinary.com/dfwzqp6wt/image/upload/v1672514488/NCHShop/Logo/bg-banh-chung_oqpnfn.png" style={{position:"fixed",zIndex:"10",width:"11%",top:"27%",right:"0"}} />

    </div>
  );
};

export default HomeScreen;
