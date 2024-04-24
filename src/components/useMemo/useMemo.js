import { useState, useMemo } from "react";

const propX = () => {
  let i = 0;
  while (i < 1000000000) i++;
  return i;
};

const ComponentUseMemo = () => {
  const [number, setNumber] = useState(1);

  const sum = (a, b, d) => (a * b) / d;

  useMemo(() => {
    sum(propX(), number, 1000000000);
  }, [propX]);

  return (
    <div
      className="useMemo"
      style={{
        marginTop: "10px",
        paddingBottom: "10px",
        borderBottom: "2px solid red",
      }}
    >
      <h1>4: useMemo </h1>
      <h2>calculated property: {number}</h2>
      <button onClick={() => setNumber((prevVal) => prevVal + 1)}>+</button>
      <button onClick={() => setNumber((prevVal) => prevVal - 1)}>-</button>
      <p>
        в зависимость передано значение содержащее ресурсозатратное вычисление,
        но счетчик меняется без задержек
      </p>
    </div>
  );
};

export { ComponentUseMemo };
