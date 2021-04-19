import React from "react";

import useForm from "./useForm";

const OTP = (props) => {
  return (
    <div className="otp">
      <div class="container form">
        <form action="">
          <p>Enter the 4-digit code sent to you at 123456789.</p>
          <a href="#">Did you enter the correct number?</a>
          <div class="otp-box">
            <input maxlength="1" class="otp" type="text" />
            <input maxlength="1" class="otp" type="text" />
            <input maxlength="1" class="otp" type="text" />
            <input maxlength="1" class="otp" type="text" />
          </div>
          <div>
            <a href="#">I didn't receive code</a>
            <button type="submit">
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default OTP;
