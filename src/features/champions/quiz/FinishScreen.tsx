import './quiz.scss';
import { useQuiz } from 'context/QuizContext';

function FinishScreen() {
  const { points, maxPossiblePoints } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <div className=' container finishScreen'>
      <img
        className='img'
        src='/src/assets/quiz_champion.jpg'
        alt='lewis hamilton with a trophy'
      />
      <p className='title'>🏆 congratulations 🎉</p>
      <p>
        You scored <strong>{points}</strong> points out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
    </div>
  );
}

export default FinishScreen;
