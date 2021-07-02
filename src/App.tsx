import React from "react";
import AddForm from "./books/components/addForm/AddForm";
import "./App.css";
import Container from "./books/components/rowContainer/RowContainer";
import InfoBar from "./books/components/infoBar/InfoBar";
function App() {
  return (
    <div className="todo-app">
      <h1>Library</h1>
      <AddForm></AddForm>
      <div>
        <InfoBar />
      </div>
    </div>
  );
}

export default App;
