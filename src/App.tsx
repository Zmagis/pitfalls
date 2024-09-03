import { useState } from "react";
import "./App.css";
import { Item } from "./components/Item";

const elements = [
  { id: 1, initialCount: 0 },
  { id: 2, initialCount: 0 },
  { id: 3, initialCount: 0 },
  { id: 4, initialCount: 0 },
  { id: 5, initialCount: 0 },
  { id: 6, initialCount: 0 },
  { id: 7, initialCount: 0 },
  { id: 8, initialCount: 0 },
  { id: 9, initialCount: 0 },
  { id: 10, initialCount: 0 },
  { id: 11, initialCount: 0 },
  { id: 12, initialCount: 0 },
];

function App() {
  const [shuffledEl, setShuffledEl] = useState(elements);

  const shuffle = () => {
    const shuffled = shuffledEl.sort(() => Math.random() - 0.5);
    setShuffledEl([...shuffled]);
  };

  return (
    <div>
      <h2>
        Example of issues when using an array index as the key for rendering
        list elements in a UI
      </h2>
      <button
        style={{ color: "black", background: "#fefefe" }}
        onClick={shuffle}
      >
        Shuffle
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {shuffledEl.map((el, i) => (
          <Item key={i} id={el.id} initialCount={el.initialCount} />
        ))}
      </div>
    </div>
  );
}

export default App;
