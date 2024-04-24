import { useState } from "react";

const ComponentUseState = () => {
  const [visible, setVisibility] = useState(false);

  const handleClick = () => {
    setVisibility((currentValue) => !currentValue);
  };

  return (
    <div
      className="useState"
      style={{ borderBottom: "2px solid red", paddingBottom: "10px" }}
    >
      <h1>1: What is React? (useState Hook)</h1>
      <button onClick={handleClick}>Show (toggler)</button>
      {visible && (
        <div>
          <p>A JS library</p>
        </div>
      )}
    </div>
  );
};

export { ComponentUseState };
