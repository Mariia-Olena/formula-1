import { start } from 'features/champions/quiz/quizSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store/store';
import './quiz.scss';
import 'styles/globalStyles.scss';

function StartScreen() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className='container'>
      <h2>
        Are you a true <span>Formula-1</span> fan?
      </h2>
      <p>
        Challenge yourself by naming all the Formula 1 champions from the
        present <br /> to the way back to 1950
      </p>
      <button className='button' onClick={() => dispatch(start())}>
        Let's go to win🏆
      </button>
    </div>
  );
}

export default StartScreen;
