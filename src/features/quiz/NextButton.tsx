import { useQuiz } from 'context/QuizContext';

function NextButton() {
  const { dispatch, answer, numQuestions, index } = useQuiz();

  if (answer === null) return null;

  if (index < numQuestions - 1) {
    return (
      <button
        onClick={() => dispatch({ type: 'nextQuestion' })}
        className='quiz-nextButton'
      >
        NEXT ▶
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        onClick={() => dispatch({ type: 'finish' })}
        className='quiz-nextButton'
      >
        Finish 🏁
      </button>
    );
  }
}

export default NextButton;
