import { useState } from "react";

interface ItemProps {
  id: number;
  initialCount: number;
}

export const Item = ({ id, initialCount }: ItemProps) => {
  const [count, setCount] = useState(initialCount);

  const updateCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div
      style={{
        background: "#fefefe",
        padding: "20px",
        borderRadius: "5px",
        width: "140px",
      }}
      onClick={updateCount}
    >
      <span
        style={{
          color: "grey",
          width: "100%",
          display: "flex",
          fontSize: "12px",
        }}
      >
        ID: {id}
      </span>
      <h1 style={{ color: "gold" }}>{count}</h1>
    </div>
  );
};
