import sc from "./Options.module.css";

const Options = ({ options, totalFeedback, handleFeedback, resetFeedback }) => {
  const feedbackTypes = Object.keys(options);

  return (
    <ul className={sc.list}>
      {feedbackTypes.map((feedbackType, index) => (
        <li key={index}>
          <button onClick={() => handleFeedback(feedbackType)}>
            {feedbackType}
          </button>
        </li>
      ))}
      {totalFeedback > 0 && (
        <li>
          <button onClick={resetFeedback}>Reset</button>
        </li>
      )}
    </ul>
  );
};

export default Options;
