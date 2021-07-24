import React from "react";
import "./App.css";
import Formulario from "./componentes/Formulario";

function App() {
  return (
    <div class="centered">
      <Formulario lastName="Doe" firstName="Joe" age="45" hairColor="Black" />
      <Formulario
        lastName="Smith"
        firstName="John"
        age="88"
        hairColor="Brown"
      />
    </div>
  );
}
export default App;
