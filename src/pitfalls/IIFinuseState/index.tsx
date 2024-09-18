import { useState } from "react";
import { Section } from "../../components/Section";

const sleepSync = (ms: number) => {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    // Busy-wait loop
    console.log("waiting...");
  }
};

const getSecretWord = () => {
  const words = ["apple", "banana", "cherry"];
  sleepSync(150);
  return words[Math.floor(Math.random() * words.length)];
};

export const IIFinuseState = () => {
  const [secretWord, setSecretWord] = useState(getSecretWord());
  const [value, setValue] = useState("");
  console.log("secretWord", secretWord);

  const checkGuessedWord = () => {
    if (value === secretWord) {
      alert("You guessed the word! Try another one!");
      setSecretWord(getSecretWord());
    } else {
      alert("Try again!");
    }
  };

  const updateValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <Section>
      <h3>Using Immediately Invoked Function in useState</h3>
      <p>
        When using React's useState hook, it's common to initialize state with a
        value or a function that returns a value. However, using an immediately
        invoked function to initialize state can lead to unintended
        consequences, especially if the function performs side effects or has a
        significant delay
      </p>
      <input type="text" value={value} onChange={updateValue} />
      <button onClick={checkGuessedWord}>Guess</button>
    </Section>
  );
};
