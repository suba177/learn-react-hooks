import React from "react";
import Car from "./car";

export default function Cars(props) {
  const carData = props.carData;

  return (
    <>
      <h1>5: useContext</h1>
      {carData.map((oneCar) => {
        return <Car key={oneCar.id} model={oneCar.model} />;
      })}
    </>
  );
}
