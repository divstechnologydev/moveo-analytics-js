import "./App.css";
import { useEffect } from "react";
import { MoveoOne } from 'moveo-one-analytics';

const analytics = MoveoOne.getInstance('<YOUR_SDK_TOKEN>');

function SecondScreen() {
  useEffect(() => {
    analytics.tick({
      semanticGroup: 'second_screen',
      id: 'screen_load',
      type: 'div',
      action: 'view',
      value: 'Second Screen Loaded'
    });
    console.log("Second screen loaded");
  }, []);

  const handlePress = (buttonName) => {
    analytics.track('second_screen', {
      semanticGroup: 'button_group',
      id: 'primary_button',
      type: 'button',
      action: 'click',
      value: buttonName
    });
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
