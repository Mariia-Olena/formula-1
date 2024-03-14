import { useQuiz } from 'context/QuizContext';
import Options from 'features/quiz/Options';
import Question from 'features/quiz/Question';
import NextButton from 'features/quiz/NextButton';

function QuizScreen() {
  const { champions, index, points, answer } = useQuiz();
  const champion = champions[index];
  const isAnswerCorrect =
    champion.name === answer?.name && champion.year === answer.year;

  return (
    <div className='quiz-container quiz-quizScreen'>
      <Question />
      <Options />
      <div className='quiz-box'>
        <p>
          Your score: <strong> {points}</strong>pts
        </p>
        <NextButton />
      </div>
      <p>
        {answer
          ? isAnswerCorrect
            ? 'You are absolutely right'
            : `Nope... it is not him, it is ${champion.name}`
          : null}
      </p>
    </div>
  );
}

export default QuizScreen;
