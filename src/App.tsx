import "./App.css";
import { IndexAsKey } from "./pitfalls/IndexAsKey.tsx";
import { IIFinuseState } from "./pitfalls/IIFinuseState/index.tsx";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <IIFinuseState />
      <IndexAsKey />
    </div>
  );
}

export default App;
