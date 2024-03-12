import { useState } from 'react';

import { useQuiz } from 'context/QuizContext';
import { useChampions } from 'features/champions/useChampions';
import { shuffle } from 'utils/helpers';

function StartScreen() {
  const { champions, error } = useChampions();
  const { dispatch } = useQuiz();
  const [numQuestions, setNumQuestions] = useState<number>(0);

  function handleOnClick(): void {
    dispatch({ type: 'start', payload: numQuestions });
    if (champions)
      dispatch({
        type: 'dataReceived',
        payload: shuffle(champions),
      });
    if (error) dispatch({ type: 'dataFailed' });
  }

  return (
    <div className='quiz-container quiz-startScreen'>
      <h2>
        Are you a true <span>Formula-1</span> fan?
      </h2>
      <p>
        Challenge yourself by naming all the Formula 1 champions from the
        present <br /> to the way back to 1950
      </p>
      <p>How many you try to guess?</p>
      <div>
        <button
          className={`quiz-select ${numQuestions === 10 ? 'quiz-chosen' : ''}`}
          onClick={() => setNumQuestions(10)}
        >
          10 Champions
        </button>
        <button
          className={`quiz-select ${numQuestions === 20 ? 'quiz-chosen' : ''}`}
          onClick={() => setNumQuestions(20)}
        >
          20 Champions
        </button>
        <button
          className={`quiz-select ${numQuestions === 30 ? 'quiz-chosen' : ''}`}
          onClick={() => setNumQuestions(30)}
        >
          30 Champions
        </button>
        <button
          className={`quiz-select ${numQuestions === 1 ? 'quiz-chosen' : ''}`}
          onClick={() => setNumQuestions(1)}
        >
          All of them
        </button>
      </div>
      <button
        disabled={!numQuestions}
        onClick={handleOnClick}
        className='button'
      >
        Let's go to win🏆
      </button>
    </div>
  );
}

export default StartScreen;
