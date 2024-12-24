import "./App.css";
import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const item = {
  title: "Sip Happens Cafe",
  desc: "Please leave your feedback about our service by selecting one of the options below.",
};

const savedData = localStorage.getItem("options");

const initialOptions = savedData
  ? JSON.parse(savedData)
  : { good: 0, neutral: 0, bad: 0 };

function App() {
  const [options, setOptions] = useState(initialOptions);
  const totalFeedback = options.good + options.neutral + options.bad;
  const positiveFeedback =
    Math.round((options.good / totalFeedback) * 100) || 0;

  useEffect(() => {
    localStorage.setItem("options", JSON.stringify(options));
  }, [options]);

  const handleFeedback = (type) => {
    setOptions((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetFeedback = () => {
    const resrtOptions = Object.keys(options).reduce((acc, option) => {
      acc[option] = 0;
      return acc;
    }, {});

    setOptions(resrtOptions);
  };

  return (
    <div className="App">
      <Description title={item.title} desc={item.desc} />
      <Options
        options={options}
        totalFeedback={totalFeedback}
        handleFeedback={handleFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          options={options}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}

export default App;
