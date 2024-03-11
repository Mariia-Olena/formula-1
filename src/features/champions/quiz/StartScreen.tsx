import { useQuiz } from 'context/QuizContext';
import './quiz.scss';
import 'styles/globalStyles.scss';
import { useChampions } from 'features/champions/useChampions';

function StartScreen() {
  const { champions, error } = useChampions();
  const { dispatch } = useQuiz();

  function handleOnClick(): void {
    dispatch({ type: 'start' });
    if (champions) dispatch({ type: 'dataReceived', payload: champions });
    if (error) dispatch({ type: 'dataFailed' });
  }
  return (
    <div className='container'>
      <h2>
        Are you a true <span>Formula-1</span> fan?
      </h2>
      <p>
        Challenge yourself by naming all the Formula 1 champions from the
        present <br /> to the way back to 1950
      </p>
      <button onClick={handleOnClick} className='button'>
        Let's go to win🏆
      </button>
    </div>
  );
}

export default StartScreen;
