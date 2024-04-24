import React from "react";
import Car from "./car";

export default function Cars(props) {
  const carData = props.carData;
  const { deleteCar } = props;

  return (
    <>
      {carData.map((oneCar) => {
        return (
          <Car key={oneCar.id} deleteCar={deleteCar} model={oneCar.model} />
        );
      })}
    </>
  );
}
