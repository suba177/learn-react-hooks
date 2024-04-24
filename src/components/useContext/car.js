import React from "react";

export default function Car(props) {
  const { model, deleteCar } = props;

  return (
    <div>
      <h1>{model}</h1>
      <button onClick={() => deleteCar(model)}>delete {model}</button>
    </div>
  );
}
