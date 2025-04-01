import { useEffect, useState } from "react";
import { MoveoOne } from "moveo-one-analytics-js";
import "./App.css";

const analytics = MoveoOne.getInstance('<YOUR_SDK_TOKEN>');

function App() {
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    analytics.start('main_screen', {
      version: '1.0.0',
      environment: 'development'
    });

    return () => {
      analytics.stop();
    };
  }, []);

  const handlePress = (buttonName) => {
    console.log(`${buttonName} clicked!`);
    analytics.track('main_screen', {
      semanticGroup: 'button_group',
      id: buttonName.toLowerCase().replace(' ', '_'),
      type: 'button',
      action: 'click',
      value: buttonName,
      metadata: { location: 'button_group' }
    });
  };

  const handleInputBlur = () => {
    analytics.track('main_screen', {
      semanticGroup: 'input_field',
      id: 'input_field',
      type: 'input',
      action: 'blur',
      value: inputText,
      metadata: { placeholder: 'Type something...' }
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
