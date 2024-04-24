import { React, useContext } from "react";
import Cars from "./cars";
import { CarContext } from "./context";

const ComponentUseContext = () => {
  const data = useContext(CarContext);
  return (
    <div
      className="useContext"
      style={{
        marginTop: "10px",
        paddingBottom: "10px",
        borderBottom: "2px solid red",
      }}
    >
      <Cars carData={data.carData}></Cars>
    </div>
  );
};

export { ComponentUseContext };
