import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { MoveoOne } from 'moveo-one-analytics';

const analytics = MoveoOne.getInstance('<YOUR_SDK_TOKEN>');

function App() {
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    analytics.tick({
      semanticGroup: 'main_screen',
      id: 'screen_load',
      type: 'div',
      action: 'view',
      value: 'Main Screen Loaded'
    });
  }, []);

  const handlePress = (buttonName) => {
    analytics.track('main_screen', {
      semanticGroup: 'button_group',
      id: buttonName === "Button One" ? 'button_one' : 'button_two',
      type: 'button',
      action: 'click',
      value: buttonName
    });
    console.log(`${buttonName} clicked!`);
    if (buttonName === "Button One") {
      navigate("/second-screen");
    }
  };

  const handleInputBlur = () => {
    analytics.track('main_screen', {
      semanticGroup: 'input_field',
      id: 'input_blur',
      type: 'input',
      action: 'blur',
      value: inputText
    });
  };

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
