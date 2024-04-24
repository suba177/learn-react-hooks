import React, { useContext } from "react";
import { CarContext } from "./context";

export default function Car(props) {
  const data = useContext(CarContext);
  const { model } = props;

  return (
    <div>
      <h2>{model}</h2>
      <button
        onClick={() => {
          data.deleteCar(model);
        }}
      >
        delete {model}
      </button>
    </div>
  );
}
