import sc from "./Options.module.css";

const Options = ({ options, setOtions, totalFeedback }) => {
  const feedbackTypes = Object.keys(options);

  const updateFeedback = (feedbackType) => {
    setOtions((prev) => {
      return {
        ...prev,
        [feedbackType]: prev[feedbackType] + 1,
      };
    });
  };

  const resetFeedback = () => {
    const resrtOptions = Object.keys(options).reduce((acc, option) => {
      acc[option] = 0;
      return acc;
    }, {});

    setOtions(resrtOptions);
  };

  return (
    <ul className={sc.list}>
      {feedbackTypes.map((feedbackType, index) => (
        <li key={index}>
          <button onClick={() => updateFeedback(feedbackType)}>
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
