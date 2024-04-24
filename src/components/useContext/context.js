import React, { useState, createContext } from "react";

export const CarContext = createContext();

export default function Context(props) {
  const [carData, setCarData] = useState([
    { model: "BMW", id: 1 },
    { model: "Volga", id: 2 },
    { model: "Mercedes", id: 3 },
  ]);

  const deleteCar = (carModel) => {
    setCarData(
      carData.filter((car) => {
        return car.model !== carModel;
      })
    );
  };

  const value = {
    carData,
    deleteCar,
  };

  return (
    <CarContext.Provider value={value}>{props.children}</CarContext.Provider>
  );
}
