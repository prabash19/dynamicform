import React, { useState } from "react";
const DynamicForm = (props) => {
  const [formData, updateFormData] = useState(props.data);
  console.log(formData);
  return <div></div>;
};
export default DynamicForm;
