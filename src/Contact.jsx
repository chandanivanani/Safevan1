import React, { useState } from "react";
import Navbar from "./Navbar";

const Contact = () => {
    const [data, setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        message:""
    });
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`Your name is ${data.fullname}. Your mobile number is ${data.phone}. Your emailID is ${data.email}. And your message is ${data.message}.`);
    };
    const InputEvent=(event)=>{
        const {name, value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]: value,
            };
        });
    }
  return (
    <>
    <Navbar />
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="form-group">
                <label for="exampleFormControlInput1">Fullname</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Mobile Number</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter mobile number"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary mt-2">Submit Form</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
