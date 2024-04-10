import React from "react";
import "./Input.scss";

const Input = ({
  type,
  message,
  className,
  placeholder,
  onChange,
  value,
  width,
  height,
}) => {
  return (
    <div>
      <input
        className={className}
        type={type}
        onChange={onChange}
        value={value}
        style={{ height: height, width: width }}
      />
      <span>{message}</span>
      <label>{placeholder}</label>
    </div>
  );
};

export default Input;
