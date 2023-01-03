import React, { useState } from "react";
import {send} from 'emailjs-com'
const CalltoActionSection = () => {
  const [email,setEmail] = useState('')
  const sendMail =(e)=>{
    e.preventDefault()
    send(
      'service_35ufbed',
      'template_p1001ym',
      {email},
      'XmKQGjZX647qN-Xqx'
    )
    .then((res)=>{
      alert("Message sent successfully",res.status,res.text)
    })
    .catch((err)=>{
      alert("failed",err)
    })
  }
  return (
    <div className="subscribe-section bg-with-black" style={{position:"relative",zIndex:1000}}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>DO you need more tips?</h2>
              <p>Sign up free and get the latest tips.</p>
              <form className="form-section" onSubmit={sendMail} >
                <input placeholder="Your Email..." value={email} onChange={(e)=>setEmail(e.target.value)} required name="email" type="email" />
                <input value="Yes. I want!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
