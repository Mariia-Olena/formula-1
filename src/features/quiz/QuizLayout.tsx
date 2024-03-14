import './quizStyles.scss';
import { useQuiz } from 'context/QuizContext';
import QuizScreen from 'features/quiz/QuizScreen';
import StartScreen from 'features/quiz/StartScreen';
import FinishScreen from 'features/quiz/FinishScreen';

function QuizLayout() {
  const { status } = useQuiz();

  return (
    <div className='quiz-layout'>
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
