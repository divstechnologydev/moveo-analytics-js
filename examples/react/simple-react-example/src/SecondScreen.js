import "./App.css";
import { useEffect } from "react";

function SecondScreen() {
  useEffect(() => {
    console.log("Second screen loaded");
  }, []);

  return (
    <div className="main-container">
      <h1 className="title">Second Screen</h1>
      <p className="paragraph">Welcome to the second screen!</p>
    </div>
  );
}

export default SecondScreen;
