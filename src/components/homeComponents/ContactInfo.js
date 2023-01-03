import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container" style={{position:"relative",zIndex:1000}}>
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
        
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Call Us 24x7</h5>
            <p><a href="tel:+84856509084">0856509084</a></p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
            <a href="https://goo.gl/maps/6mzXjDSAh53Gjq1v5" target="_blank">

              <i className="fas fa-map-marker-alt"></i>
            </a>
            </div>
            <h5>Việt Nam</h5>
            <p>TP.Hồ Chí Minh</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-fax"></i>
            </div>
            <h5>Email</h5>
            <p><a href="mailto:nchaushop@gmail.com">nchaushop@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
