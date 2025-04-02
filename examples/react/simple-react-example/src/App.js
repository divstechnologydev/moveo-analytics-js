import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handlePress = (buttonName) => {
    console.log(`${buttonName} clicked!`);
    if (buttonName === "Button One") {
      navigate("/second-screen");
    }
  };

  const handleInputBlur = () => {};

  return (
    <div className="main-container">
      <h1 className="title">Moveo One</h1>
      <div className="content-container">
        <p className="paragraph">
          This is an example React app made for demo purposes.
        </p>
        <div className="button-group">
          <button
            className="button primary"
            onClick={() => handlePress("Button One")}
          >
            Button One
          </button>
          <button
            className="button secondary"
            onClick={() => handlePress("Button Two")}
          >
            Button Two
          </button>
        </div>
        <input
          className="input-field"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onBlur={handleInputBlur}
          placeholder="Type something..."
        />
      </div>
    </div>
  );
}

export default App;
