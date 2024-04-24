import ComponentMain from "./main";
import Alert from "./alert";

const ComponentUseContext = () => {
  return (
    <div
      className="useContext"
      style={{
        marginTop: "10px",
        paddingBottom: "10px",
        borderBottom: "2px solid red",
      }}
    >
      <ComponentMain></ComponentMain>
      <Alert></Alert>
    </div>
  );
};

export { ComponentUseContext };
