import sc from "./Feedback.module.css";

const Feedback = ({ options, totalFeedback, positiveFeedback }) => {
  const optionsBtn = Object.entries(options);

  return (
    <ul className={sc.list}>
      {optionsBtn.map((option, index) => (
        <li key={index}>
          {option[0]}: {option[1]}
        </li>
      ))}
      <li key={"total"}>Total: {totalFeedback}</li>
      <li key={"positive"}>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
