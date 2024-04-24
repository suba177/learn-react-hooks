import { useState, useEffect, useRef } from "react";

const ComponentUseRef = () => {
  const [value, setValue] = useState("write for the render");

  const renderCount = useRef(0);

  const prevValue = useRef("");

  const inputRef = useRef(null);

  useEffect(() => {
    renderCount.current++;
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const clearRenders = () => {
    renderCount.current = 0;
    setValue("");
  };

  const focus = () => inputRef.current.focus();
  return (
    <div
      className="useRef"
      style={{
        marginTop: "10px",
        paddingBottom: "10px",
        borderBottom: "2px solid red",
      }}
    >
      <h1>3: useRef</h1>
      <h2>the number of renderers of this block: {renderCount.current}</h2>
      <h2>previous status: {prevValue.current}</h2>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        id="inputRefs"
      />
      <button onClick={clearRenders}>clear text and renders</button>
      <button onClick={focus}>focus on the text</button>
    </div>
  );
};

export { ComponentUseRef };
