import "./App.css";
import { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

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

  localStorage.setItem("options", JSON.stringify(options));

  return (
    <div className="App">
      <Description title={item.title} desc={item.desc} />
      <Options
        options={options}
        totalFeedback={totalFeedback}
        setOtions={setOptions}
      />
      <Feedback options={options} totalFeedback={totalFeedback} />
    </div>
  );
}

export default App;
