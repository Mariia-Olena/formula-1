import './quiz.scss';
import { useQuiz } from 'context/QuizContext';
import QuizScreen from 'features/champions/quiz/QuizScreen';
import StartScreen from 'features/champions/quiz/StartScreen';
import FinishScreen from 'features/champions/quiz/FinishScreen';

function QuizLayout() {
  const { status } = useQuiz();

  return (
    <div className='layout'>
      <div>
        <div>
          {status === 'loading' && <StartScreen />}
          {status === 'ready' && <QuizScreen />}
          {status === 'finished' && <FinishScreen />}
        </div>
      </div>
    </div>
  );
}

export default QuizLayout;
