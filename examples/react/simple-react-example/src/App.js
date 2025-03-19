import { useEffect, useState } from "react";
import { MoveoOne } from "moveo-one-analytics-js";
import "./App.css";

const moveoInstance = MoveoOne.getInstance("<YOUR_API_TOKEN>");

moveoInstance.setLogging(true);
moveoInstance.setFlushInterval(5000);

function App() {
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    moveoInstance.identify("<USER_ID>");
    moveoInstance.start("main_screen", {
      app_version: "1.0.0",
      platform: "web",
    });

    // Paragraph tracking (tick)
    moveoInstance.tick({
      semanticGroup: "content_section",
      id: "intro_paragraph",
      type: "text",
      action: "view",
      value: "demo_description",
      metadata: { content_type: "static_text" },
    });
  }, []);

  const handlePress = (buttonName) => {
    // Button tracking (track)
    moveoInstance.track("main_screen", {
      semanticGroup: "action_section",
      id: `${buttonName.toLowerCase().replace(" ", "_")}_button`,
      type: "button",
      action: "click",
      value: buttonName.toLowerCase(),
      metadata: { action_type: "user_click" },
    });
    console.log(`${buttonName} clicked!`);
  };

  const handleInputBlur = () => {
    // Input tracking (track)
    moveoInstance.track("main_screen", {
      semanticGroup: "form_section",
      id: "main_input",
      type: "input",
      action: "edit",
      value: "text_update",
      metadata: { input_type: "free_text" },
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
