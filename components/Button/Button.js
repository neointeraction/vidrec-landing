import React from "react";

const Button = ({ variant, btnText, endIcon, onClick }) => {
  return (
    <div>
      <button
        className={`custom-button ${
          variant === "secondary"
            ? "secondary"
            : variant === "tertiary"
            ? "tertiary"
            : null
        }`}
        onClick={onClick}
      >
        {btnText} {endIcon && <span className="end-icon">{endIcon}</span>}
      </button>
    </div>
  );
};

export default Button;
