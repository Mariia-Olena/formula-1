import { useQuiz } from 'context/QuizContext';

function FinishScreen() {
  const { points, maxPossiblePoints } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <div className='quiz-container quiz-finishScreen'>
      <img
        className='quiz-img'
        src='/src/assets/quiz_champion.jpg'
        alt='lewis hamilton with a trophy'
      />
      <p className='quiz-title'>🏆 congratulations 🎉</p>
      <p>
        You scored <strong>{points}</strong> points out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
    </div>
  );
}

export default FinishScreen;
