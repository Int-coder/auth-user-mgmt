import React from "react";

import "./Input.css";

const Input = ({ label, name, value, onChange }) => {
  return (
    <div className="input-container mx-4">
      <div className="input-label">{label}</div>
      <input
        className="input-label rounded rounded-2"
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Input;
