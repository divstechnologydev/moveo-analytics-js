import "./App.css";
import { useEffect } from "react";

function SecondScreen() {
  useEffect(() => {
    console.log("Second screen loaded");
  }, []);

  const handlePress = (buttonName) => {
    console.log(`${buttonName} clicked!`);
  };

  return (
    <div className="main-container">
      <h1 className="title">Second Screen</h1>
      <p className="paragraph">Welcome to the second screen!</p>
      <div className="button-group">
        <button
          className="button primary"
          onClick={() => handlePress("Button")}
        >
          Button
        </button>
      </div>
    </div>
  );
}

export default SecondScreen;
