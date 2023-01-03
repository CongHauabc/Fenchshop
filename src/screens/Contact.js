import React, { useState } from "react";
import "../screens/footer/contac.css";
import {send} from 'emailjs-com'

const Contact = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    
    const sendMail =(e)=>{
        e.preventDefault()
        send(
          'service_4tc3bcg',
          'template_zhlun6e',
          {name,email,message,email},
          'XmKQGjZX647qN-Xqx'
        )
        .then((res)=>{
          alert("Message sent successfully",res.status,res.text)
        })
        .catch((err)=>{
          alert("failed",err)
        })
        setEmail('')
        setName('')
        setMessage('')
      }

    return (
    <div style={{position:"relative",zIndex:1000}}>
      <div id="form">
              <div class="fish" id="fish"></div>
              <div class="fish" id="fish2"></div>

              <form id="waterform"  onSubmit={sendMail}>
                <div class="formgroup" id="name-form">
                  <label className="label" for="name">Your name*</label>
                  <input  className="inp" type="text" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>

                <div class="formgroup" id="email-form">
                  <label className="label" for="email">Your e-mail*</label>
                  <input className="inp"  type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <div class="formgroup" id="message-form">
                  <label className="label" for="message">Your message</label>
                  <textarea  className="inp" id="message" name="message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                </div>

                <input type="submit" value="Send your message!" className="sub" />
              </form>
            </div>
    </div>
  );
};

export default Contact;
