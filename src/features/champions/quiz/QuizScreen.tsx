import './quiz.scss';
import { useQuiz } from 'context/QuizContext';
import Options from 'features/champions/quiz/Options';
import Question from 'features/champions/quiz/Question';
import NextButton from 'features/champions/quiz/NextButton';

function QuizScreen() {
  const { champions, index, points, answer } = useQuiz();
  const champion = champions[index];
  const isAnswerCorrect =
    champion.name === answer?.name && champion.year === answer.year;

  return (
    <div className='container quizScreen'>
      <Question />
      <Options />
      <div className='box'>
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
