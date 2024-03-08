import { useDispatch, useSelector } from 'react-redux';
import './quiz.scss';

import { AppDispatch, RootState } from 'src/store/store';
import StartScreen from 'features/champions/quiz/StartScreen';

function QuizLayout() {
  const status = useSelector((state: RootState) => state.quiz.status);

  return (
    <div className='layout'>
      {status === 'loading' && <StartScreen />}
      {status === 'ready' && <StartScreen />}
    </div>
  );
}

export default QuizLayout;
