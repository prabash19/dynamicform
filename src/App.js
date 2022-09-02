import React from "react";
import DynamicForm from "./components/DynamicForm";
import "./App.css";
import DummyData from "./DummyData";
import JsonSchema from "./components/JsonSchema";
function App() {
  return (
    <div className="wrapper">
      <DynamicForm data={DummyData} schema={JsonSchema} />
    </div>
  );
}

export default App;
