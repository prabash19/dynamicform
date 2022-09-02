import React, { useState } from "react";
import JsonSchema from "./JsonSchema";
import "./formStyles.css";
function DynamicForm() {
  const [formData, updateFormData] = useState([null]);
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="formWrapper">
      {JsonSchema.form.map((FormData) => {
        return (
          <div key={FormData.id} className="formtitle">
            {FormData.name}
            <input
              name={FormData.name}
              type={FormData.type}
              onChange={handleChange}
              className="forminput"
            />
          </div>
        );
      })}
      <button onClick={handleSubmit} className="btn">
        Submit
      </button>
    </form>
  );
}
export default DynamicForm;
