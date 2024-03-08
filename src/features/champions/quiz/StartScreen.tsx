import { start } from 'features/champions/quiz/quizSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/store/store';
import './quiz.scss';

function StartScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.quiz.status);
  const list = useSelector((state: RootState) => state.quiz.questions);
  console.log(list);

  return (
    <>
      <div className='container'>
        <h2>
          Are you a true <span>Formula-1</span> fan?
        </h2>
        <p>
          Challenge yourself by naming all the Formula 1 champions from the
          present <br /> to the way back to 1950
        </p>
        <button onClick={() => dispatch(start())}>Let's go</button>
        <p>{status}</p>
      </div>
    </>
  );
}

export default StartScreen;
