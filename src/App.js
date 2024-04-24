import "./App.css";
import { React } from "react";
// import { useMemo } from 'React'
// import JS
import { ComponentUseState } from "./components/useState/useState";
import { ComponentUseEffect } from "./components/useEffect/useEffect";
import { ComponentUseRef } from "./components/useRef/useRef";
import { ComponentUseContext } from "./components/useContext/useContext";
// import { ComponentUseMemo } from "./components/useMemo/useMemo";

// Code

export default function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <main style={{ width: "100%" }}>
        <ComponentUseState></ComponentUseState>
        <ComponentUseEffect></ComponentUseEffect>
        <ComponentUseRef></ComponentUseRef>
        {/* <ComponentUseMemo></ComponentUseMemo> */}
        <ComponentUseContext></ComponentUseContext>
      </main>
    </div>
  );
}
