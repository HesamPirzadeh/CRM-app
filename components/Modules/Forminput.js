import React from "react";

function Forminput({ name, value, onChange, label, type }) {
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        value={value}
        name={name}
        type={type}
        onChange={onChange}
      />
    </div>
  );
}

export default Forminput;
