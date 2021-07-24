import React, { useState } from "react";

function Formulario(props) {
  // const [count, setCount] = useState(0);
  // let [foo, setFoo] = useState("foo");
  const [value, setValue] = useState(1);
  return (
    <div>
      <ol>
        <h1>
          {props.lastName},{props.firstName}
        </h1>
      </ol>
      <ol>
        {/* Age: foo={foo} setFoo={setFoo}{" "} */}
        Age: {value}
      </ol>
       <ol> Hair color: {props.hairColor} </ol>
      <ol>
        {/* <button onClick={() => setCount(1)}>Click me!</button> */}
        <button onClick={() => setValue(value + 1)}>Birthday button</button>
      </ol>
    </div>
  );
}

export default Formulario;
