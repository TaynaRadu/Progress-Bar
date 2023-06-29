import { useState } from "react";
import "./App.css";
import { ProgressBar } from "./assets/components/progress-bar/index";

function App() {
  const [progress, setProgress] = useState(0);

  const handleNextButtonClick = () => {
    setProgress((currentprogress) => {
      const newProgress = currentprogress + 10;
      //if the newProgress is equals or more than 100% it will return the currentProgress
      return newProgress <= 100 ? newProgress : currentprogress;
    });
  };

  const handlePreviousButtonClick = () => {
    setProgress((currentProgress) => {
      const newProgress = currentProgress - 10;
      //if the newProgress is equals or less than 0 it will return the currentProgress
      return newProgress >= 0 ? newProgress : currentProgress;
    });
  };

  const handleNextButtonDisable = progress === 100;
  const handlePreviousButtonDisable = progress === 0;

  return (
    <>
      <h1>Progress Bar</h1>

      <div className="container">
        <ProgressBar progress={progress} />

        <div className="controls">
          <button
            id="previous-btn"
            onClick={handlePreviousButtonClick}
            disabled={handlePreviousButtonDisable}
          >
            <i className="bi bi-arrow-left"></i> Voltar
          </button>
          <button
            id="next-btn"
            onClick={handleNextButtonClick}
            disabled={handleNextButtonDisable}
          >
            proximo <i className="bi bi-arrow-right"></i>
          </button>
        </div>
        {/* if button disabled is true so the message will apears **shorter way to write IF** */}
        {handleNextButtonDisable && <h3 className="message">Progress Done!</h3>}
      </div>
    </>
  );
}

export default App;
