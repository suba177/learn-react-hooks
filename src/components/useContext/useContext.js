import Cars from "./cars";
import { useState } from "react";

const ComponentUseContext = () => {
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

  return (
    <div
      className="useContext"
      style={{
        marginTop: "10px",
        paddingBottom: "10px",
        borderBottom: "2px solid red",
      }}
    >
      <Cars carData={carData} deleteCar={deleteCar}></Cars>
    </div>
  );
};

export { ComponentUseContext };
