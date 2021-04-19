import React from "react";

import "./form.scss";
import useForm from "./useForm";
import validate from "./validateForm";

const Register = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors, isSubmitting } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="phoneform">
      <form onSubmit={handleSubmit}>
        <p className="title">Get moving with Uber</p>
        <div className="container">
          <label htmlFor="number">+84</label>
          <input
            type="text"
            id="number"
            name="number"
            placeholder="Enter your mobile number"
            value={values.number}
            onChange={handleChange}
          />
        </div>
        {errors.number && (
          <small style={{ color: "red" }}>{errors.number}</small>
        )}
        <br />
        <br />
        <input type="checkbox" onChange={handleChange} />
        <label id="term" htmlFor="terms">
          Agree Terms and Conditions
        </label>
        <br />
        {errors.number && (
          <small style={{ color: "red" }}>{errors.checked}</small>
        )}
        <br />
        <button type="submit">
          <i className="fas fa-arrow-right"></i>
        </button>
      </form>
    </div>
  );
};

export default Register;
