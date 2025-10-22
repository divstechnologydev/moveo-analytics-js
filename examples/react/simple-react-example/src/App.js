import { useEffect, useState } from "react";
import { MoveoOne } from "moveo-one-analytics-js";
import "./App.css";

const moveoInstance = MoveoOne.getInstance("<YOUR_API_TOKEN>");

moveoInstance.setLogging(true);
moveoInstance.setFlushInterval(5000);

function App() {
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    moveoInstance.start("main_screen", {
      app_version: "1.0.0",
      platform: "web",
    });

    // Enable latency tracking for prediction requests
    moveoInstance.calculateLatency(true);

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

  const handlePredict = async () => {
    try {
      console.log("Making prediction request...");
      console.log("Latency tracking is enabled - performance data will be sent automatically");
      
      const result = await moveoInstance.predict("demo-model-123");
      
      if (result.success) {
        if (result.status === "success") {
          console.log("✅ Prediction received:");
          console.log(`Model ID: ${result.model_id}`);
          console.log(`Probability: ${result.prediction_probability}`);
          console.log(`Binary result: ${result.prediction_binary}`);
          console.log("📊 Latency data sent to analytics platform");
        } else if (result.status === "pending") {
          console.log("⏳ Prediction pending:");
          console.log(`Message: ${result.message}`);
        }
      } else {
        console.log("❌ Prediction failed:");
        console.log(`Status: ${result.status}`);
        console.log(`Message: ${result.message}`);
        console.log("📊 Latency data still sent for failed requests");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
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
        <button
          className="button predict"
          onClick={handlePredict}
        >
          Get Prediction
        </button>
      </div>
    </div>
  );
}

export default App;
