import './quiz.scss';

import QuizScreen from 'features/champions/quiz/QuizScreen';
import StartScreen from 'features/champions/quiz/StartScreen';
import { useQuiz } from 'context/QuizContext';

function QuizLayout() {
  const { status } = useQuiz();
  return (
    <div className='layout'>
      {status === 'loading' && <StartScreen />}
      {status === 'ready' && <QuizScreen />}
    </div>
  );
}

export default QuizLayout;
