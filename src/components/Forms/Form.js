import React, { useState } from "react";
import { Loader } from "semantic-ui-react";

import "./form.scss";
import Header from "../Header";
import Footer from "../Footer";
import Register from "./Register";
import OTP from "./OTP";
import validate from "./validateForm";

const Form = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <div>
      <Header />
      <div className="register">
        <img src="https://images.pexels.com/photos/34239/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      </div>
      {!isSubmitted ? <Register submitForm={submitForm} /> : <OTP />}
      <Footer />
    </div>
  );
};

export default Form;
