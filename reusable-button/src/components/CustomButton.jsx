import React from "react";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <div>
      <button
        className={`${isGoogleSignIn ? "google-signin" : ""} custom-button`}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
