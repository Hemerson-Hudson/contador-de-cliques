import React from "react";
import Contador from "./components/Contador";
import "./index.css";

function App() {

  document.title = "Meu Contador";

  return (
    <div>
      <Contador />
    </div>
  );
}



export default App;